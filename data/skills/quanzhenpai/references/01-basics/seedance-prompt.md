# Seedance 2.0 提示词工程指南

## 一、Seedance 2.0 概述

### 1.1 模型版本
| 模型 | 说明 | 时长 | 分辨率 |
|------|------|------|--------|
| doubao-seedance-2-0-260128 | 最新旗舰 | 4-15s | 720p |
| doubao-seedance-2-0-fast-260128 | 快速版 | 4-15s | 720p |
| doubao-seedance-1-0-lite-t2v-250428 | 文生视频 | 4-10s | 480p |
| doubao-seedance-1-0-lite-i2v-250428 | 图生视频 | 4-10s | 480p |

### 1.2 全能参考功能
Seedance 2.0 支持"全能参考"，可同时参考：
- **角色参考图**：锁定人物外观
- **场景参考图**：锁定环境风格
- **风格参考图**：锁定画面风格
- **动作参考图**：锁定运动方式

## 二、提示词结构

### 2.1 基础结构
```
[镜头运动], [主体描述], [动作], [场景], [光影], [氛围], [风格]
```

### 2.2 完整结构
```
[景别/构图] of [主体], [服装/造型], [表情/状态],
performing [动作描述], in [场景环境],
with [光影效果], [色调/氛围],
cinematic, [技术参数]
```

## 三、镜头运动关键词

### 3.1 基础运镜
```
static shot - 固定镜头
slow pan - 缓慢摇镜
fast pan - 快速摇镜
tilt up - 向上倾斜
tilt down - 向下倾斜
zoom in - 推进
zoom out - 拉远
```

### 3.2 高级运镜
```
dolly in - 推轨推进
dolly out - 推轨拉远
tracking shot - 跟踪镜头
crane shot - 升降镜头
orbit shot - 环绕镜头
handheld - 手持晃动
steadicam - 稳定器跟拍
```

### 3.3 特殊运镜
```
whip pan - 快速甩镜
dolly zoom - 推拉变焦（希区柯克效果）
aerial shot - 航拍
drone shot - 无人机镜头
POV shot - 第一人称视角
over the shoulder - 过肩镜头
```

## 四、文生视频提示词

### 4.1 基础模板
```
[运镜] shot of [主体] [动作] in [场景], 
[光影], [氛围], cinematic
```

### 4.2 人物动作模板
```
[景别] of a [人物描述], 
wearing [服装], [表情], 
[具体动作], in [场景], 
[光影], cinematic, 9:16
```

### 4.3 场景展示模板
```
[运镜] shot of [场景描述], 
[环境细节], [光影效果], 
[时间/天气], [氛围], 
cinematic establishing shot, 9:16
```

### 4.4 对话场景模板
```
Two-shot of [人物A] and [人物B], 
[人物A] [动作/表情], 
[人物B] [动作/表情], 
in [场景], [光影], cinematic, 9:16
```

## 五、图生视频提示词

### 5.1 基础原则
- 参考图已提供视觉信息
- 提示词重点描述**动作**和**变化**
- 避免重复描述参考图中已有的内容

### 5.2 动作描述模板
```
The person [具体动作], 
[表情变化], [环境变化], 
[光影变化], smooth motion
```

### 5.3 常用动作词

**静态→动态：**
```
starts to move, begins to walk, 
slowly turns around, gradually stands up,
wakes up, opens eyes, looks up
```

**持续动作：**
```
walking forward, running, 
dancing, fighting, cooking,
typing on keyboard, reading book
```

**表情变化：**
```
expression changes from [A] to [B],
smile fades, tears well up,
eyes widen in surprise, frowns
```

**互动动作：**
```
shakes hand, hugs, kisses,
pushes, pulls, grabs, releases,
points at, waves, nods
```

## 六、竖屏短剧专用提示词

### 6.1 情绪镜头

