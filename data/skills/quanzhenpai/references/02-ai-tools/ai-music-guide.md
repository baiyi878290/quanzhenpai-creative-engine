# AI配乐指南

## 一、AI配乐工具对比

### 1.1 主流工具

| 工具 | 特点 | 价格 | 适用场景 |
|------|------|------|----------|
| Suno | 最强AI音乐、支持中文歌词 | $8-24/月 | 主题曲、插曲、BGM |
| Udio | 高质量、风格多样 | $8-24/月 | 背景音乐、氛围音乐 |
| Stable Audio | 开源、可商用 | 免费/付费 | 背景音乐、音效 |
| MusicGen | Meta开源、本地部署 | 免费 | 快速原型 |
| AIVA | 古典/管弦乐 | $11-33/月 | 电影配乐 |
| Soundraw | 可定制、免版税 | $16.99/月 | 商业配乐 |

### 1.2 选择建议

```
中文歌曲 + 歌词 → Suno
高质量BGM + 多风格 → Udio
免费 + 本地部署 → MusicGen / Stable Audio
古典/管弦乐 → AIVA
商业免版税 → Soundraw
```

---

## 二、Suno使用指南

### 2.1 核心功能

```
1. 文字生成音乐（Text-to-Music）
2. 歌词生成歌曲（Lyrics-to-Song）
3. 风格控制（Style Tags）
4. 时长控制（Extend）
5. 分段生成（Intro/Verse/Chorus）
```

### 2.2 风格标签库

**流行/情感：**
```
pop, ballad, emotional, romantic, sad, happy
chinese pop, mandarin pop, c-pop
love song, breakup song, wedding song
```

**悬疑/紧张：**
```
suspense, thriller, tension, dark
ambient, atmospheric, mysterious
horror, crime, detective
```

**动作/激烈：**
```
action, epic, dramatic, intense
rock, metal, electronic
chase, fight, battle
```

**温馨/日常：**
```
acoustic, gentle, warm, cozy
piano, guitar, soft
daily life, family, friendship
```

**古风/国风：**
```
chinese traditional, guzheng, erhu
ancient, historical, wuxia
folk, ethnic, oriental
```

**科技/未来：**
```
synthwave, cyberpunk, electronic
futuristic, space, sci-fi
techno, trance, ambient
```

### 2.3 提示词模板

**基础模板：**
```
[风格], [情绪], [乐器], [节奏], [场景]

示例：
emotional piano ballad, sad and melancholic, 
slow tempo, perfect for crying scene
```

**完整模板：**
```
[主风格] [子风格], [情绪1] and [情绪2],
[主要乐器] with [伴奏乐器],
[节奏] tempo [BPM],
[场景描述]

示例：
cinematic orchestral epic, dramatic and heroic,
full orchestra with brass and strings,
fast tempo 140 BPM,
perfect for battle scene climax
```

### 2.4 歌词生成

**中文歌词模板：**
```
[Intro]
(纯音乐)

[Verse 1]
你离开的那个雨天
我的世界只剩下灰暗
曾经的誓言
如今都已成烟

[Chorus]
如果时光可以倒流
我愿用一切换你回头
可是命运弄人
我们终究错过

[Verse 2]
街角的咖啡店还在
只是少了你的陪伴
那些甜蜜的回忆
成了最痛的思念

[Chorus]
如果时光可以倒流
我愿用一切换你回头
可是命运弄人
我们终究错过

[Outro]
(钢琴渐弱)
```

**英文歌词模板：**
```
[Intro]
(Piano melody)

[Verse 1]
Walking through the empty streets
Memories of you I meet
Every corner, every light
Reminds me of that night

[Chorus]
If I could turn back time
I'd make you truly mine
But the world keeps spinning round
And you're nowhere to be found

[Outro]
(Fade out)
```

### 2.5 风格组合示例

**短剧常用风格：**

