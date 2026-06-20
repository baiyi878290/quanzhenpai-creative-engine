# FFmpeg实战指南

## 一、FFmpeg基础

### 1.1 什么是FFmpeg

```
FFmpeg = 开源音视频处理工具

功能：
- 格式转换
- 编码/解码
- 剪辑/拼接
- 滤镜/特效
- 音频处理
```

### 1.2 安装

```bash
# Windows
# 下载：https://ffmpeg.org/download.html
# 解压后添加到PATH

# macOS
brew install ffmpeg

# Linux
sudo apt install ffmpeg
```

---

## 二、格式转换

### 2.1 基础转换

```bash
# MP4转MOV
ffmpeg -i input.mp4 output.mov

# MP4转AVI
ffmpeg -i input.mp4 output.avi

# MP4转WebM
ffmpeg -i input.mp4 output.webm
```

### 2.2 编码转换

```bash
# H.264编码
ffmpeg -i input.mp4 -c:v libx264 output.mp4

# H.265编码
ffmpeg -i input.mp4 -c:v libx265 output.mp4

# VP9编码
ffmpeg -i input.mp4 -c:v libvpx-vp9 output.webm
```

### 2.3 分辨率转换

```bash
# 转换为1080p
ffmpeg -i input.mp4 -vf "scale=1920:1080" output.mp4

# 转换为720p
ffmpeg -i input.mp4 -vf "scale=1280:720" output.mp4

# 转换为竖屏9:16
ffmpeg -i input.mp4 -vf "scale=1080:1920" output.mp4
```

### 2.4 帧率转换

```bash
# 转换为30fps
ffmpeg -i input.mp4 -r 30 output.mp4

# 转换为24fps
ffmpeg -i input.mp4 -r 24 output.mp4

# 转换为60fps（插帧）
ffmpeg -i input.mp4 -r 60 -vf "minterpolate=fps=60:mi_mode=mci" output.mp4
```

---

## 三、剪辑操作

### 3.1 截取片段

```bash
# 截取00:00:10到00:00:20
ffmpeg -i input.mp4 -ss 00:00:10 -to 00:00:20 -c copy output.mp4

# 截取前10秒
ffmpeg -i input.mp4 -t 10 -c copy output.mp4

# 从10秒开始截取5秒
ffmpeg -i input.mp4 -ss 10 -t 5 -c copy output.mp4
```

### 3.2 拼接视频

```bash
# 创建文件列表
echo "file 'video1.mp4'" > list.txt
echo "file 'video2.mp4'" >> list.txt
echo "file 'video3.mp4'" >> list.txt

# 拼接
ffmpeg -f concat -safe 0 -i list.txt -c copy output.mp4
```

### 3.3 提取音频

```bash
# 提取音频为MP3
ffmpeg -i input.mp4 -q:a 0 output.mp3

# 提取音频为WAV
ffmpeg -i input.mp4 output.wav

# 提取音频为AAC
ffmpeg -i input.mp4 -vn -c:a copy output.aac
```

### 3.4 提取帧

```bash
# 提取第一帧
ffmpeg -i input.mp4 -vframes 1 output.png

# 每秒提取一帧
ffmpeg -i input.mp4 -vf "fps=1" output_%03d.png

# 提取第10帧
ffmpeg -i input.mp4 -vf "select=eq(n\,9)" -vframes 1 output.png
```

---

## 四、音频处理

### 4.1 音量调整

```bash
# 音量加倍
ffmpeg -i input.mp4 -af "volume=2" output.mp4

# 音量减半
ffmpeg -i input.mp4 -af "volume=0.5" output.mp4

# 音量标准化
ffmpeg -i input.mp4 -af "loudnorm=I=-16:LRA=11:TP=-1.5" output.mp4
```

### 4.2 音频混合

```bash
# 混合视频音频和外部音频
ffmpeg -i video.mp4 -i audio.mp3 -filter_complex "[0:a][1:a]amix=inputs=2" output.mp4

# 调整音频音量后混合
ffmpeg -i video.mp4 -i audio.mp3 -filter_complex "[0:a]volume=1.0[v];[1:a]volume=0.3[a];[v][a]amix=inputs=2" output.mp4
```

### 4.3 音频替换

```bash
# 替换视频音频
ffmpeg -i video.mp4 -i audio.mp3 -c:v copy -map 0:v:0 -map 1:a:0 output.mp4

# 静音视频
ffmpeg -i input.mp4 -an output.mp4
```

---

## 五、滤镜效果

