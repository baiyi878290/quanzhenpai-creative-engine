# Seedance 2.0 全能参考模式

## 一、核心概念

### 1.1 全能参考 = 三要素组合

角色设定板（角色参考）+ 分镜故事板（视觉参考）+ 提示词（文字引导）

### 1.2 各要素作用

| 要素 | 来源 | 作用 | 控制内容 |
|------|------|------|----------|
| 角色设定板 | Image2生成 | 角色参考 | 人物外观、服装、发型 |
| 分镜故事板 | Image2生成 | 视觉参考 | 构图、动作、镜头角度 |
| 提示词引导 | 文字编写 | 内容引导 | 场景、光影、氛围、时长 |

---

## 二、完整工作流程

```
剧本/小说
    |
    v
Step 1: 角色提取 -> 角色列表
    |
    v
Step 2: 角色设定板 -> 保存为角色参考图
    |
    v
Step 3: 分镜脚本 -> 分镜表
    |
    v
Step 4: 分镜故事板 -> 保存为视觉参考图
    |
    v
Step 5: 提示词编写 -> 每镜头提示词
    |
    v
Step 6: Seedance生成 -> 三要素组合
    |
    v
视频输出
```

---

## 三、角色设定板生成

### 左右分割式设定板提示词

Character reference sheet with left-right split layout:
LEFT SIDE: High quality character half-body portrait 
of [角色描述], [服装], [发型], [表情],
cinematic, photorealistic, white background.
RIGHT SIDE: Modular character information system 
with thin border grid layout:
Top: Full body three-view (front, side, back) 
with unified proportions,
Bottom: Close-up facial feature details.
Professional character design sheet, no text or labels

### 保存规范

文件名：char_[角色名].png
用途：作为Seedance的角色参考图
使用：所有该角色的镜头都上传此图

---

## 四、分镜故事板生成

### 手绘风格分镜板提示词

Please create a hand-drawn storyboard sheet:
[镜头内容]
Layout: 2x2 grid, 9:16 each
Style: Pencil sketch, colored arrows for movement
Labels: Shot type, performance notes, sound effects

### 写实风格分镜板提示词

Cinematic storyboard in 2x2 grid,
4 shots showing [场景描述]:
Shot 1: [景别] [运镜] [画面]
Shot 2: [景别] [运镜] [画面]
Shot 3: [景别] [运镜] [画面]
Shot 4: [景别] [运镜] [画面],
consistent style, professional storyboard, 9:16 each

### 保存规范

文件名：storyboard_[场次]_[镜头号].png
用途：作为Seedance的视觉/动作参考图
使用：对应镜头上传此图

---

## 五、提示词引导编写

### 提示词结构

[动作描述], [表情变化],
in [场景环境],
[光影效果], [氛围],
cinematic, 9:16
Duration: [X] seconds

### 提示词要素

| 要素 | 说明 | 示例 |
|------|------|------|
| 动作描述 | 核心动作 | slowly turns around |
| 表情变化 | 情绪变化 | expression changing from calm to surprised |
| 场景环境 | 所在地点 | in modern laboratory |
| 光影效果 | 灯光氛围 | soft fluorescent lighting |
| 氛围 | 情绪基调 | tense, dramatic, romantic |
| 时长 | 视频长度 | Duration: 5 seconds |

### 编写原则

从分镜脚本提取：
- 景别 -> 镜头类型
- 运镜 -> 运动描述
- 画面 -> 动作+场景
- 台词 -> 情绪参考
- 时长 -> Duration参数

从角色设定板继承：
- 角色外观 -> 不需重复描述（参考图已提供）
- 服装 -> 不需重复描述
- 发型 -> 不需重复描述

---

## 六、Seedance 2.0 三要素组合

### 单镜头生成

输入：
- 角色参考图：char_[角色名].png
- 分镜参考图：storyboard_[镜号].png
- 提示词：动作+场景+光影+时长

操作：
1. 上传角色参考图到"角色参考"槽位
2. 上传分镜参考图到"视觉参考"槽位
3. 粘贴提示词到文本框
4. 设置时长
5. 点击生成

### 多镜头批量生成

镜头列表：
S001: 角色参考 + 分镜参考S001 + 提示词S001
S002: 角色参考 + 分镜参考S002 + 提示词S002
...

