export interface Director3DAsset {
  id: string;
  name: string;
  type: "mannequin" | "skeleton" | "scene" | "prop";
  path: string;
  thumbnail?: string;
  category?: string;
}

export class Director3DAssetLoader {
  private basePath = "/guo-3d-assets";

  async listAssets(type: "mannequin" | "skeleton" | "scene" | "prop"): Promise<Director3DAsset[]> {
    const paths: Record<string, string> = {
      mannequin: `${this.basePath}/guo-mannequin-models/manifest.json`,
      skeleton: `${this.basePath}/guo-skeleton-models/manifest.json`,
      scene: `${this.basePath}/guo-scene-presets-200/manifest.json`,
      prop: `${this.basePath}/guo-mounted-props-200/manifest.json`,
    };
    try {
      const resp = await fetch(paths[type]);
      return resp.json();
    } catch {
      return [];
    }
  }

  getModelPath(type: string, name: string): string {
    const dirs: Record<string, string> = {
      mannequin: "guo-mannequin-models/models",
      skeleton: "guo-skeleton-models/models",
      scene: "guo-scene-presets-200/scenes",
      prop: "guo-mounted-props-200/models",
    };
    return `${this.basePath}/${dirs[type]}/${name}`;
  }

  getThumbnailPath(type: string, name: string): string {
    const dirs: Record<string, string> = {
      mannequin: "guo-mannequin-models",
      skeleton: "guo-skeleton-models/thumbnails",
      scene: "guo-scene-presets-200/thumbnails",
      prop: "guo-mounted-props-200/thumbnails",
    };
    const base = name.replace(/\.[^.]+$/, "");
    return `${this.basePath}/${dirs[type]}/${base}.png`;
  }
}

export const assetLoader = new Director3DAssetLoader();
