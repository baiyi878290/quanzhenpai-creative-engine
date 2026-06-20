# AI配音指南

## 一、AI配音工具对比

### 1.1 主流工具

| 工具 | 特点 | 价格 | 适用场景 |
|------|------|------|----------|
| ElevenLabs | 最高质量、情感丰富、多语言 | $5-99/月 | 专业配音、角色对白 |
| Azure TTS | 微软、稳定、企业级 | $16/百万字符 | 批量配音、旁白 |
| Google TTS | 免费额度大、质量一般 | 免费/$4/百万字符 | 原型、测试 |
| Fish Audio | 开源、中文优秀 | 免费/付费 | 中文短剧 |
| GPT-SoVITS | 开源、声音克隆 | 免费 | 声音定制 |
| Bark | 开源、支持笑声/叹息 | 免费 | 情感配音 |

### 1.2 选择建议

```
预算充足 + 高质量 → ElevenLabs
中文短剧 + 声音克隆 → Fish Audio / GPT-SoVITS
企业批量 + 稳定性 → Azure TTS
免费 + 快速原型 → Bark / Google TTS
```

---

## 二、ElevenLabs使用指南

### 2.1 核心功能

```
1. 文字转语音（TTS）
2. 声音克隆（Voice Cloning）
3. 多语言支持（29种语言）
4. 情感控制（情感标签）
5. API接口（批量调用）
```

### 2.2 声音选择

**预设声音库：**
| 声音 | 性别 | 风格 | 适用 |
|------|------|------|------|
| Adam | 男 | 深沉、成熟 | 霸总、反派 |
| Antoni | 男 | 温暖、亲切 | 暖男、朋友 |
| Bella | 女 | 清脆、活泼 | 少女、女主 |
| Elli | 女 | 温柔、知性 | 职场女性 |
| Josh | 男 | 青春、阳光 | 学生、年轻人 |
| Rachel | 女 | 成熟、专业 | 女强人、律师 |

**中文推荐声音：**
```
女声：
- Bella（通用少女）
- Elli（温柔知性）
- Charlotte（成熟女性）

男声：
- Adam（深沉霸总）
- Antoni（温暖男主）
- Josh（青春学生）
```

### 2.3 情感控制

**情感标签：**
```
[neutral] - 平静
[happy] - 开心
[sad] - 悲伤
[angry] - 愤怒
[afraid] - 恐惧
[disgusted] - 厌恶
[surprised] - 惊讶
[excited] - 兴奋
[whispering] - 耳语
```

**使用示例：**
```
原文：你为什么要这样做？

情感版本：
[happy] 你为什么要这样做？→ 开心的疑问
[sad] 你为什么要这样做？→ 难过的质问
[angry] 你为什么要这样做？→ 愤怒的指责
[whispering] 你为什么要这样做？→ 低声的呢喃
```

### 2.4 API调用

**Python示例：**
```python
import requests

API_KEY = "your_api_key"
VOICE_ID = "21m00Tcm4TlvDq8ikWAM"  # Bella

url = f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"

headers = {
    "Accept": "audio/mpeg",
    "xi-api-key": API_KEY,
    "Content-Type": "application/json"
}

data = {
    "text": "你好，欢迎来到全帧派影视制作系统。",
    "model_id": "eleven_multilingual_v2",
    "voice_settings": {
        "stability": 0.5,
        "similarity_boost": 0.75
    }
}

response = requests.post(url, json=data, headers=headers)

with open("output.mp3", "wb") as f:
    f.write(response.content)
```

**参数说明：**
```
stability: 0-1, 越高越稳定，但可能单调
similarity_boost: 0-1, 越高越像原声
style: 0-1, 越高情感越强
```

### 2.5 声音克隆

**步骤：**
1. 准备3-5分钟清晰音频（无背景音）
2. 上传到ElevenLabs
3. 等待训练（约5分钟）
4. 使用克隆声音生成

**音频要求：**
```
- 时长：3-5分钟
- 格式：MP3/WAV
- 采样率：44.1kHz+
- 背景：无噪音
- 情感：自然对话
```

---

## 三、Azure TTS使用指南

### 3.1 核心优势

```
- 稳定性高，企业级服务
- 支持SSML精细控制
- 批量处理能力强
- 价格透明，按字符计费
```

### 3.2 中文声音库

**女声：**
| 声音 | 风格 | 适用 |
|------|------|------|
| zh-CN-XiaoxiaoNeural | 活泼甜美 | 少女、女主 |
| zh-CN-XiaoyiNeural | 温柔知性 | 职场女性 |
| zh-CN-XiaochenNeural | 温暖亲切 | 母亲、姐姐 |
| zh-CN-XiaohanNeural | 专业冷静 | 女强人 |
| zh-CN-XiaomoNeural | 甜美可爱 | 学生、妹妹 |
| zh-CN-XiaoruiNeural | 成熟稳重 | 长辈、老师 |
| zh-CN-XiaoshuangNeural | 稚嫩童声 | 儿童 |
| zh-CN-XiaoxuanNeural | 优雅大气 | 主持人 |

**男声：**
| 声音 | 风格 | 适用 |
|------|------|------|
| zh-CN-YunxiNeural | 阳光帅气 | 男主、学生 |
| zh-CN-YunjianNeural | 沉稳有力 | 霸总、领导 |
| zh-CN-YunxiaNeural | 稚嫩童声 | 男孩 |
| zh-CN-YunyangNeural | 专业标准 | 新闻、旁白 |

### 3.3 SSML控制

**基础结构：**
```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="zh-CN">
    <voice name="zh-CN-XiaoxiaoNeural">
        你好，欢迎来到全帧派。
    </voice>
</speak>
```

**情感控制：**
```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="zh-CN">
    <voice name="zh-CN-XiaoxiaoNeural" style="cheerful">
        今天天气真好！
    </voice>
</speak>
```

**可用情感：**
```
cheerful - 开心
sad - 悲伤
angry - 愤怒
fearful - 恐惧
disgruntled - 不满
serious - 严肃
affectionate - 深情
gentle - 温柔
embarrassed - 尴尬
```

**语速控制：**
```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="zh-CN">
    <voice name="zh-CN-YunjianNeural">
        <prosody rate="+20%" pitch="+5st">
            这句话说得更快，音调更高。
        </prosody>
    </voice>
</speak>
```

**停顿控制：**
```xml
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="zh-CN">
    <voice name="zh-CN-XiaoxiaoNeural">
        我想告诉你一件事<break time="500ms"/>我怀孕了。
    </voice>
</speak>
```

### 3.4 API调用

**Python示例：**
```python
import azure.cognitiveservices.speech as speechsdk

speech_config = speechsdk.SpeechConfig(
    subscription="your_subscription_key",
    region="eastus"
)

audio_config = speechsdk.audio.AudioOutputConfig(filename="output.wav")
speech_config.speech_synthesis_voice_name = "zh-CN-XiaoxiaoNeural"

ssml = """
<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="zh-CN">
    <voice name="zh-CN-XiaoxiaoNeural" style="cheerful">
        你好，欢迎来到全帧派影视制作系统！
    </voice>
</speak>
"""

synthesizer = speechsdk.SpeechSynthesizer(
    speech_config=speech_config,
    audio_config=audio_config
)

synthesizer.speak_ssml_async(ssml).get()
```

---

## 四、Fish Audio（中文推荐）

### 4.1 核心优势

```
- 中文效果最佳
- 支持声音克隆
- 开源可部署
- API友好
```

### 4.2 使用流程

```
1. 注册Fish Audio账号
2. 上传参考音频（声音克隆）
3. 输入文字
4. 生成语音
5. 下载音频
```

### 4.3 声音克隆

**音频要求：**
```
- 时长：10秒-5分钟
- 格式：MP3/WAV/FLAC
- 内容：清晰人声，无背景音乐
- 情感：自然对话
```

**API调用：**
```python
import requests

url = "https://api.fish.audio/v1/tts"

data = {
    "text": "你好，欢迎来到全帧派。",
    "reference_id": "your_voice_id",
    "format": "mp3"
}

response = requests.post(url, json=data)

with open("output.mp3", "wb") as f:
    f.write(response.content)
```

---

## 五、GPT-SoVITS（开源声音克隆）

### 5.1 核心优势

```
- 完全开源免费
- 声音克隆效果好
- 支持本地部署
- 社区活跃
```

### 5.2 使用流程

```
1. 安装GPT-SoVITS
2. 准备参考音频（5秒+）
3. 输入参考文本
4. 输入目标文本
5. 生成语音
```

### 5.3 参考音频要求

```
- 时长：5-30秒
- 内容：与参考文本匹配
- 质量：清晰、无噪音
- 格式：WAV/MP3
```

### 5.4 本地部署

```bash
# 克隆仓库
git clone https://github.com/RVC-Boss/GPT-SoVITS.git

# 安装依赖
cd GPT-SoVITS
pip install -r requirements.txt

# 启动WebUI
python webui.py
```

---

## 六、短剧配音工作流

### 6.1 完整流程

```
分镜脚本
    ↓
提取对白
    ↓
情感标注
    ↓
选择声音
    ↓
生成语音
    ↓
时间轴对齐
    ↓
混音输出
```

### 6.2 对白提取格式

```markdown
## 第1集

### S001
- 角色：苏瑶
- 对白：你怎么来了？
- 情感：惊讶
- 时长：2s

### S002
- 角色：陆景深
- 对白：我想你了。
- 情感：深情
- 时长：2s
```

### 6.3 批量生成脚本

