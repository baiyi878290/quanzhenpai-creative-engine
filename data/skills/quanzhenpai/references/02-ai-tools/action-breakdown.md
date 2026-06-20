# 动作分解库

## 一、动作分解原则

### 1.1 核心原则

```
原则1：单镜头单动作
- 每个镜头只描述1个简单动作
- 避免多动作叠加

原则2：动作原子化
- 将复杂动作拆分为最小单元
- 每个单元可独立生成

原则3：镜头衔接逻辑
- 动作起点 = 上一镜头终点
- 保持动作连贯性

原则4：景别交替
- 避免相同景别连续使用
- 利用景别变化增强节奏
```

### 1.2 动作复杂度分级

| 级别 | 复杂度 | 处理方式 | 示例 |
|------|--------|----------|------|
| S | 简单 | 单镜头完成 | 转头、微笑、眨眼 |
| A | 基础 | 单镜头完成 | 走路、坐下、站立 |
| B | 中等 | 2-3镜头 | 开门、拥抱、握手 |
| C | 复杂 | 3-5镜头 | 打斗、跳舞、追逐 |
| D | 极复杂 | 5-10镜头 | 群戏、特技、长镜头 |

---

## 二、面部动作

### 2.1 眼神动作

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 转头看 | 1 | S001：头部转向（近景） |
| 抬眼 | 1 | S001：眼睛向上看（特写） |
| 闭眼 | 1 | S001：眼睛闭上（特写） |
| 眼神交流 | 2 | S001：A看B（近景）<br>S002：B回看A（近景） |
| 闪躲眼神 | 2 | S001：眼神接触（特写）<br>S002：眼神移开（特写） |

**提示词模板：**
```
# 转头看
S001: Close-up of [角色], slowly turns head to [方向],
      [表情], [光影], cinematic, 9:16

# 眼神交流
S001: Close-up of [角色A], looking at camera,
      [表情], [光影], cinematic, 9:16
S002: Close-up of [角色B], looking back,
      [表情], [光影], cinematic, 9:16
```

### 2.2 表情变化

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 微笑 | 1 | S001：嘴角上扬（特写） |
| 哭泣 | 2 | S001：眼眶泛红（特写）<br>S002：泪水流下（特写） |
| 愤怒 | 2 | S001：眉头紧锁（特写）<br>S002：咬牙切齿（特写） |
| 惊讶 | 2 | S001：眼睛睁大（特写）<br>S002：嘴巴张开（特写） |
| 心碎 | 3 | S001：表情凝固（近景）<br>S002：嘴唇颤抖（特写）<br>S003：泪水涌出（特写） |

**提示词模板：**
```
# 微笑
S001: Close-up of [角色], subtle smile appearing,
      warm lighting, cinematic, 9:16

# 哭泣
S001: Close-up of [角色], eyes turning red,
      tears forming, soft backlight, cinematic, 9:16
S002: Extreme close-up of [角色], tears streaming down,
      emotional, cinematic, 9:16

# 愤怒
S001: Close-up of [角色], eyebrows furrowing,
      angry expression forming, dramatic lighting, cinematic, 9:16
S002: Close-up of [角色], jaw clenching,
      intense anger, dramatic lighting, cinematic, 9:16
```

### 2.3 嘴部动作

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 说话 | 1 | S001：嘴巴张合（近景） |
| 亲吻 | 2 | S001：靠近（近景）<br>S002：嘴唇接触（特写） |
| 咬唇 | 1 | S001：咬住下唇（特写） |
| 惊呼 | 1 | S001：嘴巴张大（特写） |

---

## 三、上肢动作

### 3.1 手部动作

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 握手 | 2 | S001：伸手（中景）<br>S002：两手相握（特写） |
| 挥手 | 1 | S001：手挥动（近景） |
| 指向 | 1 | S001：手指指向（近景） |
| 拿东西 | 2 | S001：手伸向物体（中景）<br>S002：手握住物体（特写） |
| 打耳光 | 4 | S001：抬手（近景）<br>S002：手挥动（特写）<br>S003：脸被击中（特写）<br>S004：头转向（近景） |
| 摔东西 | 3 | S001：拿起物体（中景）<br>S002：手臂挥动（近景）<br>S003：物体落地碎裂（全景） |

