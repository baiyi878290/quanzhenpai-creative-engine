# 一致性控制强化指南

## 一、一致性控制概述

### 1.1 一致性类型

| 类型 | 重要性 | 当前能力 | 优化方向 |
|------|--------|----------|----------|
| 角色一致性 | ⭐⭐⭐⭐⭐ | ⚠️ 基础 | 核心词+参考图+IP-Adapter |
| 场景一致性 | ⭐⭐⭐⭐ | ⚠️ 基础 | 场景参考图+核心词 |
| 风格一致性 | ⭐⭐⭐ | ⚠️ 基础 | 风格关键词+LUT |
| 光影一致性 | ⭐⭐⭐ | ⚠️ 基础 | 光影描述固定 |
| 色调一致性 | ⭐⭐⭐ | ⚠️ 基础 | 色调关键词+后期调色 |

### 1.2 一致性控制流程

```
剧本/分镜
    ↓
提取核心信息
    ↓
┌─────────────────────────────────────────────┐
│  角色核心词                                   │
│  场景核心词                                   │
│  风格核心词                                   │
│  光影核心词                                   │
└─────────────────────────────────────────────┘
    ↓
生成参考图
    ↓
┌─────────────────────────────────────────────┐
│  角色设定板 → 角色参考图                       │
│  场景设定板 → 场景参考图                       │
│  风格参考图 → 风格锁定                         │
└─────────────────────────────────────────────┘
    ↓
生成视频
    ↓
┌─────────────────────────────────────────────┐
│  全能参考：角色+场景+风格                       │
│  提示词：核心词+动作+光影                       │
└─────────────────────────────────────────────┘
    ↓
质量检查
    ↓
┌─────────────────────────────────────────────┐
│  角色是否一致？                                │
│  场景是否一致？                                │
│  风格是否一致？                                │
└─────────────────────────────────────────────┘
    ↓
输出成品
```

---

## 二、角色一致性控制

### 2.1 核心词锁定法

**原理：**
```
每个镜头提示词都包含角色外貌核心词
确保AI生成时人物外观一致
```

**核心词提取规则：**
```
1. 从角色设定板提取
2. 控制在20字以内
3. 包含最显著特征
4. 避免模糊描述
```

**示例：**
```
角色：苏瑶
设定：19岁东方美女，黑长直发，白皙皮肤，娇小身材，妩媚天真

核心词（中文）：19岁东方美女，黑长直发，娇小身材
核心词（英文）：19-year-old Eastern beauty, long black hair, petite

所有镜头都包含此核心词：
S001: 19-year-old Eastern beauty with long black hair, walking in...
S002: 19-year-old Eastern beauty with long black hair, sitting at...
S003: 19-year-old Eastern beauty with long black hair, crying...
```

### 2.2 参考图锁定法

**原理：**
```
使用Seedance全能参考功能
上传角色设定板作为角色参考
所有镜头使用同一张参考图
```

**操作步骤：**
```
1. 生成角色设定板（GPT-Image-2）
2. 保存为角色参考图
3. 在Seedance中上传到「角色参考」槽位
4. 所有该角色镜头都使用此参考图
```

**参考图要求：**
```
- 清晰度：高清，无模糊
- 角度：正面或3/4侧面
- 光线：均匀，无强烈阴影
- 背景：简洁，纯色最佳
- 表情：中性或目标表情
- 服装：目标服装
```

### 2.3 IP-Adapter人脸锁定（高级）

**原理：**
```
使用IP-Adapter或InstantID
输入1张人脸照片
锁定所有生成视频的人脸
一致性>95%
```

**工具选择：**
| 工具 | 特点 | 适用 |
|------|------|------|
| IP-Adapter | 通用性强 | 风格+人脸锁定 |
| InstantID | 人脸特化 | 纯人脸锁定 |
| PhotoMaker | 多角度生成 | 多角度人脸 |

**工作流集成：**
```
1. 准备人脸照片（正面、清晰）
2. 使用IP-Adapter处理Seedance输出
3. 替换人脸，保持一致性
4. 后期微调
```

### 2.4 角色一致性检查清单

```
□ 所有镜头中角色发型一致
□ 所有镜头中角色服装一致（同场景）
□ 所有镜头中角色五官特征一致
□ 所有镜头中角色体型一致
□ 所有镜头中角色肤色一致
□ 所有镜头中角色配饰一致
```

---

## 三、场景一致性控制

### 3.1 场景核心词法

**提取规则：**
```
1. 从场景设定板提取
2. 包含：场景类型+核心元素+色调+光影
3. 同一场景所有镜头使用相同核心词
```

**示例：**
```
场景：办公室
设定：现代办公室，玻璃墙，城市景观，专业照明，CEO办公桌

核心词（中文）：现代办公室，玻璃墙，城市景观
核心词（英文）：modern office, glass walls, city view

同一场景所有镜头：
S001: ...in modern office with glass walls, city view...
S002: ...in modern office with glass walls, city view...
S003: ...in modern office with glass walls, city view...
```

### 3.2 场景参考图法

**操作步骤：**
```
1. 生成场景设定板（GPT-Image-2）
2. 保存为场景参考图
3. 在Seedance中上传到「场景参考」槽位
4. 同一场景所有镜头使用同一张参考图
```

**场景参考图要求：**
```
- 无人物
- 环境完整
- 光线方向明确
- 色调统一
- 核心元素清晰
```

### 3.3 场景一致性检查清单

```
□ 同一场景的布局一致
□ 同一场景的家具/道具位置一致
□ 同一场景的光线方向一致
□ 同一场景的色调一致
□ 同一场景的窗户/门位置一致
□ 同一场景的装饰品一致
```

---

## 四、风格一致性控制

### 4.1 风格核心词法

**统一风格关键词：**
```
所有镜头结尾都包含：

基础风格：
cinematic, professional, high quality

竖屏参数：
9:16 aspect ratio, portrait orientation

画质参数：
720p/1080p, sharp focus, detailed

风格参数：
film grain, shallow DOF, anamorphic lens
```

**风格组合示例：**
```
电影感：
cinematic, film grain, shallow DOF, 24fps

写实感：
photorealistic, natural lighting, documentary style

唯美感：
dreamy, soft focus, ethereal, romantic

悬疑感：
dark, moody, high contrast, noir style
```

### 4.2 风格参考图法

**操作步骤：**
```
1. 选择目标风格的代表图片
2. 在Seedance中上传到「风格参考」槽位
3. 所有镜头使用同一张风格参考图
```

**风格参考图来源：**
```
- 电影截图
- 摄影作品
- AI生成的风格样本
- 导演/摄影师作品
```

### 4.3 LUT统一法

**后期调色统一：**
```
1. 选择目标LUT（如：Kodak 2383）
2. 应用到所有镜头
3. 微调个别镜头
4. 确保色调统一
```

**常用LUT：**
| LUT | 风格 | 适用 |
|-----|------|------|
| Kodak 2383 | 电影胶片 | 情感剧、文艺片 |
| Fuji Pro 400H | 清新自然 | 甜宠、日常 |
| Cyberpunk Teal&Orange | 赛博朋克 | 科幻、悬疑 |
| Wong Kar-wai Style | 复古港风 | 怀旧、爱情 |

---

## 五、光影一致性控制

### 5.1 光影核心词法

**统一光影描述：**
```
同一场景所有镜头使用相同光影描述：

办公室场景：
soft fluorescent lighting, even illumination

卧室场景：
warm bedside lamp, soft shadows

夜景场景：
moonlight, dramatic shadows

户外场景：
golden hour, natural sunlight
```

### 5.2 光影方向控制

**原则：**
```
同一场景的光线方向必须一致

例如：
- 主光从左侧45° → 所有镜头主光从左侧45°
- 窗户在右侧 → 所有镜头窗户光从右侧来
```

**检查清单：**
```
□ 光源位置一致
□ 阴影方向一致
□ 高光位置一致
□ 色温一致
```

---

## 六、色调一致性控制

### 6.1 色调核心词法

**统一色调描述：**
```
暖色调场景：
warm tones, golden, amber, cozy atmosphere

冷色调场景：
cool tones, blue tint, clinical, mysterious

中性色调：
neutral tones, balanced, natural
```

### 6.2 情绪-色调对照

| 情绪 | 色调 | 提示词 |
|------|------|--------|
| 甜蜜 | 暖橙 | warm golden tones, romantic |
| 悲伤 | 冷蓝 | cool blue tones, melancholic |
| 愤怒 | 暗红 | dark red tones, intense |
| 紧张 | 冷灰 | desaturated, tense |
| 温馨 | 暖黄 | warm yellow tones, cozy |
| 悬疑 | 暗绿 | dark green tones, mysterious |

---

## 七、Seedance全能参考最佳实践

### 7.1 参考图组合

**单人场景：**
```
输入：
- 角色参考：char_苏瑶.png（1张）
- 场景参考：scene_办公室.png（1张）
- 提示词：动作+光影+风格

输出：一致的视频片段
```

