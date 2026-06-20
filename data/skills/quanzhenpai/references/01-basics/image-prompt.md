# Image2 提示词工程指南

## 一、提示词结构公式

### 1.1 基础公式
```
[主体] + [细节] + [光影] + [氛围] + [风格] + [技术参数]
```

### 1.2 完整公式
```
[景别/构图], [主体描述], [服装/造型], [表情/动作], 
[场景环境], [光影效果], [色调/氛围], [画面风格], 
[技术参数]
```

## 二、核心元素详解

### 2.1 景别/构图
```
特写：extreme close-up, close-up
近景：close-up shot, bust shot, portrait
中景：medium shot, waist shot, knee shot
全景：wide shot, full body shot, establishing shot
远景：long shot, extreme wide shot
俯瞰：bird's eye view, top-down view
仰拍：low angle shot, worm's eye view
斜角：Dutch angle, tilted angle
```

### 2.2 主体描述
**人物：**
```
基础：a young woman, a middle-aged man
细节：with long black hair, sharp jawline, 
     almond eyes, high cheekbones
年龄：20-year-old, 30s, teenage
体型：slender, athletic, petite, tall and lean
```

**服装：**
```
日常：wearing casual clothes, white t-shirt and jeans
正式：in a black suit, formal dress
古装：traditional Chinese hanfu, period costume
特殊：in a lab coat, military uniform
```

**表情：**
```
平静：calm expression, neutral face
微笑：gentle smile, slight smile, beaming
悲伤：tearful eyes, sad expression, melancholic
愤怒：angry expression, fierce eyes, frowning
惊讶：surprised look, wide eyes, shocked
```

**动作：**
```
静态：standing, sitting, leaning against wall
动态：walking, running, turning around
互动：holding hands, embracing, pointing
手部：touching face, clenching fist, covering mouth
```

### 2.3 场景环境
```
室内：
- living room, bedroom, office, classroom
- kitchen, bathroom, hallway, stairs
- cafe, restaurant, bar, club

室外：
- street, park, beach, mountain
- rooftop, bridge, alley, market
- forest, field, river, lake

特殊：
- fantasy world, cyberpunk city, ancient temple
- space station, underwater, clouds
```

### 2.4 光影效果
**自然光：**
```
golden hour light（黄金时段）
soft morning light（柔和晨光）
harsh midday sun（正午强光）
overcast diffused light（阴天漫射光）
sunset backlight（日落逆光）
moonlight（月光）
```

**人工光：**
```
studio lighting（影棚灯光）
neon lights（霓虹灯）
candle light（烛光）
spotlight（聚光灯）
rim light（轮廓光）
volumetric light（体积光）
```

**光影风格：**
```
Rembrandt lighting（伦勃朗光）
butterfly lighting（蝴蝶光）
split lighting（分割光）
loop lighting（环形光）
```

### 2.5 色调/氛围
**暖色调：**
```
warm tones, golden, amber, orange tint
cozy atmosphere, romantic mood
```

**冷色调：**
```
cool tones, blue tint, desaturated
cold atmosphere, clinical, mysterious
```

**对比色调：**
```
high contrast, dramatic lighting
chiaroscuro, film noir
```

**氛围词：**
```
cinematic, dreamy, ethereal, moody
dramatic, intense, peaceful, serene
mysterious, dark, bright, airy
```

### 2.6 画面风格
**电影风格：**
```
cinematic, film still, movie scene
35mm film, Kodachrome, Portra 400
anamorphic lens, shallow DOF
```

**摄影风格：**
```
professional photography, studio shot
fashion photography, editorial
documentary style, candid
```

**艺术风格：**
```
oil painting, watercolor, anime
comic book, manga, illustration
digital art, concept art
```

**特定风格：**
```
Wes Anderson style（韦斯·安德森）
Wong Kar-wai style（王家卫）
Christopher Nolan style（诺兰）
Studio Ghibli style（吉卜力）
```

### 2.7 技术参数
**画质：**
```
8K, 4K, UHD, high resolution
detailed, sharp focus, crystal clear
professional quality, masterpiece
```

**镜头效果：**
```
shallow depth of field, bokeh, f/1.4
wide angle lens, 24mm, 35mm, 85mm
macro lens, telephoto, fisheye
```

**后期效果：**
```
film grain, lens flare, light leak
color grading, post-processing
HDR, high dynamic range
```

## 三、影视专用提示词模板

### 3.1 角色设定表（多角度）
```
Character reference sheet, 
front view, 3/4 view, side profile, back view, 
[角色详细描述], 
consistent lighting from 45-degree top-side, 
light warm gray background, 
professional character design sheet, 
identical features across all angles
```