**提示词模板：**
```
# 握手
S001: Medium shot of [角色A], extending hand forward,
      [表情], [场景], cinematic, 9:16
S002: Close-up of two hands shaking,
      [光影], cinematic, 9:16

# 打耳光
S001: Close-up of [角色A], raising hand,
      angry expression, dramatic lighting, cinematic, 9:16
S002: Close-up of hand swinging through air,
      motion blur, dramatic, cinematic, 9:16
S003: Close-up of [角色B], face being slapped,
      head turning, impact, cinematic, 9:16
S004: Medium shot of [角色B], head turned,
      shocked expression, dramatic lighting, cinematic, 9:16
```

### 3.2 手臂动作

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 拥抱 | 3 | S001：靠近（中景）<br>S002：伸手臂（近景）<br>S003：拥抱（中景） |
| 推人 | 3 | S001：伸手（近景）<br>S002：接触（中景）<br>S003：被推后退（全景） |
| 拉手 | 2 | S001：伸手拉住（近景）<br>S002：拉着走（全景） |
| 举手 | 1 | S001：手举起（近景） |
| 抱头 | 1 | S001：双手抱头（近景） |

**提示词模板：**
```
# 拥抱
S001: Medium shot of [角色A] and [角色B] approaching each other,
      [表情], [场景], cinematic, 9:16
S002: Close-up of [角色A] extending arms,
      reaching out, [表情], cinematic, 9:16
S003: Medium shot of [角色A] and [角色B] embracing,
      emotional, [光影], cinematic, 9:16

# 推人
S001: Close-up of [角色A], hand reaching forward,
      angry expression, dramatic lighting, cinematic, 9:16
S002: Medium shot of [角色A] pushing [角色B],
      contact moment, dramatic, cinematic, 9:16
S003: Wide shot of [角色B] stumbling backward,
      shocked expression, dramatic lighting, cinematic, 9:16
```

---

## 四、下肢动作

### 4.1 走路/跑步

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 走路 | 2 | S001：脚步移动（特写）<br>S002：全身走动（全景） |
| 跑步 | 3 | S001：起跑（中景）<br>S002：奔跑（全景）<br>S003：脚步特写（特写） |
| 转身走 | 3 | S001：转身（近景）<br>S002：背影（中景）<br>S003：走远（全景） |
| 踮脚 | 1 | S001：脚尖踮起（特写） |
| 跺脚 | 1 | S001：脚跺地（特写） |

**提示词模板：**
```
# 走路
S001: Close-up of feet walking on [地面],
      [鞋类型], [节奏], cinematic, 9:16
S002: Wide shot of [角色] walking through [场景],
      [动作], [光影], cinematic, 9:16

# 跑步
S001: Medium shot of [角色] starting to run,
      [表情], [场景], cinematic, 9:16
S002: Wide tracking shot of [角色] running,
      [速度], [场景], cinematic, 9:16
S003: Close-up of feet running,
      [地面], [速度], cinematic, 9:16

# 转身走
S001: Medium shot of [角色] turning around,
      [表情], [场景], cinematic, 9:16
S002: Medium shot of [角色] back view,
      starting to walk away, cinematic, 9:16
S003: Wide shot of [角色] walking away,
      [场景], [光影], cinematic, 9:16
```

### 4.2 坐/站/蹲

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 坐下 | 2 | S001：弯腰（中景）<br>S002：坐定（中景） |
| 站起 | 2 | S001：准备起身（中景）<br>S002：站定（中景） |
| 蹲下 | 2 | S001：弯膝（中景）<br>S002：蹲定（中景） |
| 跪下 | 2 | S001：膝盖弯曲（中景）<br>S002：跪地（全景） |
| 躺下 | 2 | S001：身体倾斜（中景）<br>S002：躺定（全景） |

**提示词模板：**
```
# 坐下
S001: Medium shot of [角色] bending knees,
      about to sit, [场景], cinematic, 9:16
S002: Medium shot of [角色] seated,
      [表情], [场景], cinematic, 9:16

# 跪下
S001: Medium shot of [角色] knees bending,
      slowly going down, [表情], cinematic, 9:16
S002: Wide shot of [角色] kneeling on ground,
      [表情], [场景], cinematic, 9:16
```

---

## 五、互动动作

