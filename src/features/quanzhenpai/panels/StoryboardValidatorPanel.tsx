import React, { useState, useCallback } from "react";
import { validateStoryboard, quickValidate } from "../grammar";
import type { Shot, Storyboard } from "../grammar/types";
import type { StoryboardValidation } from "../grammar/validateStoryboard";

interface Props {
  shots: Shot[];
  onShotsChange: (shots: Shot[]) => void;
}

export const StoryboardValidatorPanel: React.FC<Props> = ({ shots, onShotsChange }) => {
  const [validation, setValidation] = useState<StoryboardValidation | null>(null);
  const [autoValidate, setAutoValidate] = useState(true);

  const runValidation = useCallback(() => {
    const result = validateStoryboard(shots);
    setValidation(result);
  }, [shots]);

  React.useEffect(() => {
    if (autoValidate) runValidation();
  }, [shots, autoValidate, runValidation]);

  const severityColors = { ERROR: "bg-red-500", WARNING: "bg-yellow-500", INFO: "bg-blue-500" };
  const severityText = { ERROR: "text-red-400", WARNING: "text-yellow-400", INFO: "text-blue-400" };

  return (
    <div className="h-full flex flex-col bg-neutral-900 text-neutral-100">
      <div className="p-3 border-b border-neutral-700 flex items-center justify-between">
        <h3 className="text-sm font-semibold">全帧派分镜验证器</h3>
        <button
          onClick={() => { runValidation(); }}
          className="px-3 py-1 bg-blue-600 hover:bg-blue-700 rounded text-xs"
        >
          验证 ({shots.length}镜头)
        </button>
      </div>
      {validation && (
        <div className="flex-1 overflow-auto p-3">
          <div className="mb-3 p-2 rounded bg-neutral-800">
            <div className="flex items-center gap-2 mb-1">
              <span className={`text-lg ${validation.valid ? "text-green-400" : "text-red-400"}`}>
                {validation.valid ? "✅" : "⚠️"}
              </span>
              <span className="text-sm font-medium">得分 {validation.score}/100</span>
            </div>
            <p className="text-xs text-neutral-400">{validation.summary}</p>
          </div>
          {Object.entries(validation.results).map(([name, result]) => (
            <div key={name} className="mb-2 p-2 rounded bg-neutral-800 text-xs">
              <div className="flex items-center gap-2 mb-1">
                <span>{result.valid ? "✅" : "❌"}</span>
                <span className="font-medium">
                  {name === "axisRule" ? "180°轴线" : name === "actionMatch" ? "动作匹配" : name === "emotionProgression" ? "情绪递进" : "时间连续"}
                </span>
                <span className="text-neutral-500">({result.violations.length})</span>
              </div>
              {result.violations.slice(0, 3).map((v, i) => (
                <div key={i} className="ml-4 mb-1 border-l-2 pl-2" style={{ borderColor: v.severity === "ERROR" ? "#ef4444" : v.severity === "WARNING" ? "#eab308" : "#3b82f6" }}>
                  <span className={`${severityText[v.severity]}`}>[{v.severity}]</span>{" "}
                  {v.message}
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
      <div className="p-2 border-t border-neutral-700 flex items-center gap-2">
        <label className="flex items-center gap-1 text-xs">
          <input type="checkbox" checked={autoValidate} onChange={e => setAutoValidate(e.target.checked)} />
          自动验证
        </label>
      </div>
    </div>
  );
};

export default StoryboardValidatorPanel;
