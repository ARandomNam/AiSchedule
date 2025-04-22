# AI 时间管理助手 | AI Time Management Assistant

这是一个基于 AI 的个人时间管理计划生成工具，可以帮助用户根据个人身份和活动需求生成合理的时间安排。

This is an AI-based personal time management planning tool that helps users generate reasonable schedules based on their personal identity and activity requirements.

## 功能特点 | Features

- 用户身份选择 | User identity selection
- 活动管理（添加、删除、设置时间）| Activity management (add, delete, set time)
- AI 智能生成时间表 | AI intelligent schedule generation
- 日历视图展示 | Calendar view display
- 时间表下载功能 | Schedule download function
- 多语言支持（中文/英文）| Multilingual support (Chinese/English)

## 技术栈 | Tech Stack

### 前端 | Frontend

- Vite.js
- React
- TypeScript
- Ant Design
- Day.js
- i18next (国际化支持 | Internationalization support)

### 后端 | Backend

- Flask
- Python
- DeepSeek AI API

## 安装说明 | Installation Guide

### 后端设置 | Backend Setup

1. 进入后端目录 | Enter the backend directory:

```bash
cd backend
```

2. 创建虚拟环境 | Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # Linux/Mac
# 或 | or
.\venv\Scripts\activate  # Windows
```

3. 安装依赖 | Install dependencies:

```bash
pip install -r requirements.txt
```

4. 配置环境变量 | Configure environment variables:

```bash
cp ../.env.example .env
# 编辑 .env 文件，填入必要的配置信息
# Edit the .env file and fill in the necessary configuration information
```

### 前端设置 | Frontend Setup

1. 进入前端目录 | Enter the frontend directory:

```bash
cd frontend
```

2. 安装依赖 | Install dependencies:

```bash
npm install
```

3. 配置环境变量 | Configure environment variables:

```bash
cp ../.env.example .env
# 编辑 .env 文件，填入必要的配置信息
# Edit the .env file and fill in the necessary configuration information
```

## 运行项目 | Run the Project

### 启动后端服务 | Start the Backend Service

```bash
cd backend
flask run
```

### 启动前端服务 | Start the Frontend Service

```bash
cd frontend
npm run dev
```

## 使用说明 | Usage Instructions

1. 在浏览器中访问 `http://localhost:3000` | Access `http://localhost:3000` in your browser
2. 选择您的身份（如学生、上班族等）| Select your identity (e.g., student, office worker, etc.)
3. 添加您需要安排的活动 | Add activities you need to schedule
4. 点击"生成时间表"按钮 | Click the "Generate Schedule" button
5. 查看生成的时间表，可以下载为 CSV 格式 | View the generated schedule, which can be downloaded in CSV format
6. 使用右上角的语言切换按钮切换界面语言 | Use the language switch button in the upper right corner to change the interface language

## 注意事项 | Notes

- 确保已正确配置 DeepSeek API Key | Ensure the DeepSeek API Key is correctly configured
- 建议使用现代浏览器访问 | Recommended to use modern browsers
- 需要保持网络连接以使用 AI 功能 | Internet connection is required to use AI features

## 开发计划 | Development Plan

- [ ] 添加用户认证功能 | Add user authentication
- [ ] 支持更多时间表格式（如 iCal）| Support more schedule formats (e.g., iCal)
- [ ] 添加时间表编辑功能 | Add schedule editing functionality
- [ ] 优化 AI 提示词 | Optimize AI prompts
- [ ] 添加更多自定义选项 | Add more customization options
- [ ] 支持更多语言 | Support more languages

## 贡献指南 | Contribution Guidelines

欢迎提交 Issue 和 Pull Request 来帮助改进这个项目。

Issues and Pull Requests are welcome to help improve this project.

## 许可证 | License

MIT License