一致性控制：
- 所有镜头使用相同的角色参考图
- 同一场景使用相同的分镜参考图
- 提示词保持风格关键词一致

---

## 七、实际案例

### 案例：实验室冲突场景

Step 1: 角色设定板

角色A - 舒兰舟：
Character reference sheet, left-right layout:
LEFT: Young female scientist, 20s, 
white lab coat, long black hair tied back,
worried expression, delicate features.
RIGHT: Full body three-view and facial close-up.
Professional, no text.

角色B - 洛嘉林：
Character reference sheet, left-right layout:
LEFT: Aggressive man, 30s, 
dark suit, sharp features,
fierce expression, clenched jaw.
RIGHT: Full body three-view and facial close-up.
Professional, no text.

Step 2: 分镜故事板

S001（全景俯拍）：
Wide overhead shot of laboratory,
two scientists standing facing each other,
seeming to argue, fixed camera

S002（中景到特写）：
Medium to close-up tracking shot,
lab door slammed open violently,
aggressive man rushes in, camera shakes

S003（中近景到全景）：
Medium-close to wide pull-out shot,
man grabs scientist shoulder and pushes,
scientist stumbles backward

S004（中景慢动作）：
Medium shot, slow motion,
scientist hits lab table,
test tubes shatter on ground

Step 3: 提示词引导

S001：
Two scientists standing in laboratory,
facing each other with tension,
soft fluorescent overhead lighting,
tense atmosphere, cinematic, 9:16
Duration: 3 seconds

S002：
Door violently slammed open,
aggressive man rushes in with fierce expression,
camera shakes with impact,
dramatic lighting, cinematic, 9:16
Duration: 3 seconds

S003：
Man grabs shoulder and pushes hard,
scientist stumbles backward in fear,
dramatic pull-out revealing full laboratory,
cinematic, 9:16
Duration: 4 seconds

S004：
Scientist hits lab table in slow motion,
test tubes rolling off and shattering,
glass fragments flying, dramatic impact,
cinematic, 9:16
Duration: 4 seconds

Step 4: Seedance生成

对于每个镜头：
1. 上传对应角色设定板
2. 上传对应分镜故事板
3. 粘贴对应提示词
4. 设置时长
5. 生成视频片段

---

## 八、一致性控制要点

### 角色一致性

原则：所有该角色的镜头使用相同的角色设定板
方法：上传同一张角色参考图
提示词：不需重复描述外观，只描述动作和表情

### 场景一致性

原则：同一场景的镜头使用相同的分镜参考
方法：上传同一张分镜故事板
提示词：保持场景描述关键词一致

### 风格一致性

原则：全片统一风格关键词
方法：提示词结尾使用相同的风格描述
示例：cinematic, 9:16, shallow DOF, film grain

---

## 九、参数设置

### Seedance 2.0 推荐参数

模型：doubao-seedance-2-0-260128
时长：4-15秒（根据分镜需求）
画幅：9:16（竖屏短剧）
分辨率：720p
参考图数量：2张（角色+分镜）

### 时长适配

分镜时长 < 4s -> 使用4s（最小值）
分镜时长 4-15s -> 直接使用
分镜时长 > 15s -> 拆分镜头

---

## 十、常见问题

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 人物变形 | 角色设定板不清晰 | 使用高清正面照 |
| 动作不自然 | 提示词太复杂 | 简化动作描述 |
| 场景不一致 | 分镜参考不够具体 | 增加场景细节 |
| 风格混乱 | 提示词关键词不统一 | 统一风格描述词 |
| 时长不足 | 超过15秒限制 | 拆分为多个镜头 |

---

## 十一、提示词引导编写规则

### 11.1 语言规范

| 内容类型 | 语言 | 示例 |
|----------|------|------|
| 动作描述 | 英文 | slowly turns around, walks forward |
| 表情描述 | 英文 | expression changing from calm to surprised |
| 场景描述 | 英文 | in modern laboratory, office interior |
| 光影描述 | 英文 | soft fluorescent lighting, golden hour light |
| 氛围描述 | 英文 | tense atmosphere, dramatic, romantic |
| 台词/对白 | **中文** | "舒兰舟！" |
| 画外音 | **中文** | 舒兰舟 (OS): "我不能哭" |

