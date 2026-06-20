# 全帧派创作引擎 (Quanzhenpai Creative Engine)

> **AI短剧创作桌面工具 — 剧本→分镜→AI生成→3D调度→剪辑→导出**

全帧派创作引擎是一款基于 Electron + React + TypeScript 的专业AI短剧创作工具，整合了小说改编、分镜设计、AI内容生成、3D场面调度和视频编辑的全链路工作流。

## 核心特性

| 模块 | 能力 |
|------|------|
| 📝 **剧本生成** | 小说→剧本AI改编，支持11种艺术风格+12种故事类型 |
| 🎬 **分镜设计** | 15列专业分镜表 + 4大自动验证器(180°轴线/动作匹配/情绪递进/时间连续) |
| 🤖 **AI生成** | 30+供应商(OpenAI/Anthropic/DeepSeek/Seedance2.0) + 一键成片 |
| 🎥 **视频编辑** | 多轨时间轴 + 调色(色轮/曲线/LUT) + 特效 + 绿幕抠图 + 字幕 |
| 🎭 **3D导演台** | 76MB精选3D资产(人体模型+骨骼+5000+场景) + 灯光预设 |
| 🖼️ **节点画布** | ReactFlow 14种节点 + 智能Edge路由 + 画布↔AI联动 |
| 🔊 **音频处理** | 4层声音设计 + 多轨混音 + 均衡器/压缩/混响 + 节拍检测 |
| 📚 **知识库** | 68个影视专业知识文件 + 170个创作技能 |

## 技术架构

```
React 18 + TypeScript + Vite
Express.js + Socket.IO + SQLite (Knex)
Electron 桌面打包 (Windows/macOS/Linux)
Three.js 3D引擎 + WebCodecs + WebGPU
Vercel AI SDK (30+ 供应商统一调用)
```

## 快速开始

```bash
git clone https://github.com/baiyi878290/quanzhenpai-creative-engine.git
cd quanzhenpai-creative-engine
yarn install
yarn dev              # Express后端开发
yarn dev:gui          # Electron桌面端开发
yarn dist:win         # 打包Windows .exe
```

## 项目结构

```
src/
├── agents/           # AI Agent (scriptAgent + productionAgent)
├── features/
│   ├── canvas/       # ReactFlow节点画布 (14种节点)
│   ├── editor/       # 视频编辑器 (时间轴+调色+特效)
│   ├── director3d/   # 3D导演台 (Three.js + GUOCanvas资产)
│   └── quanzhenpai/  # 全帧派专业引擎
│       ├── grammar/  # 分镜语法v1.9 (类型+验证器)
│       ├── engine/   # Agent注入+HTTP桥接+画布桥接+资产加载
│       └── panels/   # UI面板 (验证器+引擎状态+编辑器Shell)
├── routes/           # 80+ API路由
├── stores/           # Zustand状态管理
└── socket/           # WebSocket实时通信

packages/
├── core/             # 视频/音频/时间轴核心引擎 (Openreel)
├── ui/               # 通用UI组件库
└── image-core/       # 图片处理引擎

data/skills/          # 创作技能库 (170个技能 + 68个知识文件)
public/guo-3d-assets/ # 3D资产库 (76MB精选)
```

## 许可证

Apache License 2.0