### 5.1 画面滤镜

```bash
# 锐化
ffmpeg -i input.mp4 -vf "unsharp=5:5:1.0" output.mp4

# 模糊
ffmpeg -i input.mp4 -vf "boxblur=5:5" output.mp4

# 调整亮度
ffmpeg -i input.mp4 -vf "eq=brightness=0.1" output.mp4

# 调整对比度
ffmpeg -i input.mp4 -vf "eq=contrast=1.5" output.mp4

# 调整饱和度
ffmpeg -i input.mp4 -vf "eq=saturation=1.5" output.mp4
```

### 5.2 转场滤镜

```bash
# 淡入淡出
ffmpeg -i input.mp4 -vf "fade=in:0:30,fade=out:90:30" output.mp4

# 淡入
ffmpeg -i input.mp4 -vf "fade=in:0:30" output.mp4

# 淡出
ffmpeg -i input.mp4 -vf "fade=out:90:30" output.mp4
```

### 5.3 特效滤镜

```bash
# 镜像
ffmpeg -i input.mp4 -vf "hflip" output.mp4

# 上下翻转
ffmpeg -i input.mp4 -vf "vflip" output.mp4

# 旋转90度
ffmpeg -i input.mp4 -vf "transpose=1" output.mp4

# 裁剪
ffmpeg -i input.mp4 -vf "crop=640:480:100:100" output.mp4
```

---

## 六、常用命令速查

### 6.1 格式转换速查

| 命令 | 说明 |
|------|------|
| `ffmpeg -i input.mp4 output.mov` | MP4转MOV |
| `ffmpeg -i input.mp4 -c:v libx264 output.mp4` | H.264编码 |
| `ffmpeg -i input.mp4 -vf "scale=1920:1080" output.mp4` | 转1080p |
| `ffmpeg -i input.mp4 -r 30 output.mp4` | 转30fps |

### 6.2 剪辑速查

| 命令 | 说明 |
|------|------|
| `ffmpeg -i input.mp4 -ss 10 -t 5 -c copy output.mp4` | 截取片段 |
| `ffmpeg -f concat -i list.txt -c copy output.mp4` | 拼接视频 |
| `ffmpeg -i input.mp4 -q:a 0 output.mp3` | 提取音频 |
| `ffmpeg -i input.mp4 -vframes 1 output.png` | 提取帧 |

### 6.3 音频速查

| 命令 | 说明 |
|------|------|
| `ffmpeg -i input.mp4 -af "volume=2" output.mp4` | 音量加倍 |
| `ffmpeg -i input.mp4 -af "loudnorm=I=-16" output.mp4` | 响度标准化 |
| `ffmpeg -i video.mp4 -i audio.mp3 -filter_complex "[0:a][1:a]amix=inputs=2" output.mp4` | 混合音频 |
| `ffmpeg -i input.mp4 -an output.mp4` | 静音视频 |

### 6.4 滤镜速查

| 命令 | 说明 |
|------|------|
| `ffmpeg -i input.mp4 -vf "unsharp=5:5:1.0" output.mp4` | 锐化 |
| `ffmpeg -i input.mp4 -vf "fade=in:0:30" output.mp4` | 淡入 |
| `ffmpeg -i input.mp4 -vf "hflip" output.mp4` | 镜像 |
| `ffmpeg -i input.mp4 -vf "crop=640:480:100:100" output.mp4` | 裁剪 |

---

## 七、实战脚本

### 7.1 批量转码脚本

```bash
#!/bin/bash

# 批量转码为H.264
for f in *.mp4; do
  ffmpeg -i "$f" -c:v libx264 -crf 18 -preset slow "output/$f"
done
```

### 7.2 批量截图脚本

```bash
#!/bin/bash

# 每个视频截取第一帧
for f in *.mp4; do
  ffmpeg -i "$f" -vframes 1 "screenshots/${f%.mp4}.png"
done
```

### 7.3 批量提取音频脚本

```bash
#!/bin/bash

# 提取所有视频的音频
for f in *.mp4; do
  ffmpeg -i "$f" -q:a 0 "audio/${f%.mp4}.mp3"
done
```

### 7.4 竖屏转换脚本

```bash
#!/bin/bash

# 横屏转竖屏（添加黑边）
for f in *.mp4; do
  ffmpeg -i "$f" -vf "scale=1080:1920:force_original_aspect_ratio=decrease,pad=1080:1920:(ow-iw)/2:(oh-ih)/2" "vertical/$f"
done
```
