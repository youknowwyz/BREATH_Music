# BREATH Music - AI音乐生成平台

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Live-brightgreen)](https://breath-music.github.io)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

## 项目简介

BREATH Music是一个基于AI的智能音乐生成平台，利用先进的机器学习技术生成高质量的音乐作品。本项目包含一个现代化的静态网站，展示音频demo和Agent参数配置。

## 功能特性

- 🎵 **音频Demo展示** - 多种音乐风格的AI生成作品
- ⚙️ **Agent参数表** - 详细的AI模型参数配置
- 📱 **响应式设计** - 适配各种设备屏幕
- 🎨 **现代化UI** - 美观的用户界面设计
- 🔧 **交互功能** - 音乐生成、参数配置等

## 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **样式**: CSS Grid, Flexbox, CSS动画
- **图标**: Font Awesome
- **字体**: Inter字体
- **部署**: GitHub Pages

## 快速开始

### 本地预览

1. 克隆仓库
```bash
git clone https://github.com/your-username/BREATH_Music.git
cd BREATH_Music
```

2. 启动本地服务器
```bash
# 使用Python
python -m http.server 8000

# 或使用Node.js
npx serve .

# 或使用Live Server (VS Code扩展)
```

3. 访问 http://localhost:8000

### GitHub Pages部署

1. Fork本仓库
2. 在仓库设置中启用GitHub Pages
3. 选择Source为"GitHub Actions"
4. 推送代码到main分支即可自动部署

## 项目结构

```
BREATH_Music/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # JavaScript功能
├── audio/              # 音频文件目录
│   └── README.md       # 音频文件说明
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions部署配置
├── CNAME               # 自定义域名配置
└── README.md           # 项目说明
```

## 音频Demo

网站包含以下音乐风格的demo：

- **古典风格** - 传统古典音乐元素
- **电子音乐** - 现代电子音乐风格
- **爵士风格** - 爵士乐特色
- **摇滚风格** - 摇滚音乐风格

## Agent参数

系统支持以下参数配置：

### 音乐生成参数
- `temperature` - 控制生成的随机性
- `max_length` - 生成序列最大长度
- `top_p` - 核采样参数
- `repetition_penalty` - 重复惩罚系数

### 音乐参数
- `tempo` - 节拍速度 (BPM)
- `key_signature` - 调性设置
- `time_signature` - 拍号设置
- `instrument_count` - 乐器数量

### 风格转换参数
- `style_weight` - 风格转换权重
- `content_weight` - 内容保持权重
- `style_layers` - 风格提取层数
- `iterations` - 优化迭代次数

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 贡献指南

1. Fork项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启Pull Request

## 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 联系方式

- 项目链接: [https://github.com/your-username/BREATH_Music](https://github.com/your-username/BREATH_Music)
- 在线演示: [https://breath-music.github.io](https://breath-music.github.io)

## 致谢

感谢所有为这个项目做出贡献的开发者和设计师。