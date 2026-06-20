# 提示词工程进阶

## 一、提示词权重控制

### 1.1 权重原理

```
AI对提示词的理解有优先级：

1. 前置词 > 后置词
   - 放在前面的词权重更高

2. 具体词 > 抽象词
   - "crying" > "emotional"

3. 名词 > 形容词 > 副词
   - "woman" > "beautiful" > "very"

4. 重复词 > 单次词
   - 重复出现的词权重更高
```

### 1.2 权重分配模板

```
[高权重：主体+动作] + [中权重：场景+光影] + [低权重：风格+氛围]

示例：
✅ 正确：young woman crying in rain, dramatic lighting, cinematic
         （主体+动作在前，风格在后）

❌ 错误：cinematic, dramatic, beautiful, young woman crying
         （风格在前，主体被弱化）
```

### 1.3 Seedance权重技巧

```
# 动作优先
如果要强调动作：
"woman RUNNING through corridor"（大写强调）

如果要强调表情：
"woman running with TERRIFIED expression"

# 场景优先
如果要强调场景：
"in LUXURY hotel lobby, woman walking"

如果要强调人物：
"woman walking in luxury hotel lobby"
```

---

## 二、负面提示词库

### 2.1 通用负面提示词

```
blurry, low quality, distorted, deformed,
extra fingers, extra limbs, bad anatomy,
watermark, text, logo, signature,
cropped, out of frame, ugly, duplicate,
poorly drawn, bad art, amateur
```

### 2.2 人物负面提示词

```
asymmetrical eyes, crossed eyes,
plastic skin, over-smoothed,
inconsistent features, multiple heads,
extra fingers, malformed hands,
bad proportions, disfigured,
mutation, mutated, ugly
```

### 2.3 场景负面提示词

```
cluttered background, distracting elements,
inconsistent lighting, multiple light sources,
floating objects, impossible geometry,
low resolution, pixelated, artifacts
```

### 2.4 动作负面提示词

```
stiff movement, robotic motion,
unnatural pose, impossible anatomy,
frozen expression, static pose,
jerky motion, stuttering
```

### 2.5 风格负面提示词

```
cartoon, anime, illustration, drawing,
painting, sketch, 3d render, cgi,
overexposed, underexposed,
oversaturated, desaturated
```

---

## 三、模型特性利用

### 3.1 Seedance 2.0 特性

```
优势：
- 动作生成较好
- 支持全能参考
- 支持图生视频
- 支持文生视频

最佳实践：
- 使用清晰的参考图
- 简化动作描述
- 避免极端角度
- 使用「全能参考」锁定一致性
```

### 3.2 即梦特性

```
优势：
- 中文支持好
- 人物质量高
- 支持风格参考
- 支持角色参考

最佳实践：
- 使用中文提示词
- 上传角色参考图
- 使用风格参考
- 简化复杂动作
```

### 3.3 Midjourney特性

```
优势：
- 画质极高
- 风格多样
- 构图优秀
- 细节丰富

最佳实践：
- 使用英文提示词
- 添加参数：--ar 9:16 --style raw --s 50
- 使用 --cref 角色参考
- 添加权重控制
```

### 3.4 Flux特性

```
优势：
- 开源免费
- 支持中文
- 生成速度快
- 支持LoRA

最佳实践：
- 使用中文/英文
- CFG值：3.5-5.0
- 配合LoRA增强
- 批量生成
```

---

## 四、提示词组合技

### 4.1 多提示词叠加

```
# 基础叠加
subject + action + scene + lighting + style

# 进阶叠加
[角色核心词] + [动作描述] + [场景核心词] + [光影描述] + [色调描述] + [风格关键词]

# 完整叠加
19-year-old Eastern beauty with long black hair, petite,
walking confidently in modern office with glass walls,
soft fluorescent lighting, cool professional tones,
cinematic, film grain, shallow DOF, 9:16
```

### 4.2 情绪叠加

```
# 基础情绪
sad expression

# 进阶情绪
sad expression with tears forming, melancholic atmosphere

# 完整情绪
expression transitioning from shock to sadness,
eyes welling up with tears, lips trembling,
emotional breakdown moment, cold blue tones,
melancholic atmosphere, cinematic, 9:16
```

### 4.3 场景叠加

```
# 基础场景
modern office

# 进阶场景
modern office with glass walls, city view

# 完整场景
modern office with glass walls, city view from window,
professional lighting, CEO desk, meeting room,
clean and organized, corporate atmosphere
```

---

## 五、提示词优化技巧

### 5.1 避免冲突

```
❌ 冲突提示词：
"dark scene, bright lighting"（矛盾）

✅ 统一提示词：
"dark scene, single spotlight, dramatic shadows"

❌ 冲突提示词：
"fast movement, slow motion"（矛盾）

✅ 统一提示词：
"fast movement, then slow motion impact"
```

### 5.2 避免模糊

```
❌ 模糊提示词：
"beautiful scene"（太抽象）

✅ 具体提示词：
"sunrise over ocean, golden light, calm waves"

❌ 模糊提示词：
"emotional scene"（太抽象）

✅ 具体提示词：
"woman crying, tears streaming, sad expression"
```

### 5.3 避免过长

```
❌ 过长提示词：
"A beautiful young woman with long black hair and brown eyes
wearing a white dress is walking slowly through a beautiful
garden with colorful flowers and green trees under the warm
golden sunlight of a beautiful sunset..."（太长）

✅ 精简提示词：
"Young woman in white dress, walking through garden,
golden sunset light, romantic atmosphere, cinematic, 9:16"
```

### 5.4 使用关键词