```python
import json
from elevenlabs import generate, save

# 加载分镜脚本
with open("script.json", "r", encoding="utf-8") as f:
    script = json.load(f)

# 角色声音映射
voice_map = {
    "苏瑶": "Bella",
    "陆景深": "Adam",
    "旁白": "Josh"
}

# 批量生成
for shot in script["shots"]:
    if shot.get("dialogue"):
        audio = generate(
            text=shot["dialogue"],
            voice=voice_map[shot["character"]],
            model="eleven_multilingual_v2"
        )
        save(audio, f"audio/{shot['id']}.mp3")
```

### 6.4 时间轴对齐

**使用FFmpeg对齐：**
```bash
# 将音频插入视频指定时间点
ffmpeg -i video.mp4 -i audio.mp3 \
  -filter_complex "[0:a][1:a]amix=inputs=2:duration=first" \
  -c:v copy output.mp4
```

**使用Whisper自动对齐：**
```python
import whisper

model = whisper.load_model("base")
result = model.transcribe("audio.mp3", language="zh")

for segment in result["segments"]:
    print(f"{segment['start']:.2f} - {segment['end']:.2f}: {segment['text']}")
```

---

## 七、配音质量优化

### 7.1 常见问题

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 语音不自然 | 语速/语调单一 | 调整情感标签 |
| 发音错误 | 多音字/专有名词 | 使用拼音标注 |
| 背景噪音 | 录音环境差 | 后期降噪 |
| 情感不对 | 情感标签错误 | 尝试不同情感 |
| 断句不自然 | 标点符号问题 | 调整文本格式 |

### 7.2 文本优化技巧

**多音字处理：**
```
原文：这个银行的行长很行
优化：这个银hang的行hang长很xing

原文：我得走了
优化：我dei走了
```

**情感强调：**
```
普通：我恨你
强调：我！恨！你！
强调：我...恨...你...
```

**停顿控制：**
```
无停顿：你为什么要这样做我想知道
有停顿：你为什么要这样做？我想知道。
更多停顿：你...为什么要这样做？我...想知道。
```

### 7.3 后期处理

**降噪：**
```bash
# FFmpeg降噪
ffmpeg -i input.mp3 -af "highpass=f=200,lowpass=f=3000" output.mp3

# Adobe Podcast降噪（在线）
# https://podcast.adobe.com/enhance
```

**音量标准化：**
```bash
# FFmpeg响度标准化
ffmpeg -i input.mp3 -af loudnorm=I=-16:LRA=11:TP=-1.5 output.mp3
```

**混音：**
```bash
# 多个音频混合
ffmpeg -i voice.mp3 -i bgm.mp3 -filter_complex \
  "[0:a]volume=1.0[voice];[1:a]volume=0.3[bgm];[voice][bgm]amix=inputs=2" \
  output.mp3
```

---

## 八、配音提示词模板

### 8.1 Seedance配音提示词

**文生视频+配音：**
```
[画面描述], 
character speaking with mouth movements,
cinematic, 9:16

配音文件：voice_S001.mp3
```

**图生视频+配音：**
```
Same person as reference,
speaking with natural mouth movements,
[表情变化], [场景],
cinematic, 9:16

配音文件：voice_S001.mp3
```

### 8.2 对口型提示词

**Sync Labs提示词：**
```
输入：
- 原始视频：video_S001.mp4
- 配音音频：voice_S001.mp3

参数：
- 模式：accurate
- 增强：true
```

---

## 九、成本估算

### 9.1 10集短剧配音成本

```
假设：
- 10集，每集3分钟
- 2个主要角色
- 每集20句对白，平均每句5秒
- 总对白：200句
- 总时长：1000秒 ≈ 17分钟

ElevenLabs：
- Starter ($5/月)：30,000字符/月
- Creator ($22/月)：100,000字符/月
- 估算：约$22-49/月

Azure TTS：
- $16/百万字符
- 估算：约$2-5

Fish Audio：
- 免费额度 + 付费
- 估算：约$5-10

GPT-SoVITS：
- 免费（本地部署）
- 估算：$0（需GPU）
```

### 9.2 推荐方案

```
预算充足 + 高质量 → ElevenLabs Creator ($22/月)
中文为主 + 性价比 → Fish Audio ($5-10)
免费 + 技术能力 → GPT-SoVITS (本地部署)
企业批量 + 稳定 → Azure TTS ($2-5)
```

---

## 十、快速上手

### 10.1 最快方案（5分钟）

```
1. 打开 https://elevenlabs.io
2. 注册账号
3. 选择声音（Bella/Adam）
4. 输入对白
5. 点击生成
6. 下载音频
```

### 10.2 专业方案（1小时）

```
1. 注册ElevenLabs/ Fish Audio
2. 克隆角色声音（上传参考音频）
3. 准备分镜脚本对白
4. 批量生成配音
5. 使用FFmpeg/剪映对齐
6. 混音输出
```

### 10.3 批量方案（半天）

```
1. 部署GPT-SoVITS本地服务
2. 准备角色声音样本
3. 编写批量生成脚本
4. 自动化处理
5. 质量检查
6. 输出成品
```
