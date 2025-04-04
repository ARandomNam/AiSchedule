# AI 时间管理助手

这是一个基于 AI 的个人时间管理计划生成工具，可以帮助用户根据个人身份和活动需求生成合理的时间安排。

## 功能特点

- 用户身份选择
- 活动管理（添加、删除、设置时间）
- AI 智能生成时间表
- 日历视图展示
- 时间表下载功能

## 技术栈

### 前端

- Vite.js
- React
- TypeScript
- Ant Design
- Day.js

### 后端

- Flask
- Python
- DeepSeek AI API

## 安装说明

### 后端设置

1. 进入后端目录：

```bash
cd backend
```

2. 创建虚拟环境：

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# 或
.\venv\Scripts\activate  # Windows
```

3. 安装依赖：

```bash
pip install -r requirements.txt
```

4. 配置环境变量：

```bash
cp ../.env.example .env
# 编辑 .env 文件，填入必要的配置信息
```

### 前端设置

1. 进入前端目录：

```bash
cd frontend
```

2. 安装依赖：

```bash
npm install
```

3. 配置环境变量：

```bash
cp ../.env.example .env
# 编辑 .env 文件，填入必要的配置信息
```

## 运行项目

### 启动后端服务

```bash
cd backend
flask run
```

### 启动前端服务

```bash
cd frontend
npm run dev
```

## 使用说明

1. 在浏览器中访问 `http://localhost:3000`
2. 选择您的身份（如学生、上班族等）
3. 添加您需要安排的活动
4. 点击"生成时间表"按钮
5. 查看生成的时间表，可以下载为 CSV 格式

## 注意事项

- 确保已正确配置 DeepSeek API Key
- 建议使用现代浏览器访问
- 需要保持网络连接以使用 AI 功能

## 开发计划

- [ ] 添加用户认证功能
- [ ] 支持更多时间表格式（如 iCal）
- [ ] 添加时间表编辑功能
- [ ] 优化 AI 提示词
- [ ] 添加更多自定义选项

## 贡献指南

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

## 许可证

MIT License
