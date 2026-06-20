// 全帧派分镜语法 v1.9 — 完整类型定义

export type ShotSize = 'extreme_wide' | 'wide' | 'full' | 'medium_wide' | 'medium' | 'medium_close' | 'close_up' | 'extreme_close';
export type CameraAngle = 'eye_level' | 'low_angle' | 'high_angle' | 'aerial' | 'worm_eye' | 'dutch';
export type CameraMovement = 'static' | 'push_in' | 'pull_out' | 'pan_left' | 'pan_right' | 'tilt_up' | 'tilt_down' | 'dolly_in' | 'dolly_out' | 'track_left' | 'track_right' | 'crane_up' | 'crane_down' | 'handheld' | 'steadicam';
export type Transition = 'cut' | 'dissolve' | 'fade_in' | 'fade_out' | 'fade_to_black' | 'fade_to_white' | 'wipe_left' | 'wipe_right' | 'match_cut' | 'smash_cut' | 'j_cut' | 'l_cut';
export type EmotionLevel = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
export type Pacing = 'calm' | 'slow' | 'medium' | 'fast' | 'urgent';

export interface SoundLayer {
  name: string; priority: 1|2|3|4; description: string; content: string; rules: string[];
}
export interface SoundDesign {
  dialogue: SoundLayer; soundEffect: SoundLayer; music: SoundLayer; ambient: SoundLayer;
}

export interface Shot {
  shotNumber: string;
  shotSize: ShotSize;
  angle: CameraAngle;
  movement: CameraMovement;
  visualDescription: string;
  dialogue: string;
  soundEffect: string;
  music: string;
  duration: number;
  durationUnit: 'frames' | 'seconds';
  vfx: string;
  transition: Transition;
  emotion: EmotionLevel;
  pacing: Pacing;
  notes: string;
  reference: string;
  aiPrompt?: string;
  generatedImage?: string;
}

export interface Storyboard {
  id: string; title: string; projectId: string;
  aspectRatio: '16:9' | '9:16' | '4:3' | '1:1';
  frameRate: number; totalDuration: number;
  shots: Shot[];
  metadata: StoryboardMetadata;
}
export interface StoryboardMetadata {
  createdAt: number; updatedAt: number; author: string;
  sourceText?: string; genre?: string; style?: string;
  tags: string[]; validationScore?: number;
}
export interface KnowledgeEntry {
  id: string; category: string; title: string; content: string;
  tags: string[]; version: string;
}
