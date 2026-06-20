// 时间连续验证器
import { Shot, ValidationResult } from "../types";

export function validateTimeContinuity(shots: Shot[]): ValidationResult {
  const violations = [];
  for (let i = 1; i < shots.length; i++) {
    const curr = shots[i];
    if (curr.duration < 0.5 && curr.shotSize === "extreme_wide") {
      violations.push({
        type: "SHOT_TOO_SHORT", severity: "WARNING", shotIndex: i,
        message: `大远景 ${curr.duration}s 过短，观众来不及看清环境`,
        suggestion: "大远景建议 >= 2s",
      });
    }
    if (curr.duration > 15 && curr.shotSize === "extreme_close") {
      violations.push({
        type: "SHOT_TOO_LONG", severity: "WARNING", shotIndex: i,
        message: `大特写 ${curr.duration}s 过长，保持紧张感建议 < 5s`,
        suggestion: "切到其他角度或插入反打镜头",
      });
    }
  }
  return { valid: violations.length === 0, violations };
}
