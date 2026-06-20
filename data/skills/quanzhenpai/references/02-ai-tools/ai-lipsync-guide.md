# AI对口型指南

## 一、AI对口型工具对比

### 1.1 主流工具

| 工具 | 特点 | 价格 | 适用场景 |
|------|------|------|----------|
| Sync Labs | 最高质量、API稳定 | $49-299/月 | 专业制作、批量处理 |
| Wav2Lip | 开源免费、效果好 | 免费 | 本地部署、快速处理 |
| D-ID | 数字人+对口型 | $5.9-49/月 | 数字人视频 |
| HeyGen | 数字人+克隆 | $24-180/月 | 数字人营销视频 |
| SadTalker | 开源、支持表情 | 免费 | 本地部署、表情驱动 |
| VideoReTalking | 开源、效果优秀 | 免费 | 本地部署 |

### 1.2 选择建议

```
最高质量 + API → Sync Labs
免费 + 本地部署 → Wav2Lip / VideoReTalking
数字人 + 对口型 → D-ID / HeyGen
表情驱动 + 对口型 → SadTalker
```

---

## 二、Sync Labs使用指南

### 2.1 核心功能

```
1. 视频对口型（Lip Sync）
2. 人脸检测（Face Detection）
3. 多语言支持
4. 批量处理
5. API接口
```

### 2.2 使用流程

```
1. 准备原始视频（有人脸）
2. 准备目标音频（配音）
3. 上传到Sync Labs
4. 选择处理模式
5. 生成对口型视频
6. 下载成品
```

### 2.3 处理模式

| 模式 | 特点 | 适用 |
|------|------|------|
| Accurate | 最精确，速度慢 | 专业制作 |
| Fast | 快速，质量稍低 | 批量处理 |
| Enhanced | 增强画质 | 低清视频 |

### 2.4 API调用

**Python示例：**
```python
import requests

API_KEY = "your_api_key"

# 上传视频
video_url = upload_video("input_video.mp4")

# 上传音频
audio_url = upload_audio("voice.mp3")

# 创建任务
response = requests.post(
    "https://api.synclabs.so/v1/lipsync",
    headers={"Authorization": f"Bearer {API_KEY}"},
    json={
        "video_url": video_url,
        "audio_url": audio_url,
        "mode": "accurate",
        "enhance": True
    }
)

task_id = response.json()["task_id"]

# 查询结果
result = requests.get(
    f"https://api.synclabs.so/v1/tasks/{task_id}",
    headers={"Authorization": f"Bearer {API_KEY}"}
).json()

print(f"状态: {result['status']}")
print(f"输出: {result['output_url']}")
```

### 2.5 质量优化

**输入视频要求：**
```
- 分辨率：≥480p
- 帧率：≥24fps
- 人脸：清晰、正面、无遮挡
- 光线：均匀、无强烈阴影
- 时长：与音频匹配
```

**输入音频要求：**
```
- 格式：MP3/WAV
- 采样率：44.1kHz+
- 内容：清晰人声
- 噪音：尽量无背景音
```

---

## 三、Wav2Lip（开源方案）

### 3.1 核心优势

```
- 完全开源免费
- 效果稳定
- 支持本地部署
- 社区活跃
```

### 3.2 安装部署

```bash
# 克隆仓库
git clone https://github.com/Rudrabha/Wav2Lip.git
cd Wav2Lip

# 安装依赖
pip install -r requirements.txt

# 下载预训练模型
# wav2lip_gan.pth 放到 checkpoints/ 目录
```

### 3.3 使用方法

**基础用法：**
```bash
python inference.py \
  --checkpoint_path checkpoints/wav2lip_gan.pth \
  --face input_video.mp4 \
  --audio voice.mp3 \
  --outfile output.mp4
```

**参数说明：**
```
--face: 输入视频路径
--audio: 输入音频路径
--outfile: 输出路径
--checkpoint_path: 模型路径
--pads: 人脸检测边距 (top, bottom, left, right)
--resize_factor: 缩放因子
--nosmooth: 禁用平滑
```

### 3.4 批量处理脚本

```python
import os
import subprocess

# 视频和音频列表
pairs = [
    ("video_S001.mp4", "voice_S001.mp3", "output_S001.mp4"),
    ("video_S002.mp4", "voice_S002.mp3", "output_S002.mp4"),
    ("video_S003.mp4", "voice_S003.mp3", "output_S003.mp4"),
]

for video, audio, output in pairs:
    cmd = f"""
    python inference.py \
      --checkpoint_path checkpoints/wav2lip_gan.pth \
      --face {video} \
      --audio {audio} \
      --outfile {output} \
      --pads 0 10 0 0 \
      --resize_factor 1
    """
    
    subprocess.run(cmd, shell=True)
    print(f"Completed: {output}")
```

### 3.5 质量优化技巧

**人脸检测优化：**
```bash
# 增加边距，避免裁切
--pads 0 20 10 10

# 使用更高质量的人脸检测
--face_det_batch_size 1
```

**画质优化：**
```bash
# 使用GAN模型（更清晰）
--checkpoint_path checkpoints/wav2lip_gan.pth

# 后处理增强
ffmpeg -i output.mp4 -vf "unsharp=5:5:1.0" enhanced.mp4
```