### 3.2 表情参考表（6宫格）
```
Character expression reference sheet in 2x3 grid,
six basic expressions: 
calm, smile, laugh, sad, angry, surprised, 
[角色描述], 
consistent character across all panels,
light warm gray background
```

### 3.3 场景设定图
```
Empty scene reference, 
[场景详细描述], 
[光影描述], 
no people, clean composition, 
architectural photography, high detail
```

### 3.4 分镜草图
```
Storyboard frame, 
[景别] shot of [主体], 
[动作/状态], [场景], 
[光影], [氛围], 
cinematic composition
```

### 3.5 多机位九宫格
```
Multi-camera angle reference sheet in 3x3 grid,
showing [主体] from 9 perspectives:
front, 3/4 front, side, 
low angle, eye-level, high angle, 
back, 3/4 back, overhead,
consistent lighting, uniform background
```

## 四、提示词优化技巧

### 4.1 权重控制
**Midjourney：**
```
::2 表示权重2倍
::0.5 表示权重0.5倍
```

**Stable Diffusion：**
```
(word:1.3) 表示权重1.3
[word] 表示降低权重
```

### 4.2 负面提示词（Negative Prompt）
**通用负面提示词：**
```
blurry, low quality, distorted, deformed, 
extra fingers, extra limbs, bad anatomy, 
watermark, text, logo, signature, 
cropped, out of frame, ugly, duplicate
```

**人物专用：**
```
asymmetrical eyes, crossed eyes, 
plastic skin, over-smoothed, 
inconsistent features, multiple heads
```

### 4.3 平台适配

**即梦（Jimeng）：**
- 支持中文提示词
- 可上传参考图锁定一致性
- 模型选择：5.0, 4.6, 4.5

**Midjourney：**
- 必须英文提示词
- 参数：--ar 9:16 --style raw --s 50
- 支持 --cref 角色参考

**Flux：**
- 支持中文/英文
- CFG值：3.5-5.0
- 可配合LoRA增强

## 五、竖屏短剧专用提示词

### 5.1 竖屏构图关键词
```
vertical composition, 9:16 aspect ratio,
portrait orientation, mobile-first design,
upper third rule, centered subject
```

### 5.2 短剧风格关键词
```
Chinese short drama aesthetic,
dramatic lighting, high contrast,
emotional close-up, reaction shot,
soap opera lighting, glossy finish
```

### 5.3 常用场景模板

**办公室：**
```
Modern office interior, glass walls, 
city view from window, professional lighting,
CEO desk, meeting room
```

**豪宅：**
```
Luxury mansion interior, marble floor,
crystal chandelier, grand staircase,
gold accents, designer furniture
```

**医院：**
```
Hospital corridor, white walls, 
fluorescent lighting, medical equipment,
clean and sterile environment
```

**街头：**
```
Chinese city street, neon signs,
night scene, rain-wet pavement,
urban atmosphere, crowd
```

## 六、提示词示例库

### 6.1 霸总出场
```
Medium shot of a handsome Chinese man in his 30s,
wearing a tailored black suit, 
walking confidently through a luxury hotel lobby,
sharp jawline, cold expression,
golden hour light from large windows,
cinematic, shallow DOF, 9:16
```

### 6.2 女主哭泣
```
Close-up of a young Chinese woman,
tears streaming down her face,
biting her lower lip, trying to stay strong,
soft backlight, rain on window behind,
emotional, cinematic, film grain, 9:16
```

### 6.3 对峙场面
```
Two-shot of a man and woman facing each other,
tension in the air, dramatic lighting,
him looking down at her, her looking up defiantly,
dark background with single spotlight,
high contrast, cinematic, 9:16
```

### 6.4 回忆闪回
```
Dreamy flashback scene,
soft focus, overexposed, warm golden tones,
couple walking hand in hand in a park,
autumn leaves falling, nostalgic atmosphere,
vintage film look, lens flare, 9:16
```

## 七、角色设定板专用模板

### 7.1 左右分割式（信息密度最高）

**结构**：左侧半身肖像 + 右侧模块化信息网格

**提示词**：
```
Character reference sheet with left-right split layout:
LEFT SIDE: High quality character half-body portrait 
of [角色描述], [服装], [发型], [表情], 
[光影], cinematic, photorealistic, white background.
RIGHT SIDE: Modular character information system 
with thin border grid, 
top showing full body three-view (front, side, back) 
with unified proportions,
bottom showing facial feature close-up details.
Professional character design sheet,
unified color system, high information density,
realistic texture, cinematic lighting,
no text or labels
```

**可替换变量**：
- `[角色描述]` → 19岁东方美女，娇小身材
- `[服装]` → 广袖魏晋交领长裙绣金配色
- `[发型]` → 黑长直发散落肩头，两鬓发饰
- `[表情]` → 妩媚天真而不自知
- `[光影]` → 侧光，发丝轻飘

### 7.2 九宫格多角度

**结构**：3×3网格，9个不同视角

**提示词**：
```
Character reference sheet in 3x3 grid,
9 perspectives: 
front, 3/4 front, side,
low angle, eye-level, high angle,
back, 3/4 back, overhead,
[角色], [服装], [发型],
consistent lighting, light gray background,
professional design, no text
```

### 7.3 三视图+六表情

**结构**：左侧全身三视图 + 右侧6种表情

**提示词**：
```
Character reference sheet, left-right layout:
LEFT: Full body three-view 
(front, side, back) unified proportions.
RIGHT: 2x3 grid, 6 expressions:
smile, neutral, happy, sad, angry, surprised,
[角色], [服装], [发型],
consistent across panels, light gray background
```

## 八、分镜故事板专用模板

### 8.1 四宫格剧情推演

**结构**：2×2网格，4个连续阶段

**提示词**：
```
4-panel storyboard in 2x2 grid,
narrative progression of [事件]:
top-left [阶段1], top-right [阶段2],
bottom-left [阶段3], bottom-right [阶段4],
consistent character, coherent lighting,
emotional arc from [A] to [B],
film grain, clean white dividers
```

### 8.2 25宫格连贯分镜

**结构**：5×5网格，25帧连续叙事

**提示词**：
```
5x5 cinematic storyboard grid,
25 sequential frames of [场景/动作],
9 story beats, consistent character,
smooth motion continuity,
uniform lighting, varied shot progression,
professional film storyboard, subtle grain
```

### 8.3 情绪递进分镜

**结构**：4-6格，情绪变化过程

**提示词**：
```
Emotional progression storyboard,
[格数] panels showing [角色] transitioning 
from [起始情绪] to [终结情绪],
consistent character design,
lighting shifts to match mood,
cinematic composition, clean layout
```

## 九、手绘分镜稿专用模板

### 9.1 基础结构

```
1. 布局指令：2×2网格，9:16画幅
2. 风格指令：铅笔线稿，手绘，彩色箭头
3. 镜头内容：每个镜头的具体画面描述
4. 标注信息：镜头类型、表演提示、音效
```

### 9.2 完整提示词模板

```
Please create a hand-drawn storyboard sheet based on the following story:
[故事内容]

Layout requirements:
1. 2x2 grid layout, 2 shots per row, 2 rows total
2. Each shot is 9:16 aspect ratio

Style requirements:
1. Pencil single-line sketch style, 
   no complex shading or color, 
   focus on character action and shot rhythm
2. Each shot should be labeled with:
   - Shot type (e.g., low angle, extreme wide, handheld close-up)
   - Performance notes
   - Sound effects description
3. Use simple colored hand-drawn arrows 
   to indicate movement direction

The 4 shots should form a complete scene with:
- Smooth action logic through shot transitions
- Clear character movements
- Emotional progression
```

### 9.3 故事内容填充格式

```
Shot 1: [景别] [运镜]
[画面描述]
[台词/音效]

Shot 2: [景别] [运镜]
[画面描述]
[台词/音效]

Shot 3: [景别] [运镜]
[画面描述]
[台词/音效]

Shot 4: [景别] [运镜]
[画面描述]
[台词/音效]
```

### 9.4 完整示例（职场冲突场景）

```
Please create a hand-drawn storyboard sheet based on the following story:

Characters:
- 舒兰舟 (Shu Lanzhou): young scientist, white lab coat
- 林牧瑶 (Lin Muyao): female colleague, professional attire
- 洛嘉林 (Luo Jialin): aggressive antagonist, dark suit

Story content:

Shot 1: Wide overhead shot, fixed camera
Shu Lanzhou and Lin Muyao standing facing each other, 
seemingly arguing about something in a laboratory.
(No dialogue)

Shot 2: Medium → Close-up, tracking shot
Laboratory door is violently slammed open, 
Luo Jialin rushes in with a fierce expression. 
Camera shakes dramatically.
(Laboratory noise) 
Door hitting wall thud + sharp shoe squeak

Shot 3: Medium-close → Wide, pull-out shot
Luo Jialin grabs Shu Lanzhou's shoulder and pushes hard. 
Shu Lanzhou's terrified face quickly retreats.
Luo Jialin (OS): "舒兰舟!"
Clothing friction sound + test tube rack clattering

Shot 4: Medium shot, slow motion + shaky
Shu Lanzhou's lower back hits the lab table, 
test tubes roll off and shatter on the ground (slow motion).
Glass shattering piercing sound (with heavy reverb)

Layout requirements:
1. 2x2 grid layout, 2 shots per row, 2 rows total
2. Each shot is 9:16 aspect ratio

Style requirements:
1. Pencil single-line sketch style, 
   no complex shading or color, 
   focus on character action and shot rhythm
2. Each shot labeled with shot type, performance notes, sound effects
3. Simple colored hand-drawn arrows showing movement direction
4. The 4 shots form a complete confrontation scene
```

