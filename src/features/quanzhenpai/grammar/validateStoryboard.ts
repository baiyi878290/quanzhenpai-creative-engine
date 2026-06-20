import { Shot, ValidationResult } from "./types";
import { validateAxisRule } from "./validators/axisRule";
import { validateEmotionProgression } from "./validators/emotionProgression";
import { validateActionMatch } from "./validators/actionMatch";
import { validateTimeContinuity } from "./validators/timeContinuity";

export function validateStoryboard(shots: Shot[]): {
  valid: boolean;
  score: number;
  violations: { category: string; type: string; severity: string; shotIndex: number; message: string; suggestion: string }[];
  summary: string;
} {
  const results = {
    axisRule: validateAxisRule(shots),
    emotion: validateEmotionProgression(shots),
    action: validateActionMatch(shots),
    time: validateTimeContinuity(shots),
  };

  const violations = Object.entries(results)
    .filter(([, r]) => !r.valid)
    .flatMap(([name, r]) => r.violations.map((v) => ({ ...v, category: name })));

  const score = Math.max(0, 100 - violations.filter((v) => v.severity === "ERROR").length * 15 - violations.filter((v) => v.severity === "WARNING").length * 5);

  return {
    valid: violations.length === 0,
    score,
    violations,
    summary: violations.length === 0 ? "分镜脚本通过全部专业验证" : `发现 ${violations.filter((v) => v.severity === "ERROR").length} 个错误, ${violations.filter((v) => v.severity === "WARNING").length} 个警告 (得分 ${score}/100)`,
  };
}
