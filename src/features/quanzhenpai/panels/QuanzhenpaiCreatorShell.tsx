import React, { Suspense, useState, useCallback } from "react";
import { EngineStatusPanel } from "./panels/EngineStatusPanel";

const StoryboardValidatorPanel = React.lazy(() => import("./panels/StoryboardValidatorPanel"));

export interface QuanzhenpaiCreatorShellProps {
  projectId?: string;
  initialShots?: any[];
}

export const QuanzhenpaiCreatorShell: React.FC<QuanzhenpaiCreatorShellProps> = ({
  projectId = "default",
  initialShots = [],
}) => {
  const [shots, setShots] = useState<any[]>(initialShots);
  const [activePanel, setActivePanel] = useState<"validator" | "knowledge" | "shotTypes">("validator");

  const handleShotsChange = useCallback((newShots: any[]) => {
    setShots(newShots);
  }, []);

  return (
    <div className="h-full flex flex-col bg-neutral-950 text-neutral-100">
      <EngineStatusPanel />
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 flex flex-col">
          <div className="p-2 border-b border-neutral-800 flex gap-2">
            {(["validator","knowledge","shotTypes"] as const).map(panel => (
              <button
                key={panel}
                onClick={() => setActivePanel(panel)}
                className={`px-3 py-1 rounded text-xs ${activePanel === panel ? "bg-blue-600" : "bg-neutral-800 hover:bg-neutral-700"}`}
              >
                {panel === "validator" ? "分镜验证" : panel === "knowledge" ? "知识库" : "镜头速查"}
              </button>
            ))}
          </div>
          <div className="flex-1 overflow-hidden">
            {activePanel === "validator" && (
              <Suspense fallback={<div className="p-4 text-sm">加载验证器...</div>}>
                <StoryboardValidatorPanel shots={shots} onShotsChange={handleShotsChange} />
              </Suspense>
            )}
            {activePanel === "knowledge" && (
              <div className="p-4 text-sm text-neutral-400">
                知识库浏览器 (68个文件就绪，UI待完善)
              </div>
            )}
            {activePanel === "shotTypes" && (
              <div className="p-4 text-sm text-neutral-400">
                27种特殊镜头速查 (待完善UI)
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="p-1 border-t border-neutral-800 text-xs text-neutral-500 flex items-center justify-between">
        <span>全帧派创作引擎 v0.1.0</span>
        <span>{shots.length} 个镜头 | {projectId}</span>
      </div>
    </div>
  );
};

export default QuanzhenpaiCreatorShell;
