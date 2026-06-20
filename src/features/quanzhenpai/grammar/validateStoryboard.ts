import { validateAxisRule, validateActionMatch, validateEmotionProgression, validateTimeContinuity } from "./validators";
import type { ValidationResult, Violation } from "./validators";
import type { Shot, Storyboard } from "./types";

export interface StoryboardValidation {
  valid: boolean; score: number;
  results: Record<string, ValidationResult>;
  violations: Violation[]; summary: string;
}

export function validateStoryboard(shots: Shot[]): StoryboardValidation {
  const results = {
    axisRule: validateAxisRule(shots),
    actionMatch: validateActionMatch(shots),
    emotionProgression: validateEmotionProgression(shots),
    timeContinuity: validateTimeContinuity(shots),
  };
  const all = Object.entries(results).flatMap(([c,r]) => r.violations.map(v=>({...v,category:c})));
  const ec=all.filter(v=>v.severity==="ERROR").length;
  const wc=all.filter(v=>v.severity==="WARNING").length;
  const ic=all.filter(v=>v.severity==="INFO").length;
  const score=Math.max(0,100-(ec*15+wc*5+ic*1));
  const summary=ec===0&&wc===0?"✅ 分镜脚本通过全部专业验证":`⚠️ ${ec}错误 ${wc}警告 ${ic}建议 (得分${score}/100)`;
  return { valid: ec===0, score, results, violations: all, summary };
}

export function quickValidate(shots: Shot[]): { valid: boolean; errors: Violation[]; summary: string } {
  const full = validateStoryboard(shots);
  const errors = full.violations.filter(v=>v.severity==="ERROR");
  return { valid: errors.length===0, errors, summary: errors.length===0?"✅ 通过快速验证":`❌ ${errors.length}个致命问题` };
}
