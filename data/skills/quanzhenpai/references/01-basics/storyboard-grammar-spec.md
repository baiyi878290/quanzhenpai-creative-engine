# 分镜脚本语法规范

## 一、语法总览

### 1.1 完整分镜脚本结构

```
# 《剧名》第X集 分镜脚本

## 元信息
- 集数：第X集
- 时长：X分X秒
- 类型：甜宠/虐恋/逆袭
- 版本：v1.0
- 日期：YYYY-MM-DD

## 情绪曲线
[情绪-时间曲线图]

## 分镜表

| 镜号 | 景别 | 角度 | 运镜 | 转场 | 画面描述 | 对白 | 音效 | 配乐 | 环境音 | 情绪 | 节奏 | 时长 | 时间码 | 备注 |
|------|------|------|------|------|----------|------|------|------|--------|------|------|------|--------|------|
| S001 | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | 00:00 | ... |

## 镜头组设计
[镜头组逻辑]

## 质量检查
[检查清单]

## AI生成参数
[生成参数]
```

---

## 二、基础字段语法

### 2.1 镜号语法

```
格式：S + 三位数字

示例：
S001, S002, S003...

规则：
- 每集独立编号
- 全集连续递增
- 场次用分隔符标记（## 场1：XXX）

特殊标记：
- S001-S005：场1
- S006-S010：场2
- 以此类推
```

### 2.2 景别语法

```
基础景别：
ECU  = Extreme Close-up（大特写）
CU   = Close-up（特写）
MCU  = Medium Close-up（近景）
MS   = Medium Shot（中景）
MWS  = Medium Wide Shot（中全景）
WS   = Wide Shot（全景）
LS   = Long Shot（远景）
ELS  = Extreme Long Shot（大远景）

特殊景别：
OTS  = Over the Shoulder（过肩）
POV  = Point of View（主观）
2S   = Two Shot（双人镜头）
3S   = Three Shot（三人镜头）
```

### 2.3 角度语法

```
基础角度：
EL   = Eye Level（平视）
LA   = Low Angle（仰拍）
HA   = High Angle（俯拍）
DA   = Dutch Angle（斜角）
BL   = Bird's Eye（鸟瞰）
WL   = Worm's Eye（虫视）

组合角度：
LA-45 = 45度仰拍
HA-30 = 30度俯拍
DA-15 = 15度斜角
```

### 2.4 运镜语法

```
基础运镜：
FIX  = Fixed（固定）
PAN  = Pan（摇）
TILT = Tilt（俯仰）
ZIN  = Zoom In（推）
ZOUT = Zoom Out（拉）
CRANE = Crane（升降）

高级运镜：
DIN  = Dolly In（推轨推进）
DOUT = Dolly Out（推轨拉远）
TRK  = Tracking（跟拍）
ORBIT = Orbit（环绕）
ORB   = Orbit（环绕）
HS   = Handheld（手持）
STEADY = Steadicam（稳定器）

速度修饰：
S-   = Slow（慢）
F-   = Fast（快）
R-   = Reverse（倒放）

组合示例：
S-PAN = 慢摇
F-TRK = 快速跟拍
R-ZIN = 倒放推镜头
```

---

## 三、转场语法

### 3.1 基础转场

```
CUT  = 硬切（默认，可省略）
DISS = 溶解（Dissolve）
FI   = 淡入（Fade In）
FO   = 淡出（Fade Out）
FIFO = 淡入淡出（Fade In Fade Out）
FLASH = 闪白
FB   = 闪黑（Flash Black）
WIPE = 擦除
```

### 3.2 创意转场

```
MC   = 匹配剪辑（Match Cut）
JUMP = 跳切（Jump Cut）
OC   = 遮挡转场（Obstruct Cut）
SPIN = 旋转转场（Spin Transition）
SWISH = 甩镜转场（Whip Pan）
SOUND = 声音转场（Sound Bridge）
```

### 3.3 转场位置标记

```
转场标记在镜头之间：

S001 | CUT | S002
S002 | DISS | S003
S003 | FLASH | S004

或在镜头字段中标记：
转场：CUT
转场：DISS(1s)
转场：FLASH
```

### 3.4 转场时长

