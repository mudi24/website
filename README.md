# 个人网站项目

一个基于Vue3和TypeScript构建的现代化个人网站，集成作品集展示、技术博客和个人介绍功能。采用响应式设计，提供流畅的用户体验。

## 技术栈

- Vue 3
- TypeScript
- Vite
- Vue Router
- Tailwind CSS
- Headless UI

## 本地开发
### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

启动后，访问 http://localhost:5173 即可查看网站。

### 构建项目

```bash
npm run build
```

构建后的文件将生成在 `dist` 目录下。

## 部署说明

### 环境配置

1. 在项目根目录创建 `.env` 文件，包含以下配置：

```bash
# 服务器配置
REMOTE_USER=your_username
REMOTE_HOST=your_server_ip
DEPLOY_PATH=/your/deploy/path
```

### 部署步骤

1. 确保已正确配置 `.env` 文件
2. 运行部署脚本：

```bash
./deploy.sh
```

部署脚本会自动执行以下操作：
1. 构建项目
2. 将构建后的文件打包
3. 上传到远程服务器
4. 在服务器上解压文件
5. 重启 Nginx 服务

### 注意事项

- 确保远程服务器已安装并配置好 Nginx
- 确保部署路径具有正确的权限
- 部署前请确保 `.env` 文件中的配置信息正确
- `.env` 文件包含敏感信息，已添加到 `.gitignore` 中，请勿提交到代码仓库
