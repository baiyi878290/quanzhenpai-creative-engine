# 防幻觉执行机制

## 一、幻觉定义与危害

### 1.1 AI幻觉类型

```
1. 凭空捏造：生成不存在的规则/语法
2. 张冠李戴：错误引用规则
3. 过度推断：超出规则范围的推断
4. 记忆混淆：混淆不同规则
5. 逻辑跳跃：跳过必要步骤
```

### 1.2 幻觉危害

```
- 生成错误的分镜脚本
- 违反镜头衔接规则
- 导致画面不连贯
- 影响成片质量
- 浪费生成资源
```

---

## 二、防幻觉核心机制

### 2.1 知识锚定机制

```
原则：每次执行前，必须先读取相关知识文件

执行流程：
1. 识别任务类型
2. 定位相关知识文件
3. 读取文件内容
4. 基于文件内容执行
5. 不允许凭空生成

知识文件位置：
film-production/references/
├── 01-basics/
│   ├── storyboard-creation.md      # 分镜基础
│   ├── storyboard-grammar-spec.md  # 语法规范
│   └── shot-transition-grammar.md  # 衔接规范
│
├── 03-quality/
│   └── special-shots-grammar.md    # 特殊镜头
│
└── 其他模块...
```

### 2.2 规则检查机制

```
原则：每个输出都必须经过规则检查

检查流程：
1. 生成内容
2. 对照规则检查
3. 发现违规立即修正
4. 确认无误后输出

检查清单：
□ 景别语法正确
□ 运镜语法正确
□ 转场语法正确
□ 声音分层正确
□ 情绪标注正确
□ 节奏标注正确
□ 衔接规则遵守
```

### 2.3 输出验证机制

```
原则：输出前必须验证完整性

验证清单：
□ 所有字段完整
□ 所有语法正确
□ 所有关联正确
□ 无遗漏内容
□ 无矛盾内容
```

---

## 三、关键规则速查

### 3.1 景别速查

```
ECU = Extreme Close-up（大特写）
CU = Close-up（特写）
MCU = Medium Close-up（近景）
MS = Medium Shot（中景）
MWS = Medium Wide Shot（中全景）
WS = Wide Shot（全景）
LS = Long Shot（远景）
ELS = Extreme Long Shot（大远景）
```

### 3.2 运镜速查

```
FIX = Fixed（固定）
PAN = Pan（摇）
TILT = Tilt（俯仰）
ZIN = Zoom In（推）
ZOUT = Zoom Out（拉）
CRANE = Crane（升降）
DIN = Dolly In（推轨推进）
DOUT = Dolly Out（推轨拉远）
TRK = Tracking（跟拍）
ORBIT = Orbit（环绕）
HS = Handheld（手持）
STEADY = Steadicam（稳定器）
```

### 3.3 转场速查

```
CUT = Cut（硬切）
DISS = Dissolve（溶解）
FI = Fade In（淡入）
FO = Fade Out（淡出）
FIFO = Fade In Fade Out（淡入淡出）
FLASH = Flash（闪白）
FB = Flash Black（闪黑）
MC = Match Cut（匹配剪辑）
JUMP = Jump Cut（跳切）
OC = Obstruct Cut（遮挡转场）
SPIN = Spin（旋转转场）
SWISH = Whip Pan（甩镜转场）
```

### 3.4 声音速查

```
D: = Dialogue（对白）
D-OS: = Off Screen（画外音）
D-V.O.: = Voice Over（旁白）
SFX: = Sound Effects（音效）
M: = Music（配乐）
RT: = Room Tone（环境音）
```

### 3.5 情绪速查

```
HAPPY = 开心
SAD = 悲伤
ANGRY = 愤怒
SCARED = 恐惧
SURPRISE = 惊讶
LOVE = 爱
NERVOUS = 紧张
SHY = 害羞
```

### 3.6 节奏速查

```
SLOW = 慢
MEDIUM = 中等
FAST = 快
BUILD = 渐快
DECAY = 渐慢
PEAK = 高潮
CALM = 平静
```

---

