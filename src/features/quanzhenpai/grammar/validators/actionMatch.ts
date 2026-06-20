import type { Shot, CameraMovement } from "../types";
import type { ValidationResult, Violation } from "./axisRule";

export function validateActionMatch(shots: Shot[]): ValidationResult {
  const v: Violation[] = [];
  const conflicts: [CameraMovement,CameraMovement,string][] = [
    ["pan_left","pan_right","水平方向相反(左摇→右摇)"],
    ["pan_right","pan_left","水平方向相反(右摇→左摇)"],
    ["tilt_up","tilt_down","垂直方向相反(仰摇→俯摇)"],
    ["push_in","pull_out","纵深方向相反(推→拉)"],
    ["pull_out","push_in","纵深方向相反(拉→推)"],
  ];
  for (let i=1;i<shots.length;i++) {
    const prev=shots[i-1], curr=shots[i];
    for (const [p,c,desc] of conflicts) {
      if (prev.movement===p && curr.movement===c) {
        v.push({ type:"MOVEMENT_CONFLICT", severity:"WARNING", shotIndex:i, message:desc, suggestion:"插入中性运动过渡或使用叠化转场" });
      }
    }
    if (curr.transition==="match_cut" && prev.shotSize===curr.shotSize) {
      v.push({ type:"MATCH_CUT_SAME_SIZE", severity:"WARNING", shotIndex:i, message:"匹配剪辑景别相同，可能被误认为跳切", suggestion:"使用不同景别强化视角变化" });
    }
  }
  return { valid: v.filter(x=>x.severity==="ERROR").length===0, violations: v };
}