```
# 使用AI理解的关键词
cinematic, professional, high quality, 4K, 8K
shallow depth of field, bokeh, film grain
dramatic lighting, golden hour, soft light
rule of thirds, balanced composition
```

---

## 六、提示词模板库

### 6.1 角色提示词模板

```
# 基础角色
[年龄] [性别] [民族]，[身材]，[发型]，[服装]

# 示例
19-year-old Eastern beauty, petite, long black hair,
white dress, gentle expression

# 完整角色
[年龄] [性别] [民族]，[身材]，[发型]，[服装]，[表情]，[动作]
```

### 6.2 场景提示词模板

```
# 基础场景
[场景类型]，[核心元素]，[光影]

# 示例
modern office, glass walls, city view,
professional lighting

# 完整场景
[场景类型]，[核心元素]，[背景元素]，[光影]，[色调]，[氛围]
```

### 6.3 动作提示词模板

```
# 基础动作
[主体] + [动作]

# 示例
woman walking, man running

# 完整动作
[主体] + [动作] + [表情] + [速度] + [方向]
```

### 6.4 情绪提示词模板

```
# 基础情绪
[表情词]

# 示例
sad, happy, angry

# 进阶情绪
[表情词] + [微表情] + [肢体]

# 示例
sad expression, tears forming, shoulders slumping

# 完整情绪
[情绪转换] + [微表情] + [肢体] + [氛围]

# 示例
expression changing from shock to sadness,
eyes welling up, lips trembling,
melancholic atmosphere
```

### 6.5 光影提示词模板

```
# 基础光影
[光质] + [方向]

# 示例
soft side light, dramatic overhead

# 完整光影
[光质] + [方向] + [色温] + [效果]

# 示例
soft warm light from 45-degree side,
golden hour glow, gentle shadows
```

### 6.6 风格提示词模板

```
# 基础风格
cinematic, professional

# 进阶风格
cinematic, film grain, shallow DOF, 24fps

# 完整风格
cinematic, film grain, shallow DOF, anamorphic lens,
professional color grading, 24fps, 9:16
```

---

## 七、提示词问题排查

### 7.1 人物变形

```
问题：脸部扭曲、手指多余
原因：提示词太复杂或有冲突
解决：
1. 简化提示词
2. 使用清晰的参考图
3. 避免极端角度
4. 添加负面提示词
```

### 7.2 动作不自然

```
问题：动作僵硬、速度异常
原因：动作描述太复杂
解决：
1. 简化动作描述
2. 单镜头单动作
3. 使用「smooth motion」
4. 避免多动作叠加
```

### 7.3 场景不一致

```
问题：同一场景布局变化
原因：场景描述不统一
解决：
1. 使用场景参考图
2. 统一场景核心词
3. 固定光影描述
4. 使用全能参考
```

### 7.4 风格不统一

```
问题：不同镜头风格差异大
原因：风格关键词不统一
解决：
1. 统一风格关键词
2. 使用风格参考图
3. 固定技术参数
4. 使用统一LUT
```

---

## 八、提示词速查表

### 8.1 情绪速查

| 情绪 | 英文提示词 |
|------|------------|
| 开心 | happy, joyful, cheerful, delighted |
| 悲伤 | sad, sorrowful, melancholic, heartbroken |
| 愤怒 | angry, furious, enraged, livid |
| 恐惧 | scared, terrified, frightened, panicked |
| 惊讶 | surprised, shocked, astonished, stunned |
| 温柔 | gentle, tender, soft, warm |
| 冷酷 | cold, icy, ruthless, merciless |
| 霸气 | powerful, commanding, domineering |
| 害羞 | shy, bashful, embarrassed, flustered |
| 得意 | proud, smug, satisfied, triumphant |

### 8.2 动作速查

| 动作 | 英文提示词 |
|------|------------|
| 走路 | walking, strolling, pacing |
| 跑步 | running, sprinting, dashing |
| 坐下 | sitting, seated |
| 站立 | standing, standing up |
| 转身 | turning around, spinning |
| 拥抱 | embracing, hugging |
| 亲吻 | kissing, kiss on cheek/lips |
| 哭泣 | crying, weeping, tears streaming |
| 微笑 | smiling, grinning, beaming |
| 皱眉 | frowning, scowling |

### 8.3 场景速查

| 场景 | 英文提示词 |
|------|------------|
| 办公室 | modern office, corporate office |
| 卧室 | bedroom, master bedroom |
| 客厅 | living room, lounge |
| 咖啡厅 | café, coffee shop |
| 酒吧 | bar, nightclub |
| 医院 | hospital, clinic |
| 学校 | school, university |
| 街道 | street, city street |
| 公园 | park, garden |
| 海边 | beach, seaside |

### 8.4 光影速查

| 光影 | 英文提示词 |
|------|------------|
| 柔光 | soft light, diffused light |
| 硬光 | hard light, harsh light |
| 侧光 | side light, lateral light |
| 逆光 | backlight, rim light |
| 顶光 | top light, overhead light |
| 暖光 | warm light, golden light |
| 冷光 | cool light, blue light |
| 自然光 | natural light, sunlight |
| 人工光 | artificial light, studio light |
| 戏剧光 | dramatic lighting, cinematic lighting |

### 8.5 风格速查

| 风格 | 英文提示词 |
|------|------------|
| 电影感 | cinematic, film look |
| 写实 | photorealistic, realistic |
| 唯美 | beautiful, aesthetic |
| 暗黑 | dark, noir |
| 科幻 | sci-fi, futuristic |
| 古风 | traditional, historical |
| 日系 | Japanese style, anime |
| 韩系 | Korean style, K-drama |
| 欧美 | Western style, Hollywood |
| 文艺 | artistic, indie |
