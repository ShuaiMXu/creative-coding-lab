# 每期模板 Template

复制这个文件夹开始新的一期：

```bash
cp -r template episodes/02-你的标题
```

里面有什么：

- **`index.html`** — 现成的深色作品页 + 右侧参数面板。你只在标注的地方加滑块。
- **`sketch.js`** — 已经写好种子随机、参数面板胶水、存图、鼠标交互。**你只改 `render()` 里的算法。**

三步做一期：

1. 在 `sketch.js` 的 `render()` 里写你的生成算法（记得先 `randomSeed(P.seed)` 保证可复现）。
2. 在 `index.html` 里把「示例参数 A」换成你算法真正要调的参数，`P` 对象里同步加字段。
3. 双击 `index.html` 预览，满意的构图记下 seed，点「存图」导出。

出图/录屏建议：`pixelDensity(2)` 已开启，截图就是高清；录竖屏钩子时，把浏览器窗口拉窄到手机比例再录 `render()` 的交互过程。
