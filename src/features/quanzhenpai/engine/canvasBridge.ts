import type { Shot, Storyboard } from "../grammar/types";
import { validateStoryboard } from "../grammar/validateStoryboard";

export interface CanvasToStoryboardBridge {
  canvasNodes: any[];
  syncToStoryboard: (nodes: any[]) => Shot[];
  syncToCanvas: (shots: Shot[]) => any[];
  validateFromCanvas: (nodes: any[]) => { valid: boolean; score: number; summary: string };
}

export function createCanvasBridge(): CanvasToStoryboardBridge {
  return {
    canvasNodes: [],

    syncToStoryboard(nodes: any[]): Shot[] {
      return nodes
        .filter((n: any) => n?.type === "storyboard" || n?.data?.shot)
        .map((n: any, idx: number) => ({
          shotNumber: n.data?.shot?.shotNumber || `${idx + 1}`,
          shotSize: n.data?.shot?.shotSize || "medium",
          angle: n.data?.shot?.angle || "eye_level",
          movement: n.data?.shot?.movement || "static",
          visualDescription: n.data?.shot?.visualDescription || n.data?.label || "",
          dialogue: n.data?.shot?.dialogue || "",
          soundEffect: n.data?.shot?.soundEffect || "",
          music: n.data?.shot?.music || "",
          duration: n.data?.shot?.duration || 5,
          durationUnit: "seconds",
          vfx: n.data?.shot?.vfx || "",
          transition: n.data?.shot?.transition || "cut",
          emotion: n.data?.shot?.emotion || 5,
          pacing: n.data?.shot?.pacing || "medium",
          notes: n.data?.shot?.notes || "",
          reference: n.data?.shot?.reference || "",
        }));
    },

    syncToCanvas(shots: Shot[]): any[] {
      return shots.map((s, i) => ({
        id: `shot-${i}`,
        type: "storyboard",
        position: { x: i * 250 + 50, y: 100 },
        data: {
          label: `镜头${s.shotNumber}: ${s.shotSize}`,
          shot: s,
        },
      }));
    },

    validateFromCanvas(nodes: any[]): { valid: boolean; score: number; summary: string } {
      const shots = this.syncToStoryboard(nodes);
      const result = validateStoryboard(shots);
      return { valid: result.valid, score: result.score, summary: result.summary };
    },
  };
}

export const canvasBridge = createCanvasBridge();