```
格式：转场类型(时长)

示例：
DISS(1s) = 1秒溶解
FI(0.5s) = 0.5秒淡入
FO(2s) = 2秒淡出
```

---

## 四、声音分层语法

### 4.1 四层声音系统

```
层级1：DIALOGUE（对白）
├── 标记：D:
├── 格式：D: "台词内容"
├── 示例：D: "我不后悔"
└── 变体：
    ├── D-OS: 画外音
    ├── D-V.O.: 旁白
    └── D-THINK: 内心独白

层级2：SFX（音效）
├── 标记：SFX:
├── 格式：SFX: [音效描述]
├── 示例：SFX: 门撞墙闷响
└── 变体：
    ├── SFX-FOLEY: 拟音
    ├── SFX-IMPACT: 撞击
    └── SFX-AMBIENT: 环境音效

层级3：MUSIC（配乐）
├── 标记：M:
├── 格式：M: [配乐描述]
├── 示例：M: 钢琴抒情曲渐入
└── 变体：
    ├── M-BGM: 背景音乐
    ├── M-THEME: 主题曲
    └── M-SCORE: 配乐

层级4：ROOM TONE（环境音）
├── 标记：RT:
├── 格式：RT: [环境音描述]
├── 示例：RT: 办公室空调声
└── 变体：
    ├── RT-NATURAL: 自然环境音
    └── RT-URBAN: 城市环境音
```

### 4.2 声音层级标记

```
音量标记：
++ = 大声
+  = 适中
-  = 小声
-- = 极小声

渐变标记：
↗ = 渐强
↘ = 渐弱
→ = 平稳

示例：
D: "你走吧" ↘
SFX: 脚步声 ↗
M: 钢琴曲 ↘
RT: 安静 --
```

### 4.3 声音同步标记

```
同步点标记：
[SYNC] = 同步点
[BEAT] = 节拍点
[HIT] = 冲击点

示例：
S001: 女主转头 [SYNC]
S002: 门打开 [HIT]
S003: 音乐高潮 [BEAT]
```

---

## 五、情绪标注语法

### 5.1 情绪类型

```
基础情绪：
HAPPY  = 开心
SAD    = 悲伤
ANGRY  = 愤怒
SCARED = 恐惧
SURPRISE = 惊讶
DISGUST = 厌恶

复合情绪：
LOVE   = 爱
JEALOUS = 嫉妒
HOPE   = 希望
DESPAIR = 绝望
NERVOUS = 紧张
SHY    = 害羞
```

### 5.2 情绪强度

```
强度等级：
1 = 微弱（subtle）
2 = 轻微（slight）
3 = 中等（moderate）
4 = 强烈（strong）
5 = 极端（extreme）

格式：情绪-强度

示例：
SAD-2 = 轻微悲伤
ANGRY-4 = 强烈愤怒
HAPPY-3 = 中等开心
```

### 5.3 情绪变化标记

```
变化标记：
A→B = 从A变化到B
A↗B = 从A渐变到B
A↘B = 从A突变到B

示例：
CALM→ANGRY = 从平静到愤怒
SAD↗HOPE = 从悲伤渐变到希望
HAPPY↘SAD = 从开心突变到悲伤
```

### 5.4 情绪标记位置

```
在画面描述中标记：
[情绪类型-强度]

示例：
S001: 女主眼睛，泪光闪烁 [SAD-3]
S002: 男主微笑，温柔注视 [LOVE-4]
S003: 反派冷笑，眼神阴险 [ANGRY-3]
```

---

## 六、节奏标注语法

### 6.1 节奏类型

```
基础节奏：
SLOW   = 慢节奏
MEDIUM = 中等节奏
FAST   = 快节奏

特殊节奏：
BUILD  = 渐快
DECAY  = 渐慢
PEAK   = 高潮
CALM   = 平静
```

### 6.2 节奏强度

```
强度等级：
1 = 极慢（very slow）
2 = 慢（slow）
3 = 中等（medium）
4 = 快（fast）
5 = 极快（very fast）

格式：节奏-强度

示例：
SLOW-1 = 极慢节奏
FAST-5 = 极快节奏
```

### 6.3 节奏变化标记

```
变化标记：
SLOW→FAST = 从慢到快
FAST→SLOW = 从快到慢
MEDIUM↗FAST = 从中等渐快
```

