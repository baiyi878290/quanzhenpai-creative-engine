# 剧本→提示词 自动化流程

## 一、工作流程

```
剧本/小说原文
    │
    ▼
┌─────────────────────┐
│  Step 1: 角色提取    │
│  从剧本中提取：      │
│  - 角色名            │
│  - 外貌特征          │
│  - 服装描述          │
│  - 性格标签          │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Step 2: 角色设定板  │
│  自动生成：          │
│  - 角色设定板提示词  │
│  - 角色参考图提示词  │
│  - 表情参考提示词    │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Step 3: 分镜提取    │
│  从分镜脚本中提取：  │
│  - 场景描述          │
│  - 景别运镜          │
│  - 人物动作          │
│  - 光影氛围          │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│  Step 4: 分镜提示词  │
│  自动生成：          │
│  - 每镜头视频提示词  │
│  - 场景设定提示词    │
│  - 风格一致性控制    │
└─────────────────────┘
```

## 二、角色信息提取规则

### 2.1 从剧本提取

**输入格式**：
```markdown
## 人物小传
### 主角：苏瑶
- 年龄：19岁
- 身份：苏家千金
- 外貌：黑长直发，皮肤白皙，身材娇小
- 性格：天真烂漫，妩媚不自知
- 标志性服装：白色连衣裙
```

**提取规则**：
```
角色名 ← 标题行
年龄 ← 年龄字段
外貌 ← 外貌描述（合并为完整句子）
服装 ← 服装字段（首次出场+重要场景）
性格 ← 性格标签（转化为视觉特征）
```

### 2.2 从对话/动作推断

**对话推断**：
```
"你穿着这身白色连衣裙真好看" 
→ 服装：白色连衣裙
```

**动作推断**：
```
"她轻轻撩起长发"
→ 发型：长发，可能有撩发动作
```

**场景推断**：
```
"在豪华的酒店大堂"
→ 场景设定：豪华酒店大堂
```

## 三、角色设定板生成规则

### 3.1 左右分割式设定板

**生成逻辑**：
```
左侧（半身肖像）：
  = 角色名 + 年龄 + 外貌 + 服装 + 表情 + 光影

右侧（信息网格）：
  上层 = 三视图（正面/侧面/背面）
  下层 = 五官特写
```

**提示词模板**：
```
Character reference sheet with left-right split layout:
LEFT SIDE: High quality character half-body portrait 
of [年龄][性别][民族]，[身材描述]，
wearing [服装详细描述]，
[发型发色]，[表情]，
[光影效果], cinematic, photorealistic, 
white clean background.

RIGHT SIDE: Modular character information system 
with thin border grid layout:
Top: Full body three-view (front, side, back) 
with unified proportions,
Bottom: Close-up facial feature details.

Professional character design sheet,
unified color system, high information density,
realistic texture, cinematic lighting,
absolutely no text or labels
```

### 3.2 多角色批量生成

**当剧本有多个角色时**：
```
角色A → 设定板A
角色B → 设定板B
角色C → 设定板C

可选：组合设定板（所有角色在同一画面）
```

**组合设定板提示词**：
```
Character ensemble reference sheet,
[角色数量] characters side by side:
[角色A描述],
[角色B描述],
[角色C描述],
consistent style, light gray background,
professional character design
```

## 四、分镜提示词生成规则

### 4.1 从分镜脚本提取

**输入格式**：
```markdown
| 镜号 | 景别 | 运镜 | 画面描述 | 台词 | 时长 |
|------|------|------|----------|------|------|
| S001 | 特写 | 固定 | 女主角眼睛，泪光闪烁 | （无） | 3s |
| S002 | 近景 | 推 | 女主角咬唇忍泪 | "我不能哭" | 3s |
| S003 | 中景 | 固定 | 女主角转身背对男主 | "我们结束吧" | 2s |
```

**提取规则**：
```
镜号 → 输出编号
景别 → 景别关键词
运镜 → 运镜关键词
画面描述 → 主体+动作+场景
台词 → 可选的情感辅助
时长 → Seedance duration参数
```

### 4.2 单镜头提示词生成

**生成逻辑**：
```
镜头提示词 = 景别 + 主体 + 动作 + 场景 + 光影 + 风格

其中：
- 主体 = 角色设定（从角色库调用）
- 场景 = 场景设定（从场景库调用）
- 光影 = 根据情绪选择
- 风格 = 项目统一风格
```

**提示词模板**：
```
[景别] shot of [角色描述], 
[服装], [表情/动作], 
in [场景环境], 
[光影效果], [情绪氛围],
cinematic, [技术参数], 9:16
```

### 4.3 场景设定提示词

