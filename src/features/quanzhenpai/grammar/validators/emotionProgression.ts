// 情绪递进验证器
import { Shot, ValidationResult } from "../types";

export function validateEmotionProgression(shots: Shot[]): ValidationResult {
  const violations = [];
  for (let i = 1; i < shots.length; i++) {
    const prev = shots[i - 1];
    const curr = shots[i];
    if (curr.emotion < prev.emotion - 2 && curr.transition !== "fade_out") {
      violations.push({
        type: "EMOTION_DROP", severity: "WARNING", shotIndex: i,
        message: `情绪从 ${prev.emotion} 降至 ${curr.emotion}`,
        suggestion: "添加情绪过渡镜头或使用渐隐转场",
      });
    }
    if (curr.emotion >= 8 && curr.duration > prev.duration && curr.pacing !== "fast" && curr.pacing !== "rapid") {
      violations.push({
        type: "DENSITY_MISMATCH", severity: "WARNING", shotIndex: i,
        message: "高情绪段落建议缩短镜头时长",
        suggestion: `当前 ${curr.duration}s，建议 < ${Math.ceil(prev.duration * 0.7)}s`,
      });
    }
  }
  return { valid: violations.length === 0, violations };
}