### 6.4 节奏标记位置

```
在镜头字段中标记：
节奏：[类型-强度]

示例：
节奏：SLOW-2
节奏：FAST-4
节奏：BUILD
```

---

## 七、镜头组语法

### 7.1 镜头组定义

```
格式：## 镜头组X：[组名]

示例：
## 镜头组1：开场建立
## 镜头组2：冲突铺垫
## 镜头组3：高潮爆发
```

### 7.2 镜头组逻辑

```
逻辑类型：
SEQ  = 顺序（Sequence）
PAR  = 并行（Parallel）
CROSS = 交叉（Cross-cutting）
FLASH = 闪回（Flashback）
PRE  = 闪前（Flash-forward）
```

### 7.3 镜头组标记

```
在镜头组中标记镜头范围：

## 镜头组1：开场建立 [SEQ]
- S001-S003
- 逻辑：顺序
- 情绪：CALM→NERVOUS
- 节奏：SLOW→MEDIUM
```

---

## 八、时间码语法

### 8.1 绝对时间码

```
格式：HH:MM:SS:FF

示例：
00:00:00:00 = 开始
00:00:03:12 = 3秒12帧
00:01:30:00 = 1分30秒

帧率：
- 24fps：FF范围00-23
- 30fps：FF范围00-29
- 60fps：FF范围00-59
```

### 8.2 相对时间码

```
格式：+SS.F

示例：
+0.0 = 当前镜头开始
+2.5 = 当前镜头2.5秒处
+5.0 = 当前镜头结束（假设5秒）
```

### 8.3 时间码标记

```
标记位置：时间码列

示例：
| S001 | ... | 00:00:00:00 |
| S002 | ... | 00:00:03:00 |
| S003 | ... | 00:00:06:12 |
```

---

## 九、AI生成参数语法

### 9.1 Seedance参数

```
格式：[模型|时长|画幅|分辨率]

示例：
[S2.0|5s|9:16|720p]
[S2.0-fast|3s|9:16|720p]
[S1.0-lite|4s|9:16|480p]
```

### 9.2 参考图标记

```
格式：REF:[类型]:[文件名]

示例：
REF:CHAR:char_苏瑶.png
REF:SCENE:scene_办公室.png
REF:STYLE:style_电影感.png
```

### 9.3 提示词标记

```
格式：PROMPT:[提示词内容]

或单独列出：
### AI提示词
S001: Close-up of young woman, tears in eyes...
S002: Medium shot of man walking...
```

---

## 十、质检标记语法

### 10.1 质检状态

```
状态标记：
[PASS] = 通过
[FAIL] = 不通过
[WARN] = 警告
[TODO] = 待处理
[DONE] = 已完成
```

### 10.2 质检类型

```
类型标记：
- [TECH] 技术检查
- [ART] 艺术检查
- [COMPLIANCE] 合规检查
- [CONSISTENCY] 一致性检查
```

### 10.3 质检标记位置

```
在备注列标记：

| S001 | ... | [PASS][TECH] |
| S002 | ... | [WARN][CONSISTENCY] |
| S003 | ... | [TODO][ART] |
```

---

## 十一、版本控制语法

### 11.1 版本号

```
格式：v主版本.次版本

示例：
v1.0 = 初始版本
v1.1 = 小修改
v2.0 = 大修改
```

### 11.2 变更标记

```
变更类型：
[ADD] = 新增
[MOD] = 修改
[DEL] = 删除
[FIX] = 修复

格式：[类型] 镜号 内容

示例：
[ADD] S005 新增转场镜头
[MOD] S003 修改运镜为推镜头
[DEL] S007 删除冗余镜头
[FIX] S002 修复情绪标注错误
```

### 11.3 版本记录

```
## 版本历史

### v1.0 (2026-06-13)
- 初始版本
- 完成全部分镜

### v1.1 (2026-06-14)
- [ADD] S005 新增转场镜头
- [MOD] S003 修改运镜
- [FIX] S002 修复情绪标注
```

---

## 十二、完整分镜表示例

```markdown
# 《霸总的替身新娘》第1集 分镜脚本

## 元信息
- 集数：第1集
- 时长：3分00秒
- 类型：甜宠+悬疑
- 版本：v1.0
- 日期：2026-06-13

## 情绪曲线
```
情绪
  ↑