**从剧本场景描述提取**：
```markdown
## 场1：废弃仓库 - 夜晚
- 光线：昏暗，只有月光从窗户透入
- 氛围：压抑、紧张
- 关键道具：生锈的铁链、破旧的木箱
```

**生成提示词**：
```
Abandoned warehouse interior, 
moonlight streaming through dirty windows,
rusty chains hanging from ceiling,
old wooden crates scattered,
dark and oppressive atmosphere,
cinematic, 9:16 establishing shot
```

## 五、一致性控制

### 5.1 角色一致性

**原则**：所有镜头使用相同的角色描述核心词

**示例**：
```
角色核心词 = "19岁东方美女，黑长直发，白皙皮肤，娇小身材"

所有镜头提示词都包含这个核心词：
- S001: ...of 19-year-old Eastern beauty with long black hair...
- S002: ...of 19-year-old Eastern beauty with long black hair...
- S003: ...of 19-year-old Eastern beauty with long black hair...
```

### 5.2 场景一致性

**原则**：同一场景的所有镜头使用相同的场景描述

**示例**：
```
场景核心词 = "废弃仓库，月光，昏暗，破旧"

场景内所有镜头都包含：
- S001: ...in abandoned warehouse, moonlight...
- S002: ...in abandoned warehouse, dim lighting...
- S003: ...in abandoned warehouse, shadows...
```

### 5.3 风格一致性

**原则**：全片统一风格关键词

**示例**：
```
风格核心词 = "cinematic, shallow DOF, 24fps, film grain"

所有镜头结尾都包含：
- ...cinematic, shallow DOF, 24fps, film grain
```

## 六、输出格式

### 6.1 角色设定板输出

```markdown
# 角色设定板 - [角色名]

## 生成信息
- 使用模型：即梦 5.0 / GPT-Image-2
- 画面比例：9:16
- 风格：写实/半写实

## 主设定板（左右分割式）
[完整提示词]

## 多角度参考（九宫格）
[完整提示词]

## 表情参考（六宫格）
[完整提示词]
```

### 6.2 分镜提示词输出

```markdown
# 分镜提示词 - 第X集

## 场1：[场景名]

### S001
- 景别：特写
- 提示词：[完整英文提示词]
- 参数：9:16, 5s, 720p

### S002
...

## 场2：...
```

### 6.3 角色参考图输出

```markdown
# 角色参考图 - [角色名]

## 用途
作为Seedance视频生成的角色一致性参考

## 提示词
[角色设定板提示词]

## 使用方法
1. 生成此参考图
2. 在Seedance中上传为"全能参考"
3. 所有该角色的镜头都使用此参考图
```

## 七、分镜脚本→手绘分镜稿 提示词生成

### 7.1 工作流程

```
分镜脚本（输入）
    │
    ▼
┌─────────────────────────────┐
│  Step 1: 读取分镜脚本        │
│  提取每镜头信息：            │
│  - 镜号                     │
│  - 景别                     │
│  - 运镜                     │
│  - 画面描述                  │
│  - 台词/音效                │
│  - 时长                     │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│  Step 2: 分组分页            │
│  每4-6个镜头为一组           │
│  每组生成一张分镜稿          │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│  Step 3: 生成手绘分镜稿提示词 │
│  自动填充：                  │
│  - 镜头类型标注              │
│  - 表演提示                  │
│  - 音效说明                  │
│  - 运动箭头                  │
└──────────────┬──────────────┘
               │
               ▼
输出：可直接使用的提示词
```

### 7.2 分镜脚本输入格式

**标准分镜表格式**：
```markdown
| 镜号 | 景别 | 运镜 | 画面描述 | 台词/音效 | 时长 |
|------|------|------|----------|-----------|------|
| S001 | 全景俯拍 | 固定 | 舒兰舟和林牧瑶相对而立，似乎在争执 | （无） | 3s |
| S002 | 中景→特写 | 跟镜头 | 实验室门被猛地撞开，洛嘉林狰狞冲入 | 实验室嘈杂声 | 3s |
| S003 | 中近景→全景 | 拉镜头 | 洛嘉林一把揪住舒兰舟肩膀，狠狠推开 | 洛嘉林：舒兰舟！ | 3s |
| S004 | 中景 | 慢动作+晃动 | 舒兰舟后腰撞上实验台，试管滚落碎裂 | 玻璃碎裂声 | 3s |
```

### 7.3 自动提取规则

**景别→镜头类型标注**：
```
全景 → Wide shot / 全景
中景 → Medium shot / 中景
近景 → Close-up / 近景
特写 → Extreme close-up / 特写
俯拍 → Overhead shot / 俯拍
仰拍 → Low angle / 仰拍
```

