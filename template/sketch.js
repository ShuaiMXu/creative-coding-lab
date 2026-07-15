/* =============================================================
   Creative Coding Lab · 每期模板 sketch.js
   -------------------------------------------------------------
   这个模板帮你省掉每期都要重写的样板：
     ✓ 种子随机（同一 seed → 同一幅画，方便复现/复刻）
     ✓ 参数面板（滑块实时改，改完自动重画）
     ✓ 一键存图 PNG
     ✓ 鼠标交互入口
   你只需要改 render() 里的算法，和 index.html 里的滑块。
   ============================================================= */

// ---- 1. 参数：把你的算法需要调的东西都放这里 ----
let P = {
  seed: 1,
  a: 50,   // 示例参数，随便改名/加更多
};

// ---- 2. 画布 ----
function setup(){
  const s = Math.min(window.innerWidth - 340, window.innerHeight - 48, 900);
  const c = createCanvas(Math.max(s, 360), Math.max(s, 360));
  c.parent('stage');
  pixelDensity(2);          // 高清屏更锐利（出图/截图更好看）
  render();
}

// ---- 3. 核心：每次重画都从这里开始 ----
// 关键：先 seed 再画，保证可复现
function render(){
  randomSeed(P.seed);
  noiseSeed(P.seed);
  background('#efe7d6');     // 纸色

  // === 你的算法写在这里 ===============================
  // 下面是一个占位示例：一圈随受参数影响的点，替换成你的作品
  const n = floor(map(P.a, 0, 100, 40, 600));
  stroke(20, 18, 15, 40);
  for (let i = 0; i < n; i++){
    const ang = random(TWO_PI);
    const r   = random(width * 0.1, width * 0.42) * noise(i * 0.05);
    const x = width/2 + cos(ang) * r;
    const y = height/2 + sin(ang) * r;
    strokeWeight(random(0.5, 2));
    point(x, y);
  }
  // ===================================================
}

// ---- 4. 交互：鼠标当画笔（不需要就删掉） ----
function mouseDragged(){
  if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;
  stroke(20, 18, 15, 120);
  strokeWeight(3);
  line(pmouseX, pmouseY, mouseX, mouseY);
}

/* ---------------- 下面是 UI 胶水，一般不用动 ---------------- */
function setP(k, v){
  v = parseFloat(v);
  P[k] = v;
  const el = document.getElementById('v-' + k);
  if (el) el.textContent = v;
  render();
}
function stepSeed(d){ P.seed = Math.max(0, P.seed + d); syncSeed(); render(); }
function jumpSeed(v){ P.seed = Math.max(0, parseInt(v) || 0); render(); }
function randomSeed_(){ P.seed = Math.floor(Math.random() * 99999); syncSeed(); render(); }
function syncSeed(){ document.getElementById('seedInput').value = P.seed; }
function regen(){ render(); }
function savePNG(){ saveCanvas('artwork-seed' + P.seed, 'png'); }

window.addEventListener('resize', () => {
  const s = Math.min(window.innerWidth - 340, window.innerHeight - 48, 900);
  resizeCanvas(Math.max(s, 360), Math.max(s, 360));
  render();
});