高│        ╱╲            ╱╲
  │       ╱  ╲          ╱  ╲
中│  ╱╲  ╱    ╲    ╱╲  ╱    ╲
  │ ╱  ╲╱      ╲  ╱  ╲╱      ╲
低│╱              ╲╱            ╲
  └──────────────────────────────→ 时间
   0:00  0:30  1:00  1:30  2:00  2:30  3:00
   钩子  铺垫  高潮1 转折  高潮2 结尾
```

## 镜头组1：开场钩子 [SEQ] [00:00-00:05]

| 镜号 | 景别 | 角度 | 运镜 | 转场 | 画面描述 | 对白 | 音效 | 配乐 | 环境音 | 情绪 | 节奏 | 时长 | 时间码 | 备注 |
|------|------|------|------|------|----------|------|------|------|--------|------|------|------|--------|------|
| S001 | ECU | EL | FIX | FI(0.5s) | 女主眼睛，泪光闪烁 | - | - | M: 钢琴单音 ↗ | RT: 安静 | SAD-3 | SLOW-2 | 2s | 00:00:00 | [PASS][TECH] |
| S002 | CU | EL | FIX | CUT | 女主咬唇，手握紧 | D: "我不能哭" | SFX: 心跳声 ↗ | M: 钢琴 ↗ | RT: 安静 | SAD-4 | MEDIUM-3 | 3s | 00:00:02 | [PASS][TECH] |

## 镜头组2：霸总出场 [SEQ] [00:05-00:30]

| 镜号 | 景别 | 角度 | 运镜 | 转场 | 画面描述 | 对白 | 音效 | 配乐 | 环境音 | 情绪 | 节奏 | 时长 | 时间码 | 备注 |
|------|------|------|------|------|----------|------|------|------|--------|------|------|------|--------|------|
| S003 | WS | EL | FIX | CUT | 门打开，逆光剪影 | - | SFX: 门打开声 | M: 低音渐入 ↗ | RT: 安静 | NERVOUS-2 | SLOW-2 | 2s | 00:00:05 | [PASS][TECH] |
| S004 | MS | LA-30 | FIX | CUT | 霸总背影，走向女主 | - | SFX: 脚步声 | M: 低音持续 | RT: 安静 | NERVOUS-3 | MEDIUM-3 | 3s | 00:00:07 | [PASS][TECH] |
| S005 | MS | EL | FIX | CUT | 霸总转身，正面 | D: "你是我的" | - | M: 霸气主题 ↗ | RT: 安静 | LOVE-4 | MEDIUM-3 | 2s | 00:00:10 | [PASS][TECH] |

## 镜头组3：壁咚高潮 [SEQ] [00:30-01:00]

| 镜号 | 景别 | 角度 | 运镜 | 转场 | 画面描述 | 对白 | 音效 | 配乐 | 环境音 | 情绪 | 节奏 | 时长 | 时间码 | 备注 |
|------|------|------|------|------|----------|------|------|------|--------|------|------|------|--------|------|
| S006 | MS | EL | ZIN | CUT | 霸总靠近，手撑墙 | - | SFX: 手撑墙声 | M: 钢琴+弦乐 ↗ | RT: 安静 | NERVOUS-4 | BUILD | 3s | 00:00:30 | [PASS][TECH] |
| S007 | CU | EL | FIX | CUT | 女主惊讶，眼睛睁大 | - | SFX: 心跳声 ↗ | M: 音乐高潮 | RT: 安静 | SURPRISE-4 | PEAK | 2s | 00:00:33 | [PASS][TECH] |
| S008 | CU | EL | FIX | CUT | 霸总低头，深情注视 | D: "谁也抢不走" | - | M: 深情主题 | RT: 安静 | LOVE-5 | PEAK | 3s | 00:00:35 | [PASS][TECH] |

## 质量检查

| 检查项 | 状态 | 备注 |
|--------|------|------|
| 镜头数量 | [PASS] | 8个镜头 |
| 景别分布 | [PASS] | ECU:1 CU:3 MS:3 WS:1 |
| 情绪递进 | [PASS] | SAD→NERVOUS→LOVE |
| 节奏控制 | [PASS] | SLOW→MEDIUM→PEAK |
| 声音分层 | [PASS] | 四层完整 |
| 转场逻辑 | [PASS] | CUT为主 |
| 时长分配 | [PASS] | 3分钟 |
| AI参数 | [PASS] | 参数完整 |

## AI生成参数

| 镜号 | 模型 | 时长 | 画幅 | 分辨率 | 参考图 |
|------|------|------|------|--------|--------|
| S001 | S2.0 | 2s | 9:16 | 720p | REF:CHAR:char_苏瑶.png |
| S002 | S2.0 | 3s | 9:16 | 720p | REF:CHAR:char_苏瑶.png |
| S003 | S2.0 | 2s | 9:16 | 720p | REF:SCENE:scene_办公室.png |
| S004 | S2.0 | 3s | 9:16 | 720p | REF:CHAR:char_陆景深.png |
| S005 | S2.0 | 2s | 9:16 | 720p | REF:CHAR:char_陆景深.png |
| S006 | S2.0 | 3s | 9:16 | 720p | REF:CHAR:char_陆景深.png |
| S007 | S2.0 | 2s | 9:16 | 720p | REF:CHAR:char_苏瑶.png |
| S008 | S2.0 | 3s | 9:16 | 720p | REF:CHAR:char_陆景深.png |

## 版本历史

### v1.0 (2026-06-13)
- 初始版本
- 完成全部分镜
```