**运镜→运动描述**：
```
固定 → Fixed camera, static
推镜头 → Push in / Dolly in
拉镜头 → Pull out / Dolly out
摇镜头 → Pan / Tilt
跟镜头 → Tracking shot
手持 → Handheld, shaky
慢动作 → Slow motion
```

**音效→标注格式**：
```
纯环境音 → (环境音：[具体描述])
纯动作音 → [动作音效]
台词 → 角色名：台词内容
OS → 角色名 (OS)：台词内容
混合 → [动作音] + 角色名：台词
```

### 7.4 提示词自动生成模板

**基础模板**：
```
Please create a hand-drawn storyboard sheet 
based on the following storyboard script:

Characters:
[从脚本中提取的角色列表]

Story content:

Shot 1: [镜号] [景别] [运镜]
[画面描述]
[台词/音效]

Shot 2: [镜号] [景别] [运镜]
[画面描述]
[台词/音效]

Shot 3: [镜号] [景别] [运镜]
[画面描述]
[台词/音效]

Shot 4: [镜号] [景别] [运镜]
[画面描述]
[台词/音效]

[... 继续其他镜头]

Layout requirements:
1. 2x2 grid layout, 2 shots per row, 2 rows per sheet
2. Each shot is 9:16 aspect ratio
3. Pencil single-line sketch style
4. Each shot labeled with shot type, performance notes, sound effects
5. Simple colored arrows indicating movement direction
6. The shots should form a complete scene with smooth action logic
```

### 7.5 分组策略

**按场次分组**：
```
分镜脚本
    │
    ├─ 场1 → 4-6个镜头 → 1张分镜稿
    ├─ 场2 → 4-6个镜头 → 1张分镜稿
    └─ 场3 → 4-6个镜头 → 1张分镜稿
```

**按时间分组**（如果场次镜头过多）：
```
场1（10个镜头）
    │
    ├─ S001-S004 → 分镜稿1
    └─ S005-S010 → 分镜稿2
```

**自适应布局**：
```
镜头数 ≤ 4 → 2×2 布局
镜头数 5-6 → 2×3 布局
镜头数 7-9 → 3×3 布局
镜头数 > 9 → 多张分镜稿
```

### 7.6 完整示例

**输入（分镜脚本）**：
```markdown
| 镜号 | 景别 | 运镜 | 画面描述 | 台词/音效 | 时长 |
|------|------|------|----------|-----------|------|
| S001 | 全景俯拍 | 固定 | 实验室全景，两人对峙 | （实验室嗡嗡声） | 3s |
| S002 | 中景→特写 | 跟镜头 | 门被撞开，洛嘉林冲入 | 门撞墙闷响 | 3s |
| S003 | 中近景→全景 | 拉镜头 | 洛嘉林揪住舒兰舟推开 | "舒兰舟！" | 3s |
| S004 | 中景 | 慢动作 | 试管滚落碎裂 | 玻璃碎裂声 | 3s |
```

**输出（自动提示词）**：
```
Please create a hand-drawn storyboard sheet 
based on the following storyboard script:

Characters:
- 舒兰舟 (Shu Lanzhou): scientist in white lab coat
- 林牧瑶 (Lin Muyao): female colleague
- 洛嘉林 (Luo Jialin): aggressive man in dark suit

Story content:

Shot 1: S001 - Wide overhead shot, Fixed camera
Laboratory interior, two people facing each other in confrontation.
(Laboratory ambient humming)

Shot 2: S002 - Medium → Close-up, Tracking shot  
Laboratory door violently slammed open, 
Luo Jialin rushes in with fierce expression.
(Door hitting wall thud)

Shot 3: S003 - Medium-close → Wide, Pull-out shot
Luo Jialin grabs Shu Lanzhou's shoulder and pushes hard.
Luo Jialin (OS): "舒兰舟!"

Shot 4: S004 - Medium shot, Slow motion + shaky
Test tubes roll off table and shatter on ground in slow motion.
(Glass shattering piercing sound)

Layout: 2x2 grid, 9:16 each
Style: Pencil sketch, colored arrows
Labels: Shot type, performance, sound effects
```

### 7.7 角色描述自动填充

**从角色库提取**：
```
如果角色库中有角色信息 → 自动填充角色描述
如果没有 → 使用通用描述（如"一个穿白大褂的人"）
```

**角色描述格式**：
```
- [角色名] ([拼音/英文]): [外貌特征], [服装]
```

### 7.8 情绪/氛围自动推断

**从画面描述推断**：
```
"狰狞冲入" → 暴力、紧张、冲击感
"相对而立，争执" → 对峙、紧张、冲突
"试管碎裂" → 破坏、震惊、转折
```

