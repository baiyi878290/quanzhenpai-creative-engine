// 动作匹配验证器
import { Shot, ValidationResult } from "../types";

export function validateActionMatch(shots: Shot[]): ValidationResult {
  const violations = [];
  for (let i = 1; i < shots.length; i++) {
    const prev = shots[i - 1];
    const curr = shots[i];
    if (prev.transition === "match_cut" && prev.movement !== curr.movement) {
      violations.push({
        type: "MATCH_CUT_MISMATCH", severity: "ERROR", shotIndex: i,
        message: `匹配剪辑要求前后镜头运动方向一致`,
        suggestion: `将镜 ${curr.shotNumber} 运动改为 ${prev.movement}`,
      });
    }
    if (prev.transition === "jump_cut" && prev.shotSize === curr.shotSize && prev.angle === curr.angle) {
      violations.push({
        type: "JUMP_CUT_SAME_FRAME", severity: "WARNING", shotIndex: i,
        message: "跳切时前后镜头景别和角度相同，画面跳跃不自然",
        suggestion: "改变景别至少 2 档（如近景→特写）或改变角度",
      });
    }
  }
  return { valid: violations.length === 0, violations };
}
