// 全帧派 v1.9 分镜语法类型定义
// 15列分镜表 | 12模块 | 27特殊镜头 | 4层声音

// === 镜头大小 ===
export type ShotSize =
  | "extreme_wide"    // 大远景
  | "wide"            // 全景
  | "full"            // 全身
  | "medium_wide"     // 中全景
  | "medium"          // 中景
  | "medium_close"    // 近景
  | "close"           // 特写
  | "extreme_close";  // 大特写

// === 摄影角度 ===
export type CameraAngle =
  | "eye_level"       // 平视
  | "low_angle"       // 仰角
  | "high_angle"      // 俯角
  | "birds_eye"       // 鸟瞰
  | "worms_eye"       // 虫视
  | "dutch";          // 倾斜

// === 镜头运动 ===
export type CameraMovement =
  | "static"          // 固定
  | "push_in"         // 推
  | "pull_out"        // 拉
  | "pan_left"        // 左摇
  | "pan_right"       // 右摇
  | "tilt_up"         // 上摇
  | "tilt_down"       // 下摇
  | "track_left"      // 左移
  | "track_right"     // 右移
  | "dolly_in"        // 前推
  | "dolly_out"       // 后拉
  | "crane_up"        // 升
  | "crane_down"      // 降
  | "follow"          // 跟
  | "handheld"        // 手持
  | "steadicam"       // 斯坦尼康
  | "gimbal"          // 稳定器
  | "drone";          // 无人机

// === 27 种特殊镜头 ===
export type SpecialShot =
  | "crane"           // 摇臂
  | "steadicam"       // 斯坦尼康
  | "dolly"           // 轨道
  | "tracking"        // 跟拍
  | "whip_pan"        // 甩镜
  | "dutch_angle"     // 荷兰角
  | "pov"             // 主观镜头
  | "over_shoulder"   // 过肩
  | "establishing"    // 建立
  | "insert"          // 插入
  | "cutaway"         // 切出
  | "reaction"        // 反打
  | "aerial"          // 航拍
  | "underwater"      // 水下
  | "macro"           // 微距
  | "time_lapse"      // 延时
  | "slow_motion"     // 慢动作
  | "freeze_frame"    // 定格
  | "split_screen"    // 分屏
  | "rack_focus"      // 变焦
  | "zoom"            // 推拉变焦
  | "handheld_shaky"  // 晃动手持
  | "gimbal_smooth"   // 稳定器平滑
  | "drone_shot"      // 无人机
  | "car_mount"       // 车拍
  | "bodycam"         // 随身摄像头
  | "security_cam";   // 监控摄像头

// === 转场类型 ===
export type Transition =
  | "cut"             // 硬切
  | "dissolve"        // 溶接
  | "fade_in"         // 淡入
  | "fade_out"        // 淡出
  | "wipe"            // 划像
  | "match_cut"       // 匹配剪辑
  | "jump_cut"        // 跳切
  | "iris_in"         // 圈入
  | "iris_out"        // 圈出
  | "smash_cut";      // 撞击切

// === 情绪水平 ===
export type EmotionLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

// === 节奏 ===
export type Pacing = "still" | "slow" | "medium" | "fast" | "rapid";

// === 4层声音设计 ===
export interface SoundLayer {
  active: boolean;
  volume: number;           // 0-1
  assets: SoundAsset[];
  description: string;
}

export interface SoundAsset {
  id: string;
  name: string;
  type: "dialogue" | "sfx" | "music" | "ambient";
  file?: string;
  startTime: number;        // 秒
  duration: number;
  volume: number;
}

export interface SoundDesign {
  dialogue: SoundLayer;     // 对白层 P1
  soundEffect: SoundLayer;  // 音效层 P2
  music: SoundLayer;        // 音乐层 P3
  ambient: SoundLayer;      // 环境音层 P4
}

// === 15列分镜表 ===
export interface Shot {
  shotNumber: string;          // 镜号
  shotSize: ShotSize;          // 景别
  angle: CameraAngle;          // 角度
  movement: CameraMovement;    // 运动
  visualDescription: string;   // 画面描述
  dialogue: string;            // 对白
  soundEffect: string;         // 音效
  music: string;               // 音乐
  duration: number;            // 时长(秒)
  vfx: string;                 // 特效
  transition: Transition;      // 衔接
  emotion: EmotionLevel;       // 情绪
  pacing: Pacing;              // 节奏
  notes: string;               // 备注
  reference: string;           // 参考图
  specialShot?: SpecialShot;   // 特殊镜头
  soundDesign?: SoundDesign;   // 声音设计
}

// === 验证结果 ===
export interface Violation {
  type: string;
  severity: "ERROR" | "WARNING" | "INFO";
  shotIndex: number;
  message: string;
  suggestion: string;
  category?: string;
}

export interface ValidationResult {
  valid: boolean;
  violations: Violation[];
}

// === 分镜脚本 ===
export interface Storyboard {
  id: string;
  title: string;
  aspectRatio: "16:9" | "9:16" | "4:3" | "1:1";
  frameRate: number;
  totalDuration: number;
  shots: Shot[];
  createdAt: number;
  updatedAt: number;
}
