(function () {
  const CACHE_NAME = "magic-alley-cache";
  const VERSION_KEY = "magic-alley-cache-version";
  const statusEl = document.getElementById("status");
  const hintEl = document.getElementById("hint");
  const barEl = document.getElementById("bar");
  const errorEl = document.getElementById("error");
  const actionsEl = document.getElementById("actions");
  const retryEl = document.getElementById("retry-link");
  const rootBase = new URL("./", window.location.href);
  const gameEntry = new URL("./game/index.html", rootBase).toString();
  retryEl.href = window.location.href;

  function setProgress(value) {
    barEl.style.width = Math.max(0, Math.min(100, value)) + "%";
  }

  function setStatus(text) {
    statusEl.textContent = text;
  }

  function showError(text) {
    errorEl.textContent = text;
    errorEl.classList.remove("hidden");
    actionsEl.classList.remove("hidden");
    hintEl.textContent = "你可以稍后重试，或刷新页面重新准备资源。";
  }

  function getContentType(path) {
    const lower = path.toLowerCase();
    if (lower.endsWith(".html")) return "text/html; charset=utf-8";
    if (lower.endsWith(".js")) return "application/javascript; charset=utf-8";
    if (lower.endsWith(".json") || lower.endsWith(".atlas") || lower.endsWith(".lh") || lower.endsWith(".ls")) return "application/json; charset=utf-8";
    if (lower.endsWith(".css")) return "text/css; charset=utf-8";
    if (lower.endsWith(".png")) return "image/png";
    if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
    if (lower.endsWith(".webp")) return "image/webp";
    if (lower.endsWith(".gif")) return "image/gif";
    if (lower.endsWith(".svg")) return "image/svg+xml";
    if (lower.endsWith(".mp3")) return "audio/mpeg";
    if (lower.endsWith(".wav")) return "audio/wav";
    if (lower.endsWith(".ogg")) return "audio/ogg";
    if (lower.endsWith(".wasm")) return "application/wasm";
    if (lower.endsWith(".bin")) return "application/octet-stream";
    if (lower.endsWith(".txt")) return "text/plain; charset=utf-8";
    return "application/octet-stream";
  }

  async function registerServiceWorker() {
    if (!("serviceWorker" in navigator)) return null;
    const registration = await navigator.serviceWorker.register("./sw.js", { scope: "./" });
    await navigator.serviceWorker.ready;
    return registration;
  }

  async function fetchJson(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("版本信息读取失败");
    return response.json();
  }

  async function downloadZip(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("资源包下载失败");
    const total = Number(response.headers.get("content-length")) || 0;
    if (!response.body) {
      const buffer = await response.arrayBuffer();
      setProgress(35);
      return buffer;
    }
    const reader = response.body.getReader();
    const chunks = [];
    let received = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      chunks.push(value);
      received += value.length;
      if (total > 0) {
        setProgress(Math.min(42, Math.round((received / total) * 42)));
      }
    }
    const merged = new Uint8Array(received);
    let offset = 0;
    for (const chunk of chunks) {
      merged.set(chunk, offset);
      offset += chunk.length;
    }
    return merged.buffer;
  }

  async function refreshCache(version) {
    const zipUrl = new URL("./game.zip", rootBase).toString();
    setStatus("正在下载资源包…");
    const buffer = await downloadZip(zipUrl);
    setStatus("正在解包资源…");
    setProgress(48);
    const zip = await JSZip.loadAsync(buffer);
    const entries = Object.values(zip.files).filter((entry) => !entry.dir);
    const cache = await caches.open(CACHE_NAME);
    const existing = await cache.keys();
    await Promise.all(existing.map((request) => cache.delete(request)));

    let index = 0;
    for (const entry of entries) {
      const arrayBuffer = await entry.async("arraybuffer");
      const url = new URL(entry.name, rootBase).toString();
      const headers = {
        "Content-Type": getContentType(entry.name),
        "Cache-Control": "public, max-age=31536000"
      };
      await cache.put(url, new Response(arrayBuffer, { headers }));
      index += 1;
      setProgress(48 + Math.round((index / entries.length) * 48));
      setStatus("正在整理资源 " + index + " / " + entries.length + " …");
    }
    localStorage.setItem(VERSION_KEY, version);
  }

  async function start() {
    try {
      setStatus("正在连接魔法档案库…");
      await registerServiceWorker();
      const versionInfo = await fetchJson(new URL("./version.json", rootBase));
      const currentVersion = localStorage.getItem(VERSION_KEY);
      if (currentVersion !== versionInfo.version) {
        await refreshCache(versionInfo.version);
      } else {
        setProgress(92);
        setStatus("资源已就绪，正在进入店铺…");
      }
      setProgress(100);
      setStatus("资源准备完成，正在进入游戏…");
      setTimeout(() => {
        window.location.replace(gameEntry);
      }, 350);
    } catch (error) {
      console.error(error);
      showError("资源准备失败，请刷新后重试。若多次失败，请稍后再试。");
    }
  }

  start();
})();
