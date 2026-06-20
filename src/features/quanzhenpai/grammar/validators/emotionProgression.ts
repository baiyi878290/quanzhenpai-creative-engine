import type { Shot } from "../types";
import type { ValidationResult, Violation } from "./axisRule";

export function validateEmotionProgression(shots: Shot[]): ValidationResult {
  const v: Violation[] = [];
  const firstHalf = shots.slice(0,Math.floor(shots.length/2));
  const secondHalf = shots.slice(Math.floor(shots.length/2));
  const firstAvg = firstHalf.reduce((s,x)=>s+x.emotion,0)/firstHalf.length;
  const secondAvg = secondHalf.reduce((s,x)=>s+x.emotion,0)/secondHalf.length;
  const trend = secondAvg>firstAvg+1?"rising":secondAvg<firstAvg-1?"declining":"stable";
  for (let i=1;i<shots.length;i++) {
    const prev=shots[i-1], curr=shots[i], diff=curr.emotion-prev.emotion;
    if (diff<=-2) {
      const hasReason = ["fade_to_black","fade_to_white","dissolve"].includes(curr.transition) || /释放|平静|落幕|转场|rest|calm/i.test(curr.notes||"");
      if (!hasReason) v.push({ type:"EMOTION_DROP", severity:"WARNING", shotIndex:i, message:`情绪骤降(${prev.emotion}→${curr.emotion})，缺少过渡`, suggestion:"插入过渡镜头或使用叠化转场缓冲" });
    }
    if (curr.emotion>=8) {
      const avgDur = shots.reduce((s,x)=>s+x.duration,0)/shots.length;
      if (curr.duration>avgDur*1.3) v.push({ type:"DENSITY_MISMATCH", severity:"WARNING", shotIndex:i, message:`高情绪镜头时长${curr.duration}超过平均值${Math.round(avgDur)}`, suggestion:"缩短时长(<" + Math.round(avgDur*0.7) + ")以加快剪辑节奏" });
    }
    if (diff>=2 && prev.movement==="static" && curr.movement==="static") v.push({ type:"EMOTION_MOVEMENT_MISMATCH", severity:"INFO", shotIndex:i, message:`情绪上升但镜头运动保持静止`, suggestion:"增加镜头运动(推近/手持)增强视觉冲击力" });
    if (trend==="declining" && i>shots.length/2) v.push({ type:"DECLINING_TREND", severity:"INFO", shotIndex:i, message:"整体情绪曲线下降，后半段可能缺乏高潮", suggestion:"加入情绪高潮点维持观众注意力" });
  }
  return { valid: v.filter(x=>x.severity==="ERROR").length===0, violations: v };
}
