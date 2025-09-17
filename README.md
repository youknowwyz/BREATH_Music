# BREATH_Music

静态网站展示音频demo和Agent参数表

## 使用方法

### 添加音频文件

1. 将音频文件放入 `audio/` 目录，建议命名格式：`demo1_yu_90bpm.mp3`
2. 在 `audio-config.js` 中添加对应的配置信息：

```javascript
{
    filename: 'demo1_yu_90bpm.mp3',
    radar: {
        hr: 90,
        bpm: 90
    },
    agent: {
        mode: 'MusicGen',
        instruments: 'Yu',
        tempo: 90,
        useCase: 'Traditional Chinese instrument'
    },
    audio: {
        title: 'Yu Demo',
        duration: '4.5s'
    }
}
```

### 显示格式

每个音频文件会显示：
- **HTML5 audio标签**：可播放、可下载
- **信息表格**：
  - Radar: HR xx bpm
  - Agent: Mode, Instruments, Tempo, Use-case
  - Audio: 播放按钮

### 支持的音频格式

- WAV
- MP3
- OGG

### 部署到GitHub Pages

1. 推送代码到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 访问 `https://你的用户名.github.io/仓库名`