# 特效合成指南

## 一、AI视频特效

### 1.1 常用AI特效

| 特效 | 工具 | 用途 |
|------|------|------|
| 超分辨率 | Real-ESRGAN/Topaz | 提升画质 |
| 插帧 | RIFE/Topaz | 提升流畅度 |
| 视频稳定 | DaVinci/Premiere | 修复抖动 |
| 降噪 | DaVinci/Neat Video | 去除噪点 |
| 背景替换 | Stable Diffusion | 更换场景 |
| 人脸修复 | GFPGAN/CodeFormer | 修复人脸 |

### 1.2 工具选择

```
免费方案：
- Real-ESRGAN（超分）
- RIFE（插帧）
- GFPGAN（人脸修复）

付费方案：
- Topaz Video AI（综合）
- DaVinci Resolve（专业）
- Premiere Pro（综合）
```

---

## 二、视频拼接

### 2.1 拼接方法

**FFmpeg拼接：**
```bash
# 创建文件列表
echo "file 'video1.mp4'" > list.txt
echo "file 'video2.mp4'" >> list.txt
echo "file 'video3.mp4'" >> list.txt

# 拼接
ffmpeg -f concat -safe 0 -i list.txt -c copy output.mp4
```

**DaVinci拼接：**
```
1. 导入所有视频
2. 拖入时间线
3. 调整顺序
4. 添加转场
5. 导出
```

### 2.2 转场效果

| 转场 | 效果 | 适用 |
|------|------|------|
| 硬切 | 直接切换 | 通用 |
| 溶解 | 柔和过渡 | 时间/空间转换 |
| 淡入淡出 | 渐变 | 开场/结尾 |
| 闪白 | 震撼 | 回忆/震惊 |
| 闪黑 | 压抑 | 悲伤/结束 |

### 2.3 转场时间

```
硬切：0帧（瞬间）
溶解：0.5-1秒
淡入淡出：1-2秒
闪白：0.3-0.5秒
闪黑：0.3-0.5秒
```

---

## 三、字幕设计

### 3.1 字幕规范

```
字体：思源黑体/苹方
字号：视频高度的4-5%
位置：底部安全区
颜色：白色
描边：黑色2px
背景：半透明黑色（可选）
```

### 3.2 字幕动效

| 动效 | 效果 | 适用 |
|------|------|------|
| 淡入淡出 | 自然 | 通用 |
| 打字机 | 悬疑 | 独白/悬念 |
| 弹幕式 | 活泼 | 喜剧/吐槽 |
| 故障风 | 科幻 | 科幻/紧张 |
| 手写体 | 文艺 | 回忆/文艺 |

### 3.3 字幕生成

**Whisper自动生成：**
```python
import whisper

model = whisper.load_model("base")
result = model.transcribe("video.mp4", language="zh")

for segment in result["segments"]:
    print(f"{segment['start']:.2f} - {segment['end']:.2f}: {segment['text']}")
```

---

## 四、画面修复

### 4.1 常见问题

| 问题 | 原因 | 解决方案 |
|------|------|----------|
| 模糊 | 分辨率低 | 超分辨率 |
| 抖动 | 手持拍摄 | 视频稳定 |
| 噪点 | 暗光拍摄 | 降噪处理 |
| 人脸变形 | AI生成 | 人脸修复 |
| 色偏 | 白平衡错误 | 调色校正 |

### 4.2 修复工具

```
超分辨率：
- Real-ESRGAN（免费）
- Topaz Video AI（付费）

视频稳定：
- DaVinci Stabilizer（免费）
- Premiere Warp Stabilizer（付费）

降噪：
- DaVinci NR（免费）
- Neat Video（付费）

人脸修复：
- GFPGAN（免费）
- CodeFormer（免费）
```

---

## 五、特效工作流

### 5.1 AI视频增强流程

```
原始视频（720p/24fps）
    ↓
[1. 稳定] → 修复抖动
    ↓
[2. 降噪] → 去除噪点
    ↓
[3. 超分] → 720p → 1080p
    ↓
[4. 插帧] → 24fps → 30fps
    ↓
[5. 调色] → 统一色调
    ↓
[6. 字幕] → 添加字幕
    ↓
最终视频（1080p/30fps）
```

### 5.2 批量处理脚本

```bash
#!/bin/bash

# 批量超分
for f in *.mp4; do
  python realesrgan-ncnn-vulkan -i "$f" -o "output/$f" -n realesrgan-x4plus
done

# 批量插帧
for f in *.mp4; do
  python inference_video.py --exp=2 --video="$f"
done

# 批量转码
for f in *.mp4; do
  ffmpeg -i "$f" -c:v libx264 -crf 18 -preset slow "output/$f"
done
```

---

## 六、特效检查清单

### 6.1 质量检查

```
□ 超分后是否清晰？
□ 插帧后是否流畅？
□ 稳定后是否无抖动？
□ 降噪后是否无噪点？
□ 人脸是否正常？
□ 色彩是否统一？
```

### 6.2 兼容检查

```
□ 分辨率是否达标？
□ 帧率是否正确？
□ 编码格式是否兼容？
□ 文件大小是否合适？
```
