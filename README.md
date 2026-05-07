# 曹灿杯朗诵展示活动官网

基于 Astro + Tailwind 的静态官网项目，按现有 v20 静态页结构重构。

## 启动

```bash
npm install
npm run dev
```

## 分享给别人看

### 方式 1：本地预览

```bash
npm install
npm run dev -- --host
```

启动后把本机可访问地址发给同网络内的同事即可。

注意：

- 保持终端窗口不要关闭
- 关闭终端后，预览地址会失效
- 同网络的人可以访问终端输出里的 `Network` 地址

### 方式 2：构建静态站点

```bash
npm install
npm run build
```

构建完成后，静态文件会输出到 `dist/`，可以直接部署到任意静态托管平台。

如果只想快速发给别人部署，直接使用项目里的 `dist/` 目录即可。

### 方式 3：部署到静态托管平台

适合的平台：

- Vercel
- Netlify
- Cloudflare Pages
- GitHub Pages

推荐统一配置：

- Build Command：`npm run build`
- Output Directory：`dist`
- Node Version：`20+`

#### Vercel

项目已经包含 `vercel.json`，导入仓库后可直接部署。

#### Netlify

项目已经包含 `netlify.toml`，导入仓库后可直接部署。

#### Cloudflare Pages

使用以下配置：

- Framework preset：`Astro`
- Build command：`npm run build`
- Build output directory：`dist`

#### GitHub Pages

更适合“部署到域名根目录”场景。如果后续要部署到 GitHub Pages 的子路径，需要再补一层 `site/base` 配置。

## 当前状态

- Astro 构建已验证通过
- 首页与 `/go/*` 中转页已成功生成
- 当前可部署目录：`dist/`

## 主要目录

- `src/pages/index.astro`：首页
- `src/pages/go/[key].astro`：统一中转页
- `src/config/site.ts`：站点标题、导航、页脚、主视觉资源
- `src/config/home.ts`：首页文案与模块数据
- `src/config/gallery.ts`：精彩瞬间图片列表
- `src/config/links.ts`：全部跳转配置

## 修改内容

- 改首页文案、通知、流程、服务入口、加入我们、联系方式：
  `src/config/home.ts`
- 改导航、页脚、Logo、Banner：
  `src/config/site.ts`
- 改图集图片：
  `src/config/gallery.ts`
- 改真实链接、二维码地址、中转逻辑配置：
  `src/config/links.ts`

## 中转页说明

所有入口统一跳到 `/go/[key]`：

- `type = web`：支持自动跳转和继续访问按钮
- `type = miniprogram`：显示小程序二维码占位与说明
- `type = wechat_article`：显示文章二维码占位与说明
- `type = official_account`：显示公众号二维码占位与说明

后续新增入口时，只需要在 `src/config/links.ts` 新增配置，再在首页内容配置中引用对应 `key`。