### 5.1 亲密互动

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 亲吻脸颊 | 3 | S001：靠近（近景）<br>S002：嘴唇接触脸颊（特写）<br>S003：分开（近景） |
| 亲吻嘴唇 | 4 | S001：对视（近景）<br>S002：靠近（近景）<br>S003：嘴唇接触（特写）<br>S004：分开（近景） |
| 牵手 | 2 | S001：手靠近（特写）<br>S002：十指相扣（特写） |
| 摸头 | 2 | S001：手抬起（近景）<br>S002：手放在头上（近景） |
| 依偎 | 2 | S001：靠近（中景）<br>S002：靠在肩膀（近景） |

**提示词模板：**
```
# 亲吻嘴唇
S001: Close-up of [角色A] and [角色B] looking at each other,
      romantic tension, soft lighting, cinematic, 9:16
S002: Close-up of faces slowly moving closer,
      eyes closing, anticipation, cinematic, 9:16
S003: Extreme close-up of lips touching,
      soft focus, romantic, cinematic, 9:16
S004: Close-up of faces separating,
      gentle smile, soft lighting, cinematic, 9:16

# 牵手
S001: Close-up of [角色A] hand reaching toward [角色B] hand,
      anticipation, [光影], cinematic, 9:16
S002: Close-up of two hands intertwining,
      fingers interlocking, romantic, cinematic, 9:16
```

### 5.2 冲突互动

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 推搡 | 3 | S001：伸手推（近景）<br>S002：接触（中景）<br>S003：后退（全景） |
| 扯衣领 | 3 | S001：伸手（近景）<br>S002：抓住衣领（特写）<br>S003：拉近（近景） |
| 摔倒 | 4 | S001：失去平衡（中景）<br>S002：倒下过程（全景）<br>S003：着地（特写）<br>S004：躺在地上（全景） |
| 踢 | 3 | S001：抬腿（中景）<br>S002：踢出（全景）<br>S003：被踢中（中景） |

**提示词模板：**
```
# 推搡
S001: Close-up of [角色A] hand pushing forward,
      angry expression, dramatic lighting, cinematic, 9:16
S002: Medium shot of [角色A] pushing [角色B],
      contact moment, dramatic, cinematic, 9:16
S003: Wide shot of [角色B] stumbling backward,
      shocked expression, dramatic lighting, cinematic, 9:16

# 摔倒
S001: Medium shot of [角色] losing balance,
      arms flailing, [场景], cinematic, 9:16
S002: Wide shot of [角色] falling,
      [动作], [场景], cinematic, 9:16
S003: Close-up of [角色] hitting ground,
      impact, [表情], cinematic, 9:16
S004: Wide shot of [角色] lying on ground,
      [状态], [场景], cinematic, 9:16
```

---

## 六、场景动作

### 6.1 日常动作

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 开门 | 3 | S001：手放门把（近景）<br>S002：转动门把（特写）<br>S003：门打开（全景） |
| 关门 | 2 | S001：手推门（近景）<br>S002：门关闭（全景） |
| 喝水 | 2 | S001：拿起杯子（近景）<br>S002：喝水（近景） |
| 打电话 | 2 | S001：拿起手机（近景）<br>S002：放在耳边（近景） |
| 看手机 | 2 | S001：拿出手机（近景）<br>S002：看屏幕（特写） |

**提示词模板：**
```
# 开门
S001: Close-up of [角色] hand reaching for door handle,
      [光影], [场景], cinematic, 9:16
S002: Close-up of hand turning door handle,
      [细节], cinematic, 9:16
S003: Wide shot of door opening,
      [角色] entering [场景], cinematic, 9:16

# 喝水
S001: Close-up of [角色] picking up glass,
      [手部细节], [光影], cinematic, 9:16
S002: Close-up of [角色] drinking,
      [喉部动作], [表情], cinematic, 9:16
```

### 6.2 工作动作

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 打字 | 2 | S001：手指敲键盘（特写）<br>S002：屏幕显示（特写） |
| 签字 | 2 | S001：拿起笔（近景）<br>S002：签字（特写） |
| 翻文件 | 2 | S001：手翻页（特写）<br>S002：看内容（近景） |
| 会议发言 | 2 | S001：站起来（中景）<br>S002：说话（近景） |

---

## 七、情绪动作

