import type { Shot } from "../types";
export interface ValidationResult { valid: boolean; violations: Violation[]; }
export interface Violation { type: string; severity: "ERROR"|"WARNING"|"INFO"; shotIndex: number; message: string; suggestion: string; }

export function validateAxisRule(shots: Shot[]): ValidationResult {
  const v: Violation[] = [];
  const leftAngles = ["low_angle","dutch"];
  const rightAngles = ["high_angle","aerial","worm_eye"];
  const neutral = ["eye_level"];
  for (let i=1;i<shots.length;i++) {
    const prev = shots[i-1]; const curr = shots[i];
    const prevSide = neutral.includes(prev.angle) ? "neutral" : leftAngles.includes(prev.angle) ? "left" : "right";
    const currSide = neutral.includes(curr.angle) ? "neutral" : leftAngles.includes(curr.angle) ? "left" : "right";
    if (prevSide!=="neutral" && currSide!=="neutral" && prevSide!==currSide) {
      const hasMotivation = curr.vfx.includes("过渡") || curr.notes?.includes("动机") || Math.abs(curr.emotion-prev.emotion)>=3 || ["dissolve","fade_to_black","fade_to_white"].includes(curr.transition) || /(进|出|入|离开)画|enter|exit|leave/i.test(curr.visualDescription||"");
      if (!hasMotivation) {
        v.push({ type:"AXIS_CROSSING_NO_MOTIVATION", severity:"ERROR", shotIndex:i, message:`${curr.shotNumber} 越轴(从${prev.angle}到${curr.angle})，缺少动机`, suggestion:"添加空间转换/时间跳跃/情绪转折/特殊转场作为越轴动机" });
      } else {
        v.push({ type:"AXIS_CROSSING_WITH_MOTIVATION", severity:"INFO", shotIndex:i, message:`${curr.shotNumber} 越轴(动机已检测)`, suggestion:"越轴动机已确认，此操作有效" });
      }
    }
  }
  return { valid: v.filter(x=>x.severity==="ERROR").length===0, violations: v };
}