| 场景 | 风格组合 | Suno提示词 |
|------|----------|------------|
| 甜蜜恋爱 | 流行+钢琴+温暖 | romantic pop ballad, warm piano, gentle female vocal |
| 虐心分手 | 抒情+弦乐+悲伤 | sad orchestral ballad, strings, melancholic |
| 霸总出场 | 电子+低音+霸气 | dark electronic, deep bass, powerful |
| 悬疑推理 | 氛围+合成器+紧张 | suspenseful ambient, synth, tense |
| 古风仙侠 | 古筝+笛子+空灵 | chinese traditional, guzheng, ethereal |
| 战斗场面 | 史诗+管弦+激烈 | epic orchestral, brass, intense action |
| 日常温馨 | 原声吉他+轻快 | acoustic guitar, light, cheerful |
| 回忆闪回 | 钢琴+怀旧 | nostalgic piano, soft, dreamy |

### 2.6 API调用

**Python示例：**
```python
import requests

API_KEY = "your_api_key"

url = "https://api.suno.ai/v1/generate"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

data = {
    "prompt": "emotional piano ballad, sad, slow tempo",
    "title": "分手那天",
    "lyrics": "[Verse 1]\n你离开的那个雨天...\n[Chorus]\n如果时光可以倒流...",
    "duration": 120
}

response = requests.post(url, json=data, headers=headers)
result = response.json()

print(f"歌曲ID: {result['id']}")
print(f"状态: {result['status']}")
```

---

## 三、Udio使用指南

### 3.1 核心优势

```
- 音乐质量极高
- 风格多样
- 支持续写（Extend）
- 支持混音（Remix）
```

### 3.2 使用流程

```
1. 打开 https://www.udio.com
2. 注册账号
3. 输入提示词或歌词
4. 选择风格
5. 生成音乐
6. 下载/续写
```

### 3.3 风格标签

**常用风格：**
```
Pop, Rock, Electronic, Hip-Hop, R&B, Jazz, Classical
Ambient, Cinematic, Orchestral, Acoustic
Chinese, Japanese, Korean, Asian
Lo-fi, Chill, Relaxing, Meditation
```

### 3.4 提示词技巧

**场景描述法：**
```
A gentle piano melody for a romantic scene, 
soft strings in the background,
emotional and heartfelt, 80 BPM
```

**情绪描述法：**
```
Melancholic and bittersweet,
longing for lost love,
acoustic guitar with soft vocals,
slow and reflective
```

**风格混搭法：**
```
Chinese traditional meets modern electronic,
guzheng with synth pads,
ethereal and futuristic,
medium tempo
```

---

## 四、MusicGen（开源方案）

### 4.1 核心优势

```
- Meta开源，完全免费
- 支持本地部署
- 生成速度快
- 可商用
```

### 4.2 本地部署

```bash
# 安装
pip install audiocraft

# 使用
python -c "
from audiocraft.models import MusicGen
import torchaudio

model = MusicGen.get_pretrained('facebook/musicgen-small')
model.set_generation_params(duration=8)

wav = model.generate(['happy acoustic guitar melody'], progress=True)
torchaudio.save('output.wav', wav[0].cpu(), sample_rate=32000)
"
```

### 4.3 使用示例

```python
from audiocraft.models import MusicGen
import torchaudio

# 加载模型
model = MusicGen.get_pretrained('facebook/musicgen-medium')

# 设置参数
model.set_generation_params(
    duration=15,  # 时长（秒）
    top_k=250,    # 采样参数
    top_p=0.0,    # 采样参数
    temperature=1.0  # 创造性
)

# 生成音乐
descriptions = [
    'gentle piano melody for a sad farewell scene',
    'epic orchestral music for a battle climax',
    'lo-fi chill beats for a study scene'
]

wav = model.generate(descriptions, progress=True)

# 保存
for i, audio in enumerate(wav):
    torchaudio.save(f'output_{i}.wav', audio.cpu(), sample_rate=32000)
```

### 4.4 提示词库

**情感类：**
```
happy, sad, angry, peaceful, romantic
melancholic, nostalgic, hopeful, anxious
```

**场景类：**
```
cinematic, dramatic, action, suspense
romantic, comedy, horror, documentary
```

**乐器类：**
```
piano, guitar, violin, orchestra
electronic, synth, drums, bass
```

**风格类：**
```
pop, rock, jazz, classical, electronic
ambient, lo-fi, hip-hop, r&b
```