### 7.1 开心/激动

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 鼓掌 | 2 | S001：双手抬起（近景）<br>S002：鼓掌（近景） |
| 跳跃 | 3 | S001：准备（中景）<br>S002：跳起（全景）<br>S003：落地（中景） |
| 挥拳 | 2 | S001：握拳（特写）<br>S002：挥拳庆祝（近景） |
| 比心 | 1 | S001：手比心（特写） |

### 7.2 悲伤/失落

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 捂脸 | 1 | S001：双手捂脸（近景） |
| 蹲下抱头 | 2 | S001：蹲下（中景）<br>S002：抱头（近景） |
| 望窗外 | 2 | S001：转身（中景）<br>S002：望向窗外（近景） |
| 躺床 | 2 | S001：躺下（中景）<br>S002：望天花板（近景） |

### 7.3 愤怒/攻击

| 动作 | 镜头数 | 分解方案 |
|------|--------|----------|
| 拍桌子 | 3 | S001：手抬起（近景）<br>S002：手落下（特写）<br>S003：桌子震动（全景） |
| 握拳 | 1 | S001：手握紧（特写） |
| 摔门 | 3 | S001：转身（中景）<br>S002：走向门（全景）<br>S003：摔门（全景） |
| 砸东西 | 3 | S001：拿起物体（近景）<br>S002：挥动（近景）<br>S003：砸碎（全景） |

---

## 八、特殊动作

### 8.1 慢动作场景

| 动作 | 镜头数 | 分解方案 | 备注 |
|------|--------|----------|------|
| 回眸 | 1 | S001：慢慢转头（近景） | 慢动作 |
| 飘发 | 1 | S001：头发飘动（特写） | 慢动作 |
| 跌倒 | 1 | S001：慢慢倒下（全景） | 慢动作 |
| 击中 | 1 | S001：击中瞬间（特写） | 慢动作 |

**慢动作提示词：**
```
S001: Close-up of [角色] slowly turning around,
      hair flowing, [表情],
      slow motion, cinematic, 9:16
```

### 8.2 转场动作

| 动作 | 用途 | 提示词 |
|------|------|--------|
| 手遮镜头 | 场景切换 | hand covering camera lens, black screen |
| 转身 | 时间跳跃 | [角色] spinning, motion blur |
| 推门 | 空间转换 | pushing door, entering new space |
| 闭眼 | 回忆/梦境 | eyes closing, fade to black |

---

## 九、动作分解速查表

### 9.1 按场景分类

**办公室：**
```
打字、签字、翻文件、接电话、会议发言、拍桌子
```

**卧室：**
```
躺床、起床、换衣服、照镜子、梳头
```

**餐厅：**
```
坐下、拿菜单、点餐、吃饭、喝水、买单
```

**街道：**
```
走路、跑步、等红灯、过马路、看手机
```

### 9.2 按情绪分类

**甜蜜：**
```
牵手、拥抱、亲吻、依偎、摸头、比心
```

**悲伤：**
```
哭泣、捂脸、蹲下、望窗外、躺床
```

**愤怒：**
```
拍桌、握拳、推搡、摔门、砸东西
```

**紧张：**
```
踱步、搓手、咬指甲、深呼吸、东张西望
```

---

## 十、提示词优化技巧

### 10.1 动作描述简化

```
❌ 错误：A walks to B, grabs B's shoulder, and pushes B away
✅ 正确：
  S001: A walks toward B
  S002: A grabs B's shoulder
  S003: A pushes B

❌ 错误：B falls down, hits the table, and test tubes shatter
✅ 正确：
  S001: B stumbles backward
  S002: B hits the table
  S003: Test tubes shatter on ground
```

### 10.2 运镜与动作分离

```
❌ 错误：Camera tracks A running through corridor
✅ 正确：
  运镜：static shot / slow pan
  动作：A running through corridor

原因：运镜和动作同时复杂化会导致画面不稳定
```

### 10.3 一致性控制

```
每个镜头都包含：
1. 角色核心词（外貌描述）
2. 场景核心词（环境描述）
3. 风格关键词（cinematic, 9:16）

示例：
S001: 19-year-old Eastern beauty with long black hair,
      walking in modern office,
      soft lighting, cinematic, 9:16

S002: 19-year-old Eastern beauty with long black hair,
      sitting at desk in modern office,
      soft lighting, cinematic, 9:16
```