### 9.5 常用场景模板

**冲突场景：**
```
Shot 1: Establishing shot → 人物对峙
Shot 2: 冲突爆发 → 动作入场
Shot 3: 冲突升级 → 肢体接触
Shot 4: 冲突高潮 → 结果/反应
```

**情感场景：**
```
Shot 1: 环境建立 → 氛围营造
Shot 2: 情感铺垫 → 细节特写
Shot 3: 情感爆发 → 关键动作
Shot 4: 情感收尾 → 反应/留白
```

**动作场景：**
```
Shot 1: 全景交代 → 空间关系
Shot 2: 动作发起 → 起势
Shot 3: 动作过程 → 高潮
Shot 4: 动作结果 → 收势
```

### 9.6 标注规范

**镜头类型标注：**
```
全景 / 中景 / 近景 / 特写
俯拍 / 仰拍 / 平视
固定 / 推 / 拉 / 摇 / 跟
慢动作 / 正常速度 / 快速
手持晃动 / 稳定器 / 航拍
```

**音效标注：**
```
环境音：[具体环境音]
动作音：[具体动作音效]
情绪音：[音乐/氛围音]
台词：角色名 + 台词内容
OS：画外音
```

**运动箭头标注：**
```
→ 人物移动方向
↑↓ 镜头运动方向
⟳ 旋转/转身
↕ 视线引导
```

## 十、场景设定板专用模板

### 10.1 场景设定板结构

```
1. 景别指令（全景/中景/近景）
2. 风格指令（写实/电影感/风格化）
3. 画质指令（干净/锐利/无噪点）
4. 色调指令（低饱和/冷调/暖调/暗调）
5. 场景类型（开阔/封闭/室内/室外）
6. 核心元素（家具/设备/道具）
7. 背景元素（墙面/窗户/架子）
8. 顶部元素（灯具/吊顶）
9. 地面元素（地板/地毯）
10. 光影效果（亮调/柔光/硬光）
11. 特殊效果（柔焦/朦胧/通透）
12. 视角指令（俯拍/平视/仰拍）
```

### 10.2 五大场景模板

| 场景类型 | 色调 | 光影 | 适用 |
|----------|------|------|------|
| 实验室/办公室 | 冷白灰蓝 | 亮调柔和 | 科研、职场 |
| 家居/咖啡厅 | 暖黄米白 | 自然侧光 | 生活、情感 |
| 夜晚/悬疑 | 深蓝黑色 | 硬光戏剧 | 悬疑、犯罪 |
| 街道/公园 | 灰色绿色 | 自然光 | 日常、外景 |
| 科幻/奇幻 | 紫红青蓝 | 霓虹光 | 科幻、幻想 |

### 10.3 色调参考

**冷调（实验室/办公室）**：
```
主色调：冷白与灰蓝
高光：冷白
阴影：青灰
氛围：专业、冷静、理性
```

**暖调（家居/咖啡厅）**：
```
主色调：暖黄与米白
高光：暖橙
阴影：深棕
氛围：温馨、舒适、放松
```

**暗调（夜晚/悬疑）**：
```
主色调：深蓝与黑色
高光：冷白（单一光源）
阴影：纯黑
氛围：神秘、紧张、戏剧
```

**自然调（室外）**：
```
主色调：灰色与绿色
高光：白色
阴影：蓝灰
氛围：真实、自然、日常
```

**风格化调（科幻/奇幻）**：
```
主色调：紫红与青蓝
高光：霓虹粉
阴影：深紫
氛围：梦幻、未来、超现实
```

### 10.4 场景设定板保存

```
文件名：scene_[场景名].png
用途：作为Seedance的场景参考图
使用：同一场景的所有镜头都上传此图
```

### 10.5 场景一致性控制

```
原则：同一场景的所有镜头使用相同的场景设定板
方法：上传同一张场景参考图
提示词：保持场景描述关键词一致
验证：检查光影方向、色调、元素是否统一
```