**平滑优化：**
```bash
# 启用平滑（默认）
# 禁用平滑（更精确但可能闪烁）
--nosmooth
```

---

## 四、VideoReTalking（推荐）

### 4.1 核心优势

```
- 效果优于Wav2Lip
- 支持表情控制
- 口型更自然
- 开源免费
```

### 4.2 安装部署

```bash
# 克隆仓库
git clone https://github.com/OpenTalker/video-retalking.git
cd video-retalking

# 安装依赖
pip install -r requirements.txt

# 下载预训练模型
# 模型文件放到 checkpoints/ 目录
```

### 4.3 使用方法

```bash
python inference.py \
  --face input_video.mp4 \
  --audio voice.mp3 \
  --outfile output.mp4
```

### 4.4 与Wav2Lip对比

| 特性 | Wav2Lip | VideoReTalking |
|------|---------|----------------|
| 口型精度 | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 自然度 | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| 表情保持 | ⭐⭐ | ⭐⭐⭐⭐ |
| 画质损失 | 中等 | 较小 |
| 处理速度 | 快 | 中等 |
| 部署难度 | 简单 | 中等 |

---

## 五、SadTalker（表情驱动）

### 5.1 核心优势

```
- 支持表情驱动
- 头部运动自然
- 开源免费
- WebUI友好
```

### 5.2 使用场景

```
1. 静态照片 → 说话视频
2. 视频对口型 + 表情控制
3. 头部运动控制
```

### 5.3 安装部署

```bash
# 克隆仓库
git clone https://github.com/OpenTalker/SadTalker.git
cd SadTalker

# 安装依赖
pip install -r requirements.txt

# 下载模型
bash scripts/download_models.sh

# 启动WebUI
python app.py
```

### 5.4 使用方法

**WebUI方式：**
```
1. 上传源图片/视频
2. 上传驱动音频
3. 调整参数
4. 点击生成
```

**命令行方式：**
```bash
python inference.py \
  --driven_audio voice.mp3 \
  --source_image face.jpg \
  --expression_scale 1.0 \
  --still \
  --result_dir ./results
```

### 5.5 参数说明

```
--driven_audio: 驱动音频
--source_image: 源图片/视频
--expression_scale: 表情强度 (0.5-2.0)
--still: 静止模式（无头部运动）
--face_model_resolution: 人脸分辨率
--result_dir: 输出目录
```

---

## 六、D-ID / HeyGen（数字人方案）

### 6.1 D-ID

**特点：**
```
- 照片/视频生成数字人
- 支持多语言
- API友好
- 效果稳定
```

**使用流程：**
```
1. 上传照片/选择数字人
2. 输入文字/上传音频
3. 选择语言和声音
4. 生成视频
5. 下载
```

**API调用：**
```python
import requests

response = requests.post(
    "https://api.d-id.com/talks",
    headers={
        "Authorization": "Basic YOUR_API_KEY",
        "Content-Type": "application/json"
    },
    json={
        "source_url": "https://example.com/face.jpg",
        "script": {
            "type": "audio",
            "audio_url": "https://example.com/voice.mp3"
        }
    }
)

talk_id = response.json()["id"]
```

### 6.2 HeyGen

**特点：**
```
- 高质量数字人
- 声音克隆
- 批量生成
- 商业友好
```

**使用流程：**
```
1. 选择/创建数字人
2. 上传脚本/音频
3. 选择场景和背景
4. 生成视频
5. 下载/分享
```

---

## 七、短剧对口型工作流

### 7.1 完整流程

```
AI生成视频（无声音）
    ↓
AI配音生成
    ↓
AI对口型处理
    ↓
视频后处理
    ↓
混音输出
```

### 7.2 详细步骤

```markdown
## Step 1: 准备素材

### 原始视频
- 来源：Seedance 2.0 生成
- 要求：有人脸、清晰、正面
- 格式：MP4

### 配音音频
- 来源：ElevenLabs / Fish Audio
- 要求：清晰人声、无背景音
- 格式：MP3/WAV

## Step 2: 对口型处理

### 方案A：Sync Labs（推荐）
- 上传视频和音频
- 选择Accurate模式
- 下载结果

### 方案B：Wav2Lip（免费）
- 本地运行
- 使用GAN模型
- 调整边距参数

### 方案C：VideoReTalking（高质量）
- 本地运行
- 效果最好
- 处理时间较长

## Step 3: 后处理

### 画质增强
ffmpeg -i output.mp4 -vf "unsharp=5:5:1.0" enhanced.mp4

### 音量标准化
ffmpeg -i enhanced.mp4 -af loudnorm=I=-16 final.mp4
```

### 7.3 批量处理脚本

