# 全帧派 · 短剧工厂 (quanzhenpai-studio)

AI驱动的影视全流程创作桌面工具。基于 Toonflow + OSC + GUOCanvas + 全帧派引擎 四系统精华融合。

## 技术栈
- 桌面框架: Electron
- 后端: Express.js + Socket.IO + SQLite (Knex ORM)
- 前端: React 18 + Three.js + ReactFlow
- AI: Vercel AI SDK (OpenAI/Anthropic/DeepSeek/Google/Qwen/智谱)
- 3D: Three.js + GLTF/FBX Loader

## 核心命令
- npm run dev       # 后端开发模式 (nodemon + tsx)
- npm run dev:gui   # Electron 联调
- npm run build     # 生产构建
- npm run dist:win  # Windows 打包
- npm run lint      # 类型检查

## 目录结构
src/
├── agents/           # Agent 系统 (scriptAgent + productionAgent)
├── features/
│   ├── quanzhenpai/  # 全帧派分镜引擎 (15列表格 + 验证器)
│   ├── canvas/       # 节点画布 (ReactFlow)
│   ├── director3d/   # 3D 导演台 (Three.js + 5000+资产)
│   ├── video/        # 视频编辑器
│   └── audio/        # 音频编辑器
├── routes/           # Express 路由 (80+ API)
├── stores/           # Zustand 状态管理
└── utils/            # 工具函数

data/
├── skills/           # Agent 技能库 (170+ Toonflow + 65 全帧派)
└── models/           # 本地模型 (all-MiniLM-L6-v2)

public/
└── guo-3d-assets/    # 3D 资产库 (962 files, 76MB)
    ├── guo-scene-presets-200/
    ├── guo-mannequin-models/
    ├── guo-skeleton-models/
    └── guo-mounted-props-200/

## 代码规范
- TypeScript strict 模式
- 禁止 any (用 unknown + 类型守卫)
- 分镜相关使用 quanzhenpai/grammar/types.ts 定义的类型
- Agent 技能文件放在 data/skills/ 下

## 全帧派分镜语法
- 15列分镜表: ShotSize/Angle/Movement/Transition/Emotion/Pacing
- 27种特殊镜头: crane(摇臂)/steadicam/dolly/tracking/whip_pan/dutch_angle/pov...
- 4层声音: 对白(P1) > 音效(P2) > 音乐(P3) > 环境音(P4)
- 验证器: 180°轴线/动作匹配/情绪递进/时间连续