**哭泣：**
```
Close-up of young woman, tears streaming down face, 
lips trembling, trying to hold back emotions, 
soft backlight, rain on window, 
emotional, cinematic, 9:16
```

**愤怒：**
```
Close-up of man, jaw clenched, eyes narrowed, 
slamming fist on table, papers fly up, 
dramatic side lighting, high contrast, 
intense, cinematic, 9:16
```

**心动：**
```
Close-up of woman, eyes widening slightly, 
lips parting, blush appearing on cheeks, 
soft golden hour light, bokeh background, 
romantic, dreamy, cinematic, 9:16
```

**震惊：**
```
Close-up of person, eyes widening, mouth opening, 
step back in shock, 
flash of lightning illuminates face, 
dramatic, suspenseful, cinematic, 9:16
```

### 6.2 动作镜头

**霸总走路：**
```
Medium shot of handsome man in black suit, 
walking confidently through hotel lobby, 
slow motion, other people stepping aside, 
golden hour light, cinematic, 9:16
```

**女主逃跑：**
```
Tracking shot of young woman running through rain, 
high heels splashing in puddles, 
looking back in fear, city lights blurred, 
handheld camera, urgent, cinematic, 9:16
```

**打脸场景：**
```
Two-shot, woman slapping man across face, 
head turns sharply, 
dramatic lighting, slow motion impact, 
high contrast, cinematic, 9:16
```

### 6.3 场景转换

**时间流逝：**
```
Time-lapse of city skyline, 
day to night transition, 
lights turning on, clouds moving, 
smooth transition, cinematic, 9:16
```

**空间转换：**
```
Camera moves through door into new room, 
revealing [新场景], 
smooth dolly movement, 
interior lighting, cinematic, 9:16
```

## 七、全能参考使用指南

### 7.1 角色一致性参考
**上传参考图要求：**
- 正面清晰照片
- 光线均匀
- 背景简洁
- 表情自然

**提示词配合：**
```
Same person as reference, 
[动作描述], [场景], [光影], cinematic
```

### 7.2 场景一致性参考
**上传参考图要求：**
- 场景全景照片
- 光线方向明确
- 无遮挡物

**提示词配合：**
```
Same location as reference, 
[人物动作], [时间变化], cinematic
```

### 7.3 风格一致性参考
**上传参考图要求：**
- 目标风格的代表作品
- 色调明确
- 构图清晰

**提示词配合：**
```
In the style of reference image, 
[主体描述], [动作], cinematic
```

## 八、常见问题与优化

### 8.1 动作不自然
**问题**：人物动作僵硬、不流畅
**优化**：
- 增加动作细节描述
- 使用"smooth motion"、"natural movement"
- 降低运镜复杂度

### 8.2 人物变形
**问题**：脸部/手部变形
**优化**：
- 使用清晰的角色参考图
- 简化动作描述
- 避免极端角度

### 8.3 场景不一致
**问题**：前后镜头场景变化
**优化**：
- 使用场景参考图
- 固定场景描述关键词
- 使用相同的光影描述

### 8.4 风格不统一
**问题**：不同镜头风格差异大
**优化**：
- 使用风格参考图
- 统一技术参数
- 固定色调描述

## 九、竖屏短剧视频生成工作流

### 9.1 分镜→视频流程
```
1. 准备角色参考图（正面+侧面）
2. 准备场景参考图（主要场景）
3. 准备风格参考图（目标风格）
4. 按分镜逐镜头生成
5. 使用相同参考图保持一致性
6. 导入剪辑软件拼接
```

### 9.2 批量生成建议
- 同一场景的镜头一起生成
- 使用相同的参考图组合
- 保持提示词结构一致
- 记录成功的提示词模板

### 9.3 质量检查清单
- [ ] 人物外观一致
- [ ] 场景环境一致
- [ ] 光影方向一致
- [ ] 色调风格一致
- [ ] 动作流畅自然
- [ ] 无明显变形
- [ ] 时长符合要求
- [ ] 分辨率达标