```python
import os
import json
from pathlib import Path

def process_lipsync(video_dir, audio_dir, output_dir):
    """批量对口型处理"""
    
    # 创建输出目录
    Path(output_dir).mkdir(parents=True, exist_ok=True)
    
    # 获取所有视频文件
    videos = sorted(Path(video_dir).glob("*.mp4"))
    
    for video in videos:
        # 对应的音频文件
        audio = Path(audio_dir) / f"{video.stem}.mp3"
        
        if not audio.exists():
            print(f"Audio not found: {audio}")
            continue
        
        output = Path(output_dir) / f"{video.stem}_lipsync.mp4"
        
        # 调用Wav2Lip
        cmd = f"""
        python inference.py \
          --checkpoint_path checkpoints/wav2lip_gan.pth \
          --face {video} \
          --audio {audio} \
          --outfile {output} \
          --pads 0 10 0 0
        """
        
        os.system(cmd)
        print(f"Processed: {output}")

# 使用
process_lipsync(
    video_dir="videos/",
    audio_dir="audios/",
    output_dir="outputs/"
)
```

---

## 八、质量优化

### 8.1 常见问题

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 口型不同步 | 音视频时长不匹配 | 调整音频时长 |
| 嘴部模糊 | 原始视频不清晰 | 使用高清视频 |
| 表情僵硬 | 模型限制 | 使用SadTalker |
| 画质下降 | 处理损失 | 后期增强 |
| 人脸检测失败 | 人脸太小/遮挡 | 调整视频构图 |

### 8.2 输入优化

**视频优化：**
```
1. 人脸占比：≥20%画面
2. 人脸角度：正面或微侧（<30°）
3. 光线：均匀、无强烈阴影
4. 遮挡：无口罩/手遮挡
5. 分辨率：≥480p
```

**音频优化：**
```
1. 清晰人声：无背景音乐
2. 无噪音：后期降噪
3. 音量适中：-12dB ~ -6dB
4. 时长匹配：与视频对齐
```

### 8.3 后处理增强

**画质增强：**
```bash
# 锐化
ffmpeg -i input.mp4 -vf "unsharp=5:5:1.0" sharp.mp4

# 降噪
ffmpeg -i input.mp4 -vf "hqdn3p" denoise.mp4

# 超分（需要额外工具）
# 使用Real-ESRGAN或Topaz Video AI
```

**音频增强：**
```bash
# 降噪
ffmpeg -i input.mp4 -af "highpass=f=200,lowpass=f=3000" clean.mp4

# 响度标准化
ffmpeg -i input.mp4 -af loudnorm=I=-16 final.mp4
```

---

## 九、成本估算

### 9.1 10集短剧对口型成本

```
假设：
- 10集，每集3分钟
- 2个主要角色，每集20句对白
- 总计：200个对口型片段

Sync Labs ($49/月)：
- 100分钟/月
- 足够10集
- 成本：$49

Wav2Lip（免费）：
- 本地部署
- 无限制
- 成本：$0（需GPU）

VideoReTalking（免费）：
- 本地部署
- 无限制
- 成本：$0（需GPU）

D-ID ($5.9/月)：
- 10分钟/月
- 不够10集
- 需要更高套餐
```

### 9.2 推荐方案

```
预算充足 + 最高质量 → Sync Labs ($49/月)
免费 + 本地部署 → VideoReTalking
快速原型 → Wav2Lip
数字人需求 → D-ID / HeyGen
```

---

## 十、快速上手

### 10.1 最快方案（5分钟）

```
1. 打开 https://synclabs.so
2. 注册账号
3. 上传视频
4. 上传音频
5. 点击生成
6. 下载结果
```

### 10.2 免费方案（30分钟）

```
1. 安装Wav2Lip
git clone https://github.com/Rudrabha/Wav2Lip.git
cd Wav2Lip
pip install -r requirements.txt

2. 下载模型
# wav2lip_gan.pth 放到 checkpoints/

3. 运行
python inference.py \
  --checkpoint_path checkpoints/wav2lip_gan.pth \
  --face video.mp4 \
  --audio voice.mp3 \
  --outfile output.mp4
```

### 10.3 高质量方案（1小时）

```
1. 安装VideoReTalking
git clone https://github.com/OpenTalker/video-retalking.git
cd video-retalking
pip install -r requirements.txt

2. 下载模型
bash scripts/download_models.sh

3. 运行
python inference.py \
  --face video.mp4 \
  --audio voice.mp3 \
  --outfile output.mp4

4. 后处理
ffmpeg -i output.mp4 -vf "unsharp=5:5:1.0" final.mp4
```

---

## 十一、对口型提示词

### 11.1 Seedance生成优化

**生成说话视频：**
```
[人物描述], speaking with natural mouth movements,
[表情], [场景],
cinematic, 9:16

Duration: [音频时长]
```

**避免口型问题：**
```
# 方法1：生成不说话的视频
[人物描述], closed mouth, thinking pose,
[场景], cinematic, 9:16

# 方法2：生成侧面/背影
[人物描述], side view, looking away,
[场景], cinematic, 9:16

# 方法3：使用画外音
[场景], no people visible,
[光影], cinematic, 9:16
画外音: "台词内容"
```

### 11.2 对口型前后对比

```
原始视频：Seedance生成（口型不对）
    ↓
配音音频：ElevenLabs生成
    ↓
对口型：Sync Labs / Wav2Lip
    ↓
最终视频：口型同步的成品
```
