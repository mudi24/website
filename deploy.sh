#!/bin/bash

# 加载环境变量
if [ ! -f ".env" ]; then
    echo -e "${RED}[ERROR]${NC} .env 文件不存在"
    exit 1
fi

source .env

# 设置变量
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BUILD_DIR="dist"
ARCHIVE_NAME="website_${TIMESTAMP}.tar.gz"

# 输出颜色设置
GREEN="\033[0;32m"
RED="\033[0;31m"
NC="\033[0m" # No Color

# 日志函数
log_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# 错误处理
set -e
trap 'log_error "部署脚本执行失败，请检查错误信息"' ERR

# 1. 构建项目
log_success "开始构建项目..."
npm run build

# 2. 检查构建结果
if [ ! -d "$BUILD_DIR" ]; then
    log_error "构建失败：$BUILD_DIR 目录不存在"
    exit 1
fi

# 4. 压缩构建文件
log_success "正在压缩构建文件..."
tar -czf "$ARCHIVE_NAME" "$BUILD_DIR"

# 5. 上传到服务器
log_success "开始上传文件到服务器..."
scp "$ARCHIVE_NAME" "$REMOTE_USER@$REMOTE_HOST:$DEPLOY_PATH"

# 6. 在服务器上解压文件并重启nginx
log_success "正在服务器上解压文件..."
# 检查并创建部署目录
ssh "$REMOTE_USER@$REMOTE_HOST" "mkdir -p $DEPLOY_PATH"

# 上传并部署文件
ssh "$REMOTE_USER@$REMOTE_HOST" "cd $DEPLOY_PATH && \
    tar -xzf $ARCHIVE_NAME && \
    rm $ARCHIVE_NAME && \
    sudo systemctl restart nginx"

# 7. 清理本地文件
log_success "清理本地临时文件..."
rm "$ARCHIVE_NAME"

log_success "部署完成！"