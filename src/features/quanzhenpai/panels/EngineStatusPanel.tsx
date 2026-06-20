import React, { useEffect, useState } from "react";
import { engineClient } from "../engine/bridge";

export const EngineStatusPanel: React.FC = () => {
  const [status, setStatus] = useState<any>(null);
  const [connected, setConnected] = useState<boolean | null>(null);
  const [lastCheck, setLastCheck] = useState(0);

  useEffect(() => {
    let mounted = true;
    const check = async () => {
      try {
        const s = await engineClient.status();
        if (mounted) { setStatus(s); setConnected(true); }
      } catch {
        if (mounted) setConnected(false);
      }
      if (mounted) setLastCheck(Date.now());
    };
    check();
    const interval = setInterval(check, 10000);
    return () => { mounted = false; clearInterval(interval); };
  }, []);

  return (
    <div className="p-3 bg-neutral-900 border-b border-neutral-700">
      <div className="flex items-center gap-2 mb-2">
        <div className={`w-2 h-2 rounded-full ${connected === null ? "bg-neutral-500" : connected ? "bg-green-500" : "bg-red-500"}`} />
        <span className="text-xs font-medium text-neutral-300">全帧派引擎</span>
        <span className="text-xs text-neutral-500 ml-auto">
          {connected ? `v${status?.version || "?"}` : "离线"}
        </span>
      </div>
      {status && (
        <div className="grid grid-cols-3 gap-2 text-xs text-neutral-400">
          <div>Pipeline: {status.pipeline || "待机"}</div>
          <div>AI供应商: {status.aiProviders || 0}</div>
          <div>知识库: {status.knowledgeFiles || 0}文件</div>
        </div>
      )}
      {connected === false && (
        <p className="text-xs text-red-400 mt-1">无法连接 127.0.0.1:14500</p>
      )}
    </div>
  );
};

export default EngineStatusPanel;