**双人场景：**
```
输入：
- 角色参考：char_组合.png（2人同框设定板）
- 场景参考：scene_办公室.png（1张）
- 提示词：互动动作+光影+风格

输出：一致的双人视频片段
```

### 7.2 提示词结构

**标准结构：**
```
[角色核心词], [动作描述], 
in [场景核心词],
[光影描述], [色调描述],
[风格关键词], 9:16
Duration: [X] seconds
```

**完整示例：**
```
19-year-old Eastern beauty with long black hair, petite,
walking confidently in modern office with glass walls,
soft fluorescent lighting, cool professional tones,
cinematic, film grain, shallow DOF, 9:16
Duration: 5 seconds
```

### 7.3 批量生成策略

**同一角色批量：**
```
S001: [角色核心词] + 动作1 + [场景核心词] + [风格]
S002: [角色核心词] + 动作2 + [场景核心词] + [风格]
S003: [角色核心词] + 动作3 + [场景核心词] + [风格]

所有镜头使用相同的角色参考图
所有镜头使用相同的场景参考图
所有镜头使用相同的风格关键词
```

**同一场景批量：**
```
场景1的所有镜头：
- 使用相同的场景参考图
- 使用相同的场景核心词
- 使用相同的光影描述

场景2的所有镜头：
- 使用另一张场景参考图
- 使用另一套场景核心词
- 使用另一套光影描述
```

---

## 八、一致性问题排查

### 8.1 角色不一致

**问题表现：**
```
- 发型变化
- 五官变化
- 服装变化
- 体型变化
```

**排查步骤：**
```
1. 检查角色参考图是否清晰
2. 检查角色核心词是否一致
3. 检查是否使用了同一张参考图
4. 检查提示词是否有冲突描述
```

**解决方案：**
```
1. 重新生成更清晰的角色设定板
2. 统一所有镜头的角色核心词
3. 确保所有镜头使用同一张参考图
4. 简化提示词，避免冲突
```

### 8.2 场景不一致

**问题表现：**
```
- 布局变化
- 家具位置变化
- 光线方向变化
- 色调变化
```

**排查步骤：**
```
1. 检查场景参考图是否完整
2. 检查场景核心词是否一致
3. 检查光影描述是否一致
4. 检查色调描述是否一致
```

**解决方案：**
```
1. 重新生成更完整的场景设定板
2. 统一所有镜头的场景核心词
3. 统一所有镜头的光影描述
4. 统一所有镜头的色调描述
```

### 8.3 风格不一致

**问题表现：**
```
- 画风差异
- 色调差异
- 质感差异
- 节奏差异
```

**排查步骤：**
```
1. 检查风格关键词是否一致
2. 检查是否使用了风格参考图
3. 检查技术参数是否一致
4. 检查后期调色是否统一
```

**解决方案：**
```
1. 统一所有镜头的风格关键词
2. 使用同一张风格参考图
3. 统一技术参数（分辨率、帧率）
4. 使用统一的LUT调色
```

---

## 九、一致性控制模板

### 9.1 项目配置模板

```markdown
# 项目一致性配置

## 角色配置

### 角色A：苏瑶
- 核心词：19-year-old Eastern beauty, long black hair, petite
- 参考图：char_苏瑶.png
- 服装1：white dress（日常）
- 服装2：black suit（职场）

### 角色B：陆景深
- 核心词：handsome Chinese man in 30s, sharp jawline, tall
- 参考图：char_陆景深.png
- 服装1：black suit（正式）
- 服装2：casual clothes（休闲）

## 场景配置

### 场景1：办公室
- 核心词：modern office, glass walls, city view
- 参考图：scene_办公室.png
- 光影：soft fluorescent lighting
- 色调：cool professional tones

### 场景2：卧室
- 核心词：luxury bedroom, king size bed, warm lighting
- 参考图：scene_卧室.png
- 光影：warm bedside lamp
- 色调：warm romantic tones

## 风格配置

- 风格关键词：cinematic, film grain, shallow DOF, 9:16
- 风格参考图：style_ref.png
- LUT：Kodak 2383
```

### 9.2 镜头一致性检查表

```markdown
## S001 一致性检查

### 角色
- [x] 使用角色参考图
- [x] 包含角色核心词
- [x] 服装与场景匹配

### 场景
- [x] 使用场景参考图
- [x] 包含场景核心词
- [x] 光影方向正确

### 风格
- [x] 包含风格关键词
- [x] 技术参数正确
- [x] 色调与项目一致

### 结果
- 角色一致性：✅
- 场景一致性：✅
- 风格一致性：✅
```

---

## 十、高级一致性技巧

### 10.1 多角色一致性

**挑战：**
```
多个角色在同一场景中
需要保持每个角色的一致性
同时保持角色之间的关系一致
```

**解决方案：**
```
方案1：组合设定板
- 生成所有角色的组合设定板
- 作为角色参考图上传

方案2：分别生成+后期合成
- 每个角色单独生成
- 后期合成到同一场景

方案3：双人参考图
- 生成双人互动的参考图
- 作为角色参考上传
```

### 10.2 时间跳跃一致性

**挑战：**
```
同一角色在不同时间（年轻/年老）
需要保持基本特征一致
同时体现年龄变化
```

**解决方案：**
```
1. 生成不同年龄的设定板
2. 保持核心特征（脸型、五官比例）
3. 调整细节（发型、皱纹、服装）
4. 使用对应年龄的参考图
```

### 10.3 场景变化一致性

**挑战：**
```
同一场景在不同时间（日/夜）
需要保持场景结构一致
同时体现时间变化
```

**解决方案：**
```
1. 生成不同时间的场景设定板
2. 保持场景结构（家具、布局）
3. 调整光影（日光/灯光/月光）
4. 调整色调（暖/冷/暗）
5. 使用对应时间的参考图
```

---

## 十一、一致性控制工具

### 11.1 核心词管理工具

```python
class CharacterManager:
    def __init__(self):
        self.characters = {}
    
    def add_character(self, name, core_words_cn, core_words_en):
        self.characters[name] = {
            "cn": core_words_cn,
            "en": core_words_en
        }
    
    def get_prompt(self, name, action, scene):
        char = self.characters[name]
        return f"{char['en']}, {action}, in {scene}"
    
    def batch_generate(self, name, actions, scene):
        prompts = []
        for action in actions:
            prompts.append(self.get_prompt(name, action, scene))
        return prompts

# 使用
manager = CharacterManager()
manager.add_character(
    "苏瑶",
    "19岁东方美女，黑长直发，娇小身材",
    "19-year-old Eastern beauty, long black hair, petite"
)

prompts = manager.batch_generate(
    "苏瑶",
    ["walking", "sitting", "crying"],
    "modern office"
)
```

### 11.2 一致性检查工具

```python
def check_consistency(shots):
    """检查一组镜头的一致性"""
    issues = []
    
    # 提取所有角色核心词
    character_words = set()
    for shot in shots:
        if "character_core" in shot:
            character_words.add(shot["character_core"])
    
    # 检查是否一致
    if len(character_words) > 1:
        issues.append(f"角色核心词不一致: {character_words}")
    
    # 提取所有场景核心词
    scene_words = set()
    for shot in shots:
        if "scene_core" in shot:
            scene_words.add(shot["scene_core"])
    
    # 检查是否一致
    if len(scene_words) > 1:
        issues.append(f"场景核心词不一致: {scene_words}")
    
    return issues

# 使用
shots = [
    {"character_core": "19-year-old Eastern beauty", "scene_core": "modern office"},
    {"character_core": "19-year-old Eastern beauty", "scene_core": "modern office"},
    {"character_core": "20-year-old Eastern beauty", "scene_core": "modern office"},  # 不一致
]

issues = check_consistency(shots)
print(issues)  # ['角色核心词不一致: {...}']
```

---

## 十二、一致性控制速查

### 12.1 快速检查清单

```
拍摄前：
□ 角色核心词已定义
□ 场景核心词已定义
□ 风格关键词已定义
□ 参考图已生成
□ 配置文件已创建

拍摄中：
□ 每个镜头使用正确参考图
□ 每个镜头包含核心词
□ 每个镜头使用正确风格词
□ 光影描述与场景匹配

拍摄后：
□ 角色一致性检查
□ 场景一致性检查
□ 风格一致性检查
□ 问题镜头标记
□ 必要时重新生成
```

### 12.2 常见错误

```
❌ 错误1：不同镜头使用不同参考图
✅ 正确：同一角色所有镜头使用同一参考图

❌ 错误2：核心词描述不一致
✅ 正确：所有镜头使用完全相同的核心词

❌ 错误3：光影描述冲突
✅ 正确：同一场景所有镜头使用相同光影描述

❌ 错误4：风格关键词缺失
✅ 正确：所有镜头都包含完整的风格关键词

❌ 错误5：色调描述不一致
✅ 正确：同一场景所有镜头使用相同色调描述
```
