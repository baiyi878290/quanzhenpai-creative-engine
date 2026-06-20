import { describe, it, expect } from "vitest";
import { validateStoryboard, quickValidate } from "../validateStoryboard";
import type { Shot } from "../types";

const makeShot = (overrides: Partial<Shot> = {}): Shot => ({
  shotNumber: "1", shotSize: "medium", angle: "eye_level", movement: "static",
  visualDescription: "城市全景", dialogue: "", soundEffect: "", music: "",
  duration: 5, durationUnit: "seconds", vfx: "", transition: "cut",
  emotion: 5, pacing: "medium", notes: "", reference: "", ...overrides,
});

describe("validateStoryboard", () => {
  it("空分镜通过验证", () => {
    const r = validateStoryboard([]);
    expect(r.valid).toBe(true);
    expect(r.score).toBe(100);
  });

  it("单镜头通过验证", () => {
    const r = validateStoryboard([makeShot()]);
    expect(r.valid).toBe(true);
  });

  it("正常连续镜头通过验证", () => {
    const shots = [
      makeShot({ shotNumber: "1", angle: "eye_level" }),
      makeShot({ shotNumber: "2", angle: "eye_level" }),
      makeShot({ shotNumber: "3", angle: "low_angle" }),
    ];
    const r = validateStoryboard(shots);
    expect(r.valid).toBe(true);
  });

  it("检测越轴错误", () => {
    const shots = [
      makeShot({ shotNumber: "1", angle: "low_angle" }),
      makeShot({ shotNumber: "2", angle: "high_angle" }),
    ];
    const r = validateStoryboard(shots);
    expect(r.valid).toBe(false);
    expect(r.score).toBeLessThan(85);
    expect(r.violations.some(v => v.type === "AXIS_CROSSING_NO_MOTIVATION")).toBe(true);
  });

  it("有动机的越轴通过验证", () => {
    const shots = [
      makeShot({ shotNumber: "1", angle: "low_angle", emotion: 3 }),
      makeShot({ shotNumber: "2", angle: "high_angle", emotion: 8, vfx: "过渡", notes: "情绪转折动机" }),
    ];
    const r = validateStoryboard(shots);
    expect(r.valid).toBe(true);
  });

  it("情绪骤降触发警告", () => {
    const shots = [
      makeShot({ shotNumber: "1", emotion: 10 }),
      makeShot({ shotNumber: "2", emotion: 1 }),
    ];
    const r = validateStoryboard(shots);
    expect(r.violations.some(v => v.type === "EMOTION_DROP")).toBe(true);
  });

  it("闪回缺少转场触发警告", () => {
    const shots = [
      makeShot({ shotNumber: "1", transition: "cut" }),
      makeShot({ shotNumber: "2", visualDescription: "回忆过去的校园时光", transition: "cut" }),
    ];
    const r = validateStoryboard(shots);
    expect(r.violations.some(v => v.type === "FLASHBACK_NO_TRANSITION")).toBe(true);
  });

  it("quickValidate 正常工作", () => {
    const shots = [
      makeShot({ shotNumber: "1", angle: "low_angle" }),
      makeShot({ shotNumber: "2", angle: "high_angle" }),
    ];
    const r = quickValidate(shots);
    expect(r.valid).toBe(false);
    expect(r.errors.length).toBeGreaterThan(0);
  });
});
