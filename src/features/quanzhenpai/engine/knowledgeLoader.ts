import * as fs from "fs"; import * as path from "path";

export interface QuanzhenpaiKnowledge {
  grammar: string; axisRule: string; actionMatch: string;
  emotionProgression: string; timeContinuity: string; soundDesign: string;
  shotTypes: string; modules: string; all: Record<string,string>;
}

const FILES: Record<string,string> = {
  grammar: "storyboard_grammar_v1.9.md", axisRule: "axis_rule.md",
  actionMatch: "action_matching.md", emotionProgression: "emotion_progression.md",
  timeContinuity: "time_continuity.md", soundDesign: "sound_design_4layers.md",
  shotTypes: "shot_types_27.md", modules: "12_modules_system.md",
};

export function loadQuanzhenpaiKnowledge(skillsPath: string): QuanzhenpaiKnowledge {
  const basePath = path.join(skillsPath, "quanzhenpai");
  const k: any = { all: {} };
  for (const [key, file] of Object.entries(FILES)) {
    try { k[key] = fs.readFileSync(path.join(basePath,file),"utf-8"); k.all[file] = k[key]; }
    catch { k[key] = ""; }
  }
  return k as QuanzhenpaiKnowledge;
}

export function buildSystemPromptInjection(k: QuanzhenpaiKnowledge): string {
  return [k.grammar,k.axisRule,k.actionMatch,k.emotionProgression,k.timeContinuity,k.soundDesign,k.shotTypes]
    .filter(Boolean).join("\n\n---\n\n");
}

export function buildMinimalInjection(): string {
  return [
    "## 全帧派分镜规则(精简版)",
    "1. 180°轴线: 越轴需明确动机(空间转换/时间跳跃/情绪转折)",
    "2. 动作匹配: 剪辑点选在动作最高点，匹配剪辑需方向一致",
    "3. 情绪递进: 情绪递增或保持，高情绪需高密度剪辑",
    "4. 时间连续: 非动机性跳跃不可接受",
    "5. 4层声音: 对白(1) > 音效(2) > 音乐(3) > 环境音(4)",
    "6. 15列表格: 镜号/景别/角度/运动/画面/对白/音效/音乐/时长/特效/衔接/情绪/节奏/备注/参考",
    "7. 27种特殊镜头 + 12模块体系",
  ].join("\n");
}
