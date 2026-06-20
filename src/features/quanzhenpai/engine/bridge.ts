// 全帧派引擎桥接客户端
// 连接 Python 引擎 (127.0.0.1:14500) 和 Vercel AI SDK

const ENGINE_BASE = "http://127.0.0.1:14500";

export interface EngineStatus {
  version: string;
  running: boolean;
  pipeline: { seedance: boolean; gpt_image: boolean };
}

export interface ShotPlan {
  shots: Array<{
    shotNumber: string;
    shotSize: string;
    angle: string;
    movement: string;
    duration: number;
    prompt: string;
    visualDescription: string;
  }>;
  totalDuration: number;
}

export interface GenerateResult {
  shotId: string;
  imageUrl: string;
  prompt: string;
}

export interface KnowledgeResult {
  title: string;
  content: string;
  score: number;
}

export class QuanZhenPaiEngine {
  async status(): Promise<EngineStatus> {
    try {
      const resp = await fetch(`${ENGINE_BASE}/api/status`);
      return resp.json();
    } catch { return { version: "unknown", running: false, pipeline: { seedance: false, gpt_image: false } };
    }
  }

  async analyzeScript(script: string): Promise<ShotPlan> {
    const resp = await fetch(`${ENGINE_BASE}/api/pipeline/analyze`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ script }),
    });
    return resp.json();
  }

  async generateShot(prompt: string, duration: number): Promise<GenerateResult> {
    const resp = await fetch(`${ENGINE_BASE}/api/pipeline/generate`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt, duration }),
    });
    return resp.json();
  }

  async searchKnowledge(query: string): Promise<KnowledgeResult[]> {
    const resp = await fetch(`${ENGINE_BASE}/api/knowledge/search`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query }),
    });
    return resp.json();
  }

  async chat(message: string, reset = false): Promise<string> {
    const resp = await fetch(`${ENGINE_BASE}/api/chat`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, reset }),
    });
    const data = await resp.json();
    return data.response || data.message || JSON.stringify(data);
  }
}

export const quanzhenpai = new QuanZPaiEngine();
