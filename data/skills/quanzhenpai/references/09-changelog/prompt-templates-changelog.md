# 提示词模板更新日志

## 2026-06-13 更新

### 新增提示词模板

#### 1. 情绪递进模板
```
# 基础版
[表情] expression

# 进阶版
expression transitioning from [起始情绪] to [终结情绪],
[微表情描述], [肢体描述]

# 专业版
subtle emotional progression: initial freeze,
eyes losing focus, understanding dawning,
lips starting to tremble, eyes glistening,
tears forming but held back, finally releasing
```

#### 2. 场景氛围模板
```
# 基础版
[场景], [光影]

# 进阶版
[场景] with [核心元素],
[光影效果], [色调], [氛围]

# 完整版
[场景] with [核心元素],
[光影效果], [色调], [氛围],
cinematic, [技术参数], 9:16
```

#### 3. 人物动作模板
```
# 基础版
[人物] [动作]

# 进阶版
[人物] [动作], [表情], [场景]

# 完整版
[景别] of [人物描述], [服装],
[动作], [表情],
in [场景], [光影], [氛围],
cinematic, 9:16
```

#### 4. 双人互动模板
```
# 基础版
[人物A] and [人物B] [互动]

# 进阶版
[人物A] [动作A], [人物B] [动作B],
in [场景], [氛围]

# 完整版
Two-shot of [人物A] and [人物B],
[人物A] [动作A] [表情A],
[人物B] [动作B] [表情B],
in [场景], [光影], [氛围],
cinematic, 9:16
```

---

### 优化现有模板

#### 1. 角色设定板模板优化
```
# 左右分割式（优化版）
Character reference sheet with left-right split layout:
LEFT SIDE: High quality character half-body portrait 
of [角色描述], [服装详细描述], [发型描述], 
[表情], [光影效果], 
cinematic, photorealistic, white clean background.
RIGHT SIDE: Modular character information system 
with thin border grid layout:
Top: Full body three-view (front, side, back) 
with unified proportions,
Bottom: Close-up facial feature details.
Professional character design sheet,
unified color system, high information density,
realistic texture, cinematic lighting,
ultra high detail, absolutely no text or labels
```

#### 2. 场景设定板模板优化
```
# 完整版
[景别] shot, [风格] style, [画质],
[色调], [场景类型],
[核心元素], [背景元素],
[顶部元素], [地面元素],
[光影效果], [特殊效果],
[视角] shot
```

#### 3. Seedance视频模板优化
```
# 文生视频（优化版）
[景别] shot, [运镜],
[主体描述], [动作], [表情],
in [场景],
[光影], [色调], [氛围],
cinematic, 9:16
Duration: [X] seconds

# 图生视频（优化版）
Same person as reference,
[action description],
[expression change],
in [scene],
[lighting], [atmosphere],
cinematic, 9:16
Duration: [X] seconds
```

---

### 提示词优化技巧

#### 1. 权重控制
```
# 前置高权重
[重要主体] + [动作] + [场景] + [风格]

# 重复强化
[主体] [主体描述], [动作], [场景]

# 具体化
❌ beautiful woman
✅ 19-year-old Eastern beauty with long black hair
```

#### 2. 避免冲突
```
# 矛盾检查
❌ dark scene, bright lighting
✅ dark scene, single spotlight

❌ fast movement, slow motion
✅ fast movement, then slow motion impact
```

#### 3. 精简优化
```
# 简化原则
❌ A beautiful young woman with long black hair 
   and brown eyes wearing a white dress is 
   walking slowly through a beautiful garden
✅ Young woman in white dress, walking through garden,
   golden sunset light, romantic atmosphere
```

---

## 待更新模板

### 下次更新内容
```
1. 更多情绪递进模板
2. 更多场景氛围模板
3. 更多人物动作模板
4. 更多双人互动模板
5. 更多类型片专用模板
```

### 更新时间
```
- 2026-06-20：情绪递进模板补充
- 2026-07-04：场景氛围模板补充
- 2026-07-18：人物动作模板补充
- 2026-08-01：双人互动模板补充
```