**从音效推断**：
```
"闷响" → 沉重、压抑
"刺耳" → 紧张、惊吓
"嗡嗡声" → 压抑、紧张氛围
```

**氛围标注添加**：
```
Shot 1: [氛围：紧张对峙]
Shot 2: [氛围：暴力冲击]
Shot 3: [氛围：肢体冲突]
Shot 4: [氛围：震惊破坏]
```

## 八、镜头时长控制

### 8.1 时长提取规则

**从分镜脚本提取**：
```
| 镜号 | 景别 | 运镜 | 画面描述 | 台词/音效 | 时长 |
|------|------|------|----------|-----------|------|
| S001 | 全景 | 固定 | ... | ... | 3s |
```

**提取字段**：最后一列 `时长`

### 8.2 时长分类

| 时长范围 | 类型 | 适用场景 |
|----------|------|----------|
| 1-2s | 快切 | 反应镜头、情绪闪现、节奏点 |
| 3-4s | 标准 | 对话、动作、过渡 |
| 5-7s | 中等 | 情绪递进、场景转换 |
| 8-10s | 长镜头 | 情感高潮、氛围营造 |
| 10-15s | 超长 | 重要场景、视觉奇观 |

### 8.3 Seedance时长适配

**Seedance 2.0 支持时长**：
```
doubao-seedance-2-0-260128 → 4-15秒
doubao-seedance-2-0-fast-260128 → 4-15秒
doubao-seedance-1-0-lite-t2v-250428 → 4-10秒
```

**自动适配规则**：
```
分镜时长 < 4s → Seedance使用4s（最小值）
分镜时长 4-15s → 直接使用原时长
分镜时长 > 15s → 拆分为多个镜头
```

### 8.4 时长在提示词中的应用

**手绘分镜稿标注**：
```
Shot 1: S001 - Wide shot, Fixed camera, 3s
[画面描述]
[台词/音效]
[Duration: 3 seconds]
```

**Seedance视频生成提示词**：
```
Close-up shot of [角色], [动作], 
[场景], [光影],
cinematic, 9:16

Duration: 5 seconds
Model: doubao-seedance-2-0-260128
```

### 8.5 节奏设计参考

**竖屏短剧节奏**：
```
前3秒 → 钩子（必须有冲击力）
第10秒 → 第一个爽点/反转
第30秒 → 小高潮
结尾 → 留悬念
```

**镜头时长节奏**：
```
快→快→慢→快→慢→快
（制造节奏感，避免平均）
```

**情绪时长对照**：
```
紧张/冲突 → 短镜头（1-3s）快速切换
平静/抒情 → 长镜头（5-10s）缓慢流动
高潮/爆发 → 中等（3-5s）+ 慢动作
```

### 8.6 时长分配示例

**场景：实验室冲突（12秒总时长）**
```
| 镜号 | 景别 | 运镜 | 画面描述 | 时长 |
|------|------|------|----------|------|
| S001 | 全景俯拍 | 固定 | 两人对峙 | 2s |  ← 快切建立紧张
| S002 | 中景→特写 | 跟镜头 | 门被撞开，洛嘉林冲入 | 2s |  ← 快切冲击
| S003 | 中近景→全景 | 拉镜头 | 洛嘉林揪住舒兰舟推开 | 4s |  ← 中等展示动作
| S004 | 中景 | 慢动作 | 试管碎裂 | 4s |  ← 慢动作强调结果
```

**节奏分析**：
```
2s(快) → 2s(快) → 4s(中) → 4s(慢)
= 紧张 → 冲击 → 动作 → 结果
```

### 8.7 自动时长建议

**当分镜脚本未标注时长时**：

```
景别 + 运镜 → 建议时长

固定镜头 + 全景 → 3-4s
固定镜头 + 中景 → 2-3s
固定镜头 + 近景 → 2-3s
固定镜头 + 特写 → 1-2s

推/拉镜头 → +1-2s（需要时间完成运动）
跟镜头 → +2-3s（需要跟随过程）
手持晃动 → 2-3s（不宜过长）
慢动作 → ×2（实际时长翻倍）
```

### 8.8 提示词模板更新

**手绘分镜稿模板（加入时长）**：
```
Shot [N]: [景别], [运镜头], [时长]
[画面描述]
[台词/音效]
Duration: [X] seconds
Performance: [表演提示]
Camera: [镜头运动轨迹]
```

**Seedance视频模板（加入时长）**：
```
[景别] shot of [角色], 
[动作], [场景], [光影],
cinematic, 9:16

Duration: [X] seconds
Aspect ratio: 9:16
Resolution: 720p
```
