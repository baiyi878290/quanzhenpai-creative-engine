// 180度轴线规则验证器
import { Shot, ValidationResult } from "../types";

function isAxisCrossing(prev: Shot, curr: Shot): boolean {
  const oppositePairs = [
    ["pan_left", "pan_right"], ["track_left", "track_right"],
    ["low_angle", "high_angle"], ["dolly_in", "dolly_out"]
  ];
  return oppositePairs.some(([a, b]) =>
    (prev.movement === a && curr.movement === b) ||
    (prev.movement === b && curr.movement === a)
  );
}

function hasAxisMotivation(shots: Shot[], index: number): boolean {
  const curr = shots[index];
  if (curr.transition === "fade_in" || curr.transition === "fade_out" || curr.transition === "dissolve") return true;
  if (curr.emotion >= 7 && shots[index - 1]?.emotion <= 4) return true;
  if (curr.shotSize === "extreme_wide" || curr.shotSize === "wide") return true;
  return false;
}

export function validateAxisRule(shots: Shot[]): ValidationResult {
  const violations = [];
  for (let i = 1; i < shots.length; i++) {
    if (isAxisCrossing(shots[i - 1], shots[i]) && !hasAxisMotivation(shots, i)) {
      violations.push({
        type: "AXIS_CROSSING",
        severity: "ERROR",
        shotIndex: i,
        message: `镜 ${shots[i].shotNumber} 越轴`,
        suggestion: "添加时间跳跃/空间转换/情绪转折作为越轴动机，或插入建立镜头过渡",
      });
    }
  }
  return { valid: violations.length === 0, violations };
}
