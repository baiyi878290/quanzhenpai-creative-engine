# 提示词优化方案

## 一、提示词优化原则

### 1.1 核心原则

```
1. 结构化：有清晰的结构层次
2. 具体化：避免模糊描述
3. 优先级：重要信息前置
4. 简洁化：去除冗余信息
5. 测试化：持续测试优化
```

### 1.2 优化目标

```
- 更高的生成质量
- 更强的一致性
- 更准确的控制
- 更少的返工
- 更高的效率
```

---

## 二、提示词结构优化

### 2.1 基础结构公式

```
[主体] + [动作] + [场景] + [光影] + [风格]

示例：
Young woman crying in rain, dramatic lighting, cinematic
```

### 2.2 进阶结构公式

```
[景别] + [角度] + [运镜] + [主体描述] + [动作] + [表情] + [场景] + [光影] + [色调] + [氛围] + [风格] + [技术参数]

示例：
Close-up shot, eye level, slow dolly in,
young woman with long black hair,
crying with tears streaming down face,
in modern office with glass walls,
soft side lighting, cool blue tones,
melancholic atmosphere,
cinematic, shallow DOF, 9:16
```

### 2.3 完整结构模板

```
[景别] shot, [角度], [运镜],
[主体描述], [服装/造型], [表情/动作],
in [场景环境],
with [光影效果], [色调/氛围],
[风格关键词], [技术参数], [画幅]

示例：
Close-up shot, eye level, slow dolly in,
19-year-old Eastern beauty with long black hair, petite,
wearing white dress, expression changing from calm to tears,
in modern office with glass walls and city view,
soft fluorescent lighting, cool professional tones,
melancholic atmosphere,
cinematic, film grain, shallow DOF, 9:16
```

---

## 三、权重控制优化

### 3.1 位置权重

```
权重规则：
- 前置词 > 后置词
- 具体词 > 抽象词
- 名词 > 形容词 > 副词

正确：
Young woman crying in rain, dramatic lighting, cinematic
（主体在前，风格在后）

错误：
Cinematic, dramatic, beautiful, young woman crying
（风格在前，主体被弱化）
```

### 3.2 重复权重

```
权重规则：
- 重复出现的词权重更高
- 但避免过度重复

正确：
Young woman, young woman crying, tears streaming
（自然重复，强调主体）

错误：
Young woman young woman crying crying tears tears
（过度重复，冗余）
```

### 3.3 大写权重

```
权重规则：
- 大写单词权重更高
- 用于强调关键信息

正确：
Young woman with TERRIFIED expression
（强调恐惧表情）

正确：
Woman RUNNING through corridor
（强调跑步动作）
```

### 3.4 括号权重

```
权重规则：
- 括号内的内容权重更高
- 不同平台语法不同

Midjourney：
(woman:1.5) = 权重1.5倍
[woman] = 降低权重

Stable Diffusion：
(woman:1.3) = 权重1.3倍
[woman] = 降低权重
```

---

## 四、负面提示词优化

### 4.1 通用负面提示词

```
基础负面：
blurry, low quality, distorted, deformed,
extra fingers, extra limbs, bad anatomy,
watermark, text, logo, signature

进阶负面：
cropped, out of frame, ugly, duplicate,
poorly drawn, bad art, amateur,
overexposed, underexposed
```

### 4.2 人物负面提示词

```
人物专用：
asymmetrical eyes, crossed eyes,
plastic skin, over-smoothed,
inconsistent features, multiple heads,
extra fingers, malformed hands,
bad proportions, disfigured

表情专用：
blank expression, dead eyes,
unnatural smile, forced expression
```

### 4.3 场景负面提示词

```
场景专用：
cluttered background, distracting elements,
inconsistent lighting, multiple light sources,
floating objects, impossible geometry,
low resolution, pixelated, artifacts
```

### 4.4 风格负面提示词

```
风格专用：
cartoon, anime, illustration, drawing,
painting, sketch, 3d render, cgi,
overexposed, underexposed,
oversaturated, desaturated
```

---

## 五、平台差异优化

### 5.1 Seedance优化

```
优化要点：
1. 使用全能参考（角色+场景+风格）
2. 简化动作描述
3. 避免极端角度
4. 使用核心词锁定一致性

示例：
[角色核心词], [动作], [场景核心词],
[光影], [风格], 9:16
Duration: [X] seconds
```

### 5.2 即梦优化

```
优化要点：
1. 支持中文提示词
2. 使用角色参考图
3. 使用风格参考
4. 简化复杂动作

示例：
19岁东方美女，黑长直发，娇小身材，
在现代办公室行走，
柔和的荧光灯照明，冷色调，
电影感，9:16
```

### 5.3 Midjourney优化

```
优化要点：
1. 必须英文提示词
2. 使用参数：--ar 9:16 --style raw --s 50
3. 使用 --cref 角色参考
4. 使用权重控制

示例：
Young woman crying in rain,
dramatic lighting, cinematic,
--ar 9:16 --style raw --s 50
```

### 5.4 Flux优化

```
优化要点：
1. 支持中文/英文
2. CFG值：3.5-5.0
3. 可配合LoRA增强
4. 适合批量生成

示例：
Young woman crying in rain,
dramatic lighting, cinematic
CFG: 4.0
```