---

## 十三、语法速查表

### 13.1 景别速查

| 缩写 | 全称 | 中文 |
|------|------|------|
| ECU | Extreme Close-up | 大特写 |
| CU | Close-up | 特写 |
| MCU | Medium Close-up | 近景 |
| MS | Medium Shot | 中景 |
| MWS | Medium Wide Shot | 中全景 |
| WS | Wide Shot | 全景 |
| LS | Long Shot | 远景 |
| ELS | Extreme Long Shot | 大远景 |

### 13.2 运镜速查

| 缩写 | 全称 | 中文 |
|------|------|------|
| FIX | Fixed | 固定 |
| PAN | Pan | 摇 |
| TILT | Tilt | 俯仰 |
| ZIN | Zoom In | 推 |
| ZOUT | Zoom Out | 拉 |
| CRANE | Crane | 升降 |
| DIN | Dolly In | 推轨 |
| DOUT | Dolly Out | 拉轨 |
| TRK | Tracking | 跟拍 |
| ORBIT | Orbit | 环绕 |
| HS | Handheld | 手持 |
| STEADY | Steadicam | 稳定器 |

### 13.3 转场速查

| 缩写 | 全称 | 中文 |
|------|------|------|
| CUT | Cut | 硬切 |
| DISS | Dissolve | 溶解 |
| FI | Fade In | 淡入 |
| FO | Fade Out | 淡出 |
| FIFO | Fade In Fade Out | 淡入淡出 |
| FLASH | Flash | 闪白 |
| FB | Flash Black | 闪黑 |
| MC | Match Cut | 匹配剪辑 |
| JUMP | Jump Cut | 跳切 |

### 13.4 声音速查

| 缩写 | 全称 | 中文 |
|------|------|------|
| D: | Dialogue | 对白 |
| D-OS: | Off Screen | 画外音 |
| D-V.O.: | Voice Over | 旁白 |
| SFX: | Sound Effects | 音效 |
| M: | Music | 配乐 |
| RT: | Room Tone | 环境音 |

### 13.5 情绪速查

| 缩写 | 全称 | 中文 |
|------|------|------|
| HAPPY | Happy | 开心 |
| SAD | Sad | 悲伤 |
| ANGRY | Angry | 愤怒 |
| SCARED | Scared | 恐惧 |
| SURPRISE | Surprise | 惊讶 |
| LOVE | Love | 爱 |
| NERVOUS | Nervous | 紧张 |
| SHY | Shy | 害羞 |

### 13.6 节奏速查

| 缩写 | 全称 | 中文 |
|------|------|------|
| SLOW | Slow | 慢 |
| MEDIUM | Medium | 中等 |
| FAST | Fast | 快 |
| BUILD | Build | 渐快 |
| DECAY | Decay | 渐慢 |
| PEAK | Peak | 高潮 |
| CALM | Calm | 平静 |
