import type { Shot } from "../types";
import type { ValidationResult, Violation } from "./axisRule";

export function validateTimeContinuity(shots: Shot[]): ValidationResult {
  const v: Violation[] = [];
  const flashback = /之前|回忆|过去|当时|以前|earlier|ago|remember|past/i;
  const flashforward = /之后|将来|未来|多年后|later|after|future|next/i;
  for (let i=1;i<shots.length;i++) {
    const prev=shots[i-1], curr=shots[i];
    if (flashback.test(curr.visualDescription||curr.notes||"")) {
      if (curr.transition!=="dissolve" && curr.transition!=="fade_to_black" && curr.transition!=="fade_to_white") {
        v.push({ type:"FLASHBACK_NO_TRANSITION", severity:"WARNING", shotIndex:i, message:`闪回缺少时间转换标记`, suggestion:"使用dissolve/fade_to_black/fade_to_white转场" });
      }
    }
    if (flashforward.test(curr.visualDescription||curr.notes||"")) {
      if (curr.transition!=="dissolve" && curr.transition!=="fade_to_black") {
        v.push({ type:"FLASHFORWARD_NO_TRANSITION", severity:"WARNING", shotIndex:i, message:`闪前缺少时间转换标记`, suggestion:"使用dissolve/fade_to_black转场" });
      }
    }
    if (curr.transition==="dissolve" && prev.visualDescription===curr.visualDescription) {
      v.push({ type:"DISSOLVE_SAME_SCENE", severity:"INFO", shotIndex:i, message:"叠化但画面描述相同，可能不是时间流逝", suggestion:"同场景过渡建议用硬切" });
    }
  }
  return { valid: v.filter(x=>x.severity==="ERROR").length===0, violations: v };
}