---

## 六、场景提示词优化

### 6.1 人物场景

```
模板：
[景别] of [人物描述], [服装], [表情],
[动作], in [场景],
[光影], [氛围], cinematic, 9:16

示例：
Close-up of young woman in white dress,
tears streaming down face,
crying in modern office,
soft side lighting, melancholic,
cinematic, 9:16
```

### 6.2 对话场景

```
模板：
Two-shot of [人物A] and [人物B],
[人物A] [动作/表情],
[人物B] [动作/表情],
in [场景], [光影], cinematic, 9:16

示例：
Two-shot of man and woman facing each other,
man looking down at woman,
woman looking up defiantly,
in office, dramatic lighting,
cinematic, 9:16
```

### 6.3 动作场景

```
模板：
[景别] of [人物] [动作],
[场景], [速度], [光影],
cinematic, 9:16

示例：
Wide shot of woman running through rain,
splashing in puddles,
looking back in fear,
handheld camera, urgent,
cinematic, 9:16
```

### 6.4 情感场景

```
模板：
[景别] of [人物],
[情绪描述], [表情/动作],
[光影], [氛围],
cinematic, 9:16

示例：
Close-up of woman,
heartbroken expression,
tears forming in eyes,
soft backlight, melancholic,
cinematic, 9:16
```

---

## 七、一致性控制优化

### 7.1 角色一致性

```
方法1：核心词锁定
- 提取角色核心特征（≤20字）
- 每个镜头都包含核心词

示例：
核心词：19-year-old Eastern beauty, long black hair, petite

S001: 19-year-old Eastern beauty with long black hair, petite, walking...
S002: 19-year-old Eastern beauty with long black hair, petite, crying...
S003: 19-year-old Eastern beauty with long black hair, petite, smiling...
```

### 7.2 场景一致性

```
方法1：场景核心词锁定
- 提取场景核心特征
- 同一场景所有镜头使用相同核心词

示例：
核心词：modern office, glass walls, city view

S001: ...in modern office with glass walls, city view...
S002: ...in modern office with glass walls, city view...
S003: ...in modern office with glass walls, city view...
```

### 7.3 风格一致性

```
方法1：风格关键词统一
- 全片使用相同风格关键词

示例：
风格关键词：cinematic, film grain, shallow DOF, 9:16

所有镜头结尾都包含：
...cinematic, film grain, shallow DOF, 9:16
```

---

## 八、测试与迭代

### 8.1 测试流程

```
1. 生成测试版本
2. 评估生成质量
3. 分析问题原因
4. 调整提示词
5. 重新生成
6. 对比效果
7. 确定最优版本
```

### 8.2 评估维度

```
维度1：主体准确性
- 人物是否符合描述
- 服装是否正确
- 表情是否自然

维度2：场景准确性
- 场景是否符合描述
- 光影是否正确
- 色调是否统一

维度3：动作自然度
- 动作是否流畅
- 是否有变形
- 速度是否正常

维度4：风格一致性
- 风格是否统一
- 画质是否达标
- 氛围是否合适
```

### 8.3 优化策略

```
策略1：增量优化
- 每次只修改一个变量
- 对比修改前后效果
- 保留有效修改

策略2：A/B测试
- 生成两个版本
- 对比效果差异
- 选择更优版本

策略3：批量测试
- 生成多个版本
- 统计成功率
- 选择最优参数
```

---

## 九、常见问题优化

### 9.1 人物变形

```
问题：脸部扭曲、手指多余
原因：提示词太复杂/角度极端
优化：
1. 简化提示词
2. 避免极端角度
3. 使用高清参考图
4. 添加负面提示词
```

### 9.2 动作不自然

```
问题：动作僵硬、速度异常
原因：动作描述太复杂
优化：
1. 单镜头单动作
2. 简化动作描述
3. 使用smooth motion
4. 避免多动作叠加
```

### 9.3 场景不一致

```
问题：同一场景布局变化
原因：场景描述不统一
优化：
1. 使用场景参考图
2. 统一场景核心词
3. 固定光影描述
4. 使用全能参考
```

### 9.4 风格不统一

```
问题：不同镜头风格差异大
原因：风格关键词不统一
优化：
1. 统一风格关键词
2. 使用风格参考图
3. 固定技术参数
4. 使用统一LUT
```

---

## 十、提示词优化检查清单

### 10.1 结构检查

```
□ 有清晰的结构层次
□ 重要信息前置
□ 无冗余信息
□ 格式规范
```

### 10.2 内容检查

```
□ 主体描述清晰
□ 动作描述具体
□ 场景描述完整
□ 光影描述明确
□ 风格关键词统一
```

### 10.3 权重检查

```
□ 重要信息权重高
□ 无权重冲突
□ 无模糊描述
□ 无矛盾描述
```

### 10.4 一致性检查

```
□ 角色核心词统一
□ 场景核心词统一
□ 风格关键词统一
□ 技术参数统一
```

### 10.5 平台检查

```
□ 语法符合平台规范
□ 参数设置正确
□ 参考图使用正确
□ 格式符合要求
```
