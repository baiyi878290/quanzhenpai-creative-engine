const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("__quanzhenpai__", {
  autoLogin: true,
  version: "0.1.0",
});

window.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) {
    localStorage.setItem("token", "Bearer quanzhenpai-auto");
    localStorage.setItem("user", JSON.stringify({ id: 1, name: "?????" }));
  }
});
