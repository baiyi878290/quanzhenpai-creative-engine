const ENGINE_URL = "http://127.0.0.1:14500";

export class QuanzhenpaiEngineClient {
  private baseUrl: string;
  constructor(baseUrl: string = ENGINE_URL) { this.baseUrl = baseUrl; }

  async status() { const r = await fetch(`${this.baseUrl}/api/status`); return r.json(); }
  async analyzeScript(script: string) {
    const r = await fetch(`${this.baseUrl}/api/pipeline/analyze`, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({script}) });
    return r.json();
  }
  async oneClickPipeline(script: string, provider?: string) {
    const r = await fetch(`${this.baseUrl}/api/pipeline/one-click`, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({script,provider}) });
    return r.json();
  }
  async searchKnowledge(query: string) {
    const r = await fetch(`${this.baseUrl}/api/knowledge/search`, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({query}) });
    return r.json();
  }
  async chat(message: string, reset=false) {
    const r = await fetch(`${this.baseUrl}/api/chat`, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({message,reset}) });
    return r.json();
  }
  async generateImage(prompt: string, opts?: { width?:number; height?:number; provider?:string }) {
    const r = await fetch(`${this.baseUrl}/api/generate/image`, { method:"POST", headers:{"Content-Type":"application/json"}, body:JSON.stringify({prompt,...opts}) });
    return r.json();
  }
}

export const engineClient = new QuanzhenpaiEngineClient();