### 11.2 基于分镜脚本的提取规则

**分镜脚本输入格式**：
```
| 镜号 | 景别 | 运镜 | 画面描述 | 台词/音效 | 时长 |
```

**提取映射**：

| 分镜字段 | 提示词字段 | 转换规则 |
|----------|------------|----------|
| 景别 | 镜头类型 | 全景=Wide shot, 中景=Medium shot, 近景=Close-up, 特写=Extreme close-up |
| 运镜 | 运动描述 | 固定=Fixed camera, 推=Push in, 拉=Pull out, 跟=Tracking, 手持=Handheld |
| 画面描述 | 动作+场景 | 直接翻译为英文描述 |
| 台词/音效 | 台词保留中文 | "台词内容" 保留中文 |
| 时长 | Duration | Duration: [X] seconds |

### 11.3 提示词结构模板

```
[景别英文] shot, [运镜英文],
[画面描述英文],
[角色动作英文], [表情英文],
in [场景英文],
[光影英文], [氛围英文],
cinematic, 9:16
Duration: [X] seconds
台词: "[中文台词]"
```

### 11.4 完整示例

**分镜脚本**：
```
| S001 | 全景俯拍 | 固定 | 舒兰舟和林牧瑶相对而立，似乎在争执 | （实验室嗡嗡声） | 3s |
| S002 | 中景→特写 | 跟镜头 | 实验室门被猛地撞开，洛嘉林狰狞冲入 | 门撞墙闷响 | 3s |
| S003 | 中近景→全景 | 拉镜头 | 洛嘉林一把揪住舒兰舟肩膀，狠狠推开 | 洛嘉林："舒兰舟！" | 4s |
| S004 | 中景 | 慢动作+晃动 | 舒兰舟后腰撞上实验台，试管滚落碎裂 | 玻璃碎裂声 | 4s |
```

**生成的提示词**：

S001:
```
Wide overhead shot, fixed camera,
two scientists standing face to face in laboratory,
seeming to argue about something,
fluorescent humming ambient sound,
tense atmosphere,
cinematic, 9:16
Duration: 3 seconds
```

S002:
```
Medium shot to close-up, tracking shot,
laboratory door violently slammed open,
aggressive man in dark suit rushes in with fierce expression,
camera shakes dramatically with impact,
door hitting wall thud,
dramatic lighting,
cinematic, 9:16
Duration: 3 seconds
```

S003:
```
Medium-close shot to wide shot, pull-out shot,
aggressive man grabs scientist shoulder and pushes hard,
scientist stumbles backward with terrified face,
dramatic pull-out revealing full laboratory,
台词: "舒兰舟！"
clothing friction sound, test tube rack clattering,
cinematic, 9:16
Duration: 4 seconds
```

S004:
```
Medium shot, slow motion with camera shake,
scientist lower back hits lab table,
test tubes roll off table and shatter on ground,
glass fragments flying through air in slow motion,
glass shattering piercing sound with heavy reverb,
dramatic impact,
cinematic, 9:16
Duration: 4 seconds
```

### 11.5 台词处理规则

**直接台词**：角色名 + 说 + 中文台词
```
洛嘉林："舒兰舟！"
-> 台词: "舒兰舟！"
```

**画外音**：角色名 (OS) + 中文台词
```
洛嘉林 (OS)：舒兰舟！
-> 舒兰舟 (OS): "舒兰舟！"
```

**内心独白**：角色名 (V.O.) + 中文台词
```
舒兰舟（内心）：我不能哭
-> 舒兰舟 (V.O.): "我不能哭"
```

**无台词**：不写台词字段
```
（无）-> 不添加台词行
```

### 11.6 音效处理规则

**环境音**：翻译为英文描述
```
实验室嘈杂声 -> laboratory ambient noise
门撞墙闷响 -> door hitting wall thud
玻璃碎裂声 -> glass shattering sound
```

**音效融入氛围**：
```
tense atmosphere with laboratory ambient noise
dramatic impact with glass shattering sound
```

### 11.7 批量生成格式

**输出格式**：
```
# 分镜提示词 - 第X集

## S001
提示词：
[英文描述]
台词: [中文台词]
时长: [X]秒

## S002
提示词：
[英文描述]
台词: [中文台词]
时长: [X]秒

...
```