---

## 五、短剧配乐工作流

### 5.1 完整流程

```
分镜脚本
    ↓
分析情绪曲线
    ↓
标记配乐节点
    ↓
生成配乐
    ↓
时间轴对齐
    ↓
混音输出
```

### 5.2 情绪-配乐对照表

| 情绪 | 配乐风格 | 乐器 | 节奏 |
|------|----------|------|------|
| 甜蜜 | 流行抒情 | 钢琴/吉他 | 慢-中 |
| 悲伤 | 弦乐/钢琴 | 大提琴/钢琴 | 慢 |
| 愤怒 | 摇滚/电子 | 电吉他/鼓 | 快 |
| 紧张 | 氛围/悬疑 | 合成器/弦乐 | 渐快 |
| 震惊 | 史诗/冲击 | 管弦/铜管 | 突变 |
| 温馨 | 原声/民谣 | 吉他/口琴 | 中 |
| 激动 | 电子/舞曲 | 合成器/鼓 | 快 |
| 回忆 | 怀旧/梦幻 | 钢琴/音乐盒 | 慢 |

### 5.3 配乐节点设计

```markdown
## 第1集配乐设计

### 开场（0:00-0:05）
- 情绪：悬疑、神秘
- 配乐：ambient synth pad
- 音量：-18dB

### 铺垫（0:05-0:30）
- 情绪：平静、日常
- 配乐：轻快钢琴
- 音量：-24dB

### 冲突（0:30-1:00）
- 情绪：紧张、不安
- 配乐：弦乐渐强
- 音量：-18dB → -12dB

### 高潮（1:00-1:30）
- 情绪：震惊、愤怒
- 配乐：史诗管弦
- 音量：-12dB

### 结尾（1:30-2:00）
- 情绪：悲伤、留恋
- 配乐：钢琴独奏
- 音量：-18dB → 渐弱
```

### 5.4 批量生成脚本

```python
import requests
import json

# 配乐需求列表
music_needs = [
    {
        "id": "bgm_ep1_intro",
        "prompt": "suspenseful ambient, dark synth, mysterious",
        "duration": 5
    },
    {
        "id": "bgm_ep1_daily",
        "prompt": "gentle piano, light, peaceful",
        "duration": 25
    },
    {
        "id": "bgm_ep1_conflict",
        "prompt": "tense strings, building tension, dramatic",
        "duration": 30
    },
    {
        "id": "bgm_ep1_climax",
        "prompt": "epic orchestral, brass and drums, intense",
        "duration": 30
    },
    {
        "id": "bgm_ep1_ending",
        "prompt": "sad piano solo, melancholic, fading",
        "duration": 30
    }
]

# 批量生成
for need in music_needs:
    response = requests.post(
        "https://api.suno.ai/v1/generate",
        json={
            "prompt": need["prompt"],
            "title": need["id"],
            "duration": need["duration"]
        },
        headers={"Authorization": "Bearer YOUR_API_KEY"}
    )
    
    result = response.json()
    print(f"Generated: {need['id']} - Status: {result['status']}")
```

---

## 六、配乐混音规范

### 6.1 音量层级

```
对白：-12dB ~ -6dB (核心)
音效：-18dB ~ -12dB
配乐：-24dB ~ -18dB (背景)
环境音：-30dB ~ -24dB
```

### 6.2 配乐音量曲线

```
正常场景：-24dB
情绪铺垫：-20dB
情绪递进：-18dB
情绪高潮：-15dB
对白时刻：-28dB（闪避）
```

### 6.3 FFmpeg混音

**对白+配乐混音：**
```bash
ffmpeg -i voice.mp3 -i bgm.mp3 -filter_complex \
  "[0:a]volume=1.0[voice]; \
   [1:a]volume=0.3[bgm]; \
   [voice][bgm]amix=inputs=2:duration=first" \
  output.mp3
```

**动态闪避（对白时配乐降低）：**
```bash
ffmpeg -i voice.mp3 -i bgm.mp3 -filter_complex \
  "[1:a]sidechaincompress=threshold=0.01:ratio=10:attack=50:release=500[bgm_sc]; \
   [0:a][bgm_sc]amix=inputs=2:duration=first" \
  output.mp3
```