## 四、衔接规则速查

### 4.1 180度轴线规则

```
原则：摄像机始终保持在轴线同一侧

检查点：
□ 轴线位置明确
□ 摄像机位置正确
□ 人物方位一致
□ 无跳轴现象
```

### 4.2 动作匹配原则

```
原则：上一镜头动作终点 = 下一镜头动作起点

检查点：
□ 动作起点/终点匹配
□ 动作速度匹配
□ 动作类型合理
□ 动作因果关系清晰
```

### 4.3 情绪递进原则

```
原则：情绪变化要有层次，避免突兀

检查点：
□ 情绪递进自然
□ 情绪转换有过渡
□ 情绪强度合理
□ 情绪释放有节点
```

### 4.4 时间连续原则

```
原则：时间流动要自然，避免断裂

检查点：
□ 时间连续性
□ 时间跳跃有说明
□ 节奏时间匹配
□ 时长分配合理
```

---

## 五、执行检查清单

### 5.1 执行前检查

```
□ 已读取相关知识文件
□ 已理解任务需求
□ 已明确执行步骤
□ 已准备必要资源
```

### 5.2 执行中检查

```
□ 每步都有验证
□ 关键节点有检查
□ 错误及时修正
□ 日志记录完整
```

### 5.3 执行后检查

```
□ 输出完整性
□ 语法正确性
□ 规则遵守性
□ 用户确认
```

---

## 六、常见幻觉场景及预防

### 6.1 分镜脚本生成

```
幻觉场景：
- 凭空创造不存在的语法
- 错误使用景别/运镜缩写
- 违反180度轴线规则
- 情绪标注不规范

预防措施：
- 必须读取storyboard-grammar-spec.md
- 必须读取shot-transition-grammar.md
- 对照速查表验证语法
- 检查衔接规则
```

### 6.2 AI提示词生成

```
幻觉场景：
- 提示词格式错误
- 关键词缺失
- 风格不统一
- 参数设置错误

预防措施：
- 必须读取对应提示词指南
- 使用标准模板
- 对照检查清单验证
```

### 6.3 视频生成

```
幻觉场景：
- 模型版本错误
- 参数设置错误
- 参考图使用错误
- 一致性控制失败

预防措施：
- 必须读取seedance-reference.md
- 验证模型版本
- 验证参数设置
- 验证参考图使用
```

---

## 七、执行原则

### 7.1 必须遵守

```
1. 先读取，后执行
2. 先验证，后输出
3. 先检查，后确认
4. 有问题，立即修正
```

### 7.2 禁止行为

```
1. 禁止凭空生成规则
2. 禁止跳过验证步骤
3. 禁止忽略检查清单
4. 禁止隐瞒错误
```

---

## 八、知识文件索引

### 8.1 基础模块

```
01-basics/
├── script-adaptation.md          # 剧本改编
├── storyboard-creation.md        # 分镜创作
├── storyboard-grammar-spec.md    # 语法规范
├── shot-transition-grammar.md    # 衔接规范
├── image-prompt.md               # Image2提示词
├── seedance-prompt.md            # Seedance提示词
├── seedance-reference.md         # Seedance参考
├── script-to-prompt.md           # 剧本→提示词
└── one-click-pipeline.md         # 一键成片
```

### 8.2 质量模块

```
03-quality/
├── shot-psychology.md            # 镜头语言
├── emotion-layers.md             # 情绪层次
├── composition-guide.md          # 构图法则
├── lighting-art.md               # 光影艺术
├── sound-narrative.md            # 声音叙事
├── editing-rhythm.md             # 剪辑节奏
├── montage-theory.md             # 蒙太奇
├── prompt-engineering-advanced.md # 提示词进阶
└── special-shots-grammar.md      # 特殊镜头
```

### 8.3 其他模块

```
02-ai-tools/    # AI工具
04-genre/       # 类型片
05-business/    # 商业变现
06-directing/   # 导演编剧
07-visual-audio/ # 视觉听觉
08-tools/       # 工具实战
09-changelog/   # 更新日志
```