### 6.4 剪映混音

```
1. 导入对白音频到音频轨道1
2. 导入配乐到音频轨道2
3. 调整配乐音量至-24dB
4. 在对白位置添加关键帧
5. 降低配乐音量至-30dB
6. 对白结束后恢复-24dB
```

---

## 七、版权与商用

### 7.1 版权说明

| 工具 | 免费版 | 付费版 | 商用 |
|------|--------|--------|------|
| Suno | 有水印 | 免版税 | ✅ 付费版可商用 |
| Udio | 有水印 | 免版税 | ✅ 付费版可商用 |
| MusicGen | 免版税 | - | ✅ 可商用 |
| Stable Audio | 部分 | 免版税 | ✅ 付费版可商用 |

### 7.2 商用建议

```
1. 使用付费版生成，确保免版税
2. 保留生成记录和授权证明
3. 避免使用明显模仿现有歌曲的提示词
4. 商业项目建议使用Soundraw/AIVA等专业工具
```

---

## 八、成本估算

### 8.1 10集短剧配乐成本

```
假设：
- 10集，每集3分钟
- 每集5段配乐，每段30秒
- 总计：50段，25分钟

Suno Pro ($24/月)：
- 2500积分/月
- 约125首歌
- 足够10集短剧
- 成本：$24

Udio Pro ($24/月)：
- 1200积分/月
- 约60首歌
- 足够10集短剧
- 成本：$24

MusicGen（免费）：
- 本地部署
- 无限制
- 成本：$0（需GPU）
```

### 8.2 推荐方案

```
预算充足 + 高质量 → Suno Pro ($24/月)
风格多样 + 专业 → Udio Pro ($24/月)
免费 + 技术能力 → MusicGen (本地部署)
```

---

## 九、快速上手

### 9.1 最快方案（5分钟）

```
1. 打开 https://suno.com
2. 注册账号
3. 点击「Create」
4. 输入提示词：sad piano ballad for breakup scene
5. 点击生成
6. 下载音乐
```

### 9.2 歌词方案（15分钟）

```
1. 打开Suno
2. 选择「Custom Mode」
3. 输入歌词（参考模板）
4. 选择风格：chinese pop ballad
5. 生成并调整
6. 下载音乐
```

### 9.3 批量方案（1小时）

```
1. 设计配乐需求表
2. 编写提示词
3. 使用API批量生成
4. 质量检查
5. 分类归档
6. 备用
```

---

## 十、配乐提示词速查

### 10.1 情绪速查

| 情绪 | 英文提示词 |
|------|------------|
| 甜蜜 | sweet, romantic, tender, warm |
| 悲伤 | sad, melancholic, sorrowful, heartbreaking |
| 愤怒 | angry, aggressive, fierce, intense |
| 紧张 | tense, suspenseful, anxious, uneasy |
| 震惊 | shocking, dramatic, impactful, sudden |
| 温馨 | cozy, warm, gentle, comforting |
| 激动 | exciting, thrilling, energetic, euphoric |
| 怀旧 | nostalgic, reminiscent, vintage, retro |

### 10.2 场景速查

| 场景 | 英文提示词 |
|------|------------|
| 恋爱 | love, romance, couple, date |
| 分手 | breakup, farewell, goodbye, departure |
| 追逐 | chase, pursuit, escape, run |
| 战斗 | battle, fight, combat, conflict |
| 日常 | daily life, routine, casual, normal |
| 回忆 | flashback, memory, past, reminisce |
| 高潮 | climax, peak, turning point, revelation |
| 结局 | ending, finale, conclusion, resolution |

### 10.3 乐器速查

| 乐器 | 英文提示词 |
|------|------------|
| 钢琴 | piano, keys, grand piano |
| 吉他 | guitar, acoustic guitar, electric guitar |
| 弦乐 | strings, violin, cello, orchestral |
| 鼓 | drums, percussion, beat |
| 合成器 | synth, synthesizer, electronic |
| 管乐 | brass, trumpet, horn |
| 古筝 | guzheng, chinese zither |
| 笛子 | flute, bamboo flute, dizi |
