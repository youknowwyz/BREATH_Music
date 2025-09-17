# BREATH_Music

静态网站展示音频demo和Agent参数表

## 使用方法

### 添加音频文件

1. 将音频文件放入 `audio/` 目录
2. 在 `audio-config.js` 中添加对应的配置信息：

```javascript
{
    filename: 'your-audio-file.wav',
    title: '音频标题',
    tag: '音乐类型',
    prompt: '生成这个音频时使用的prompt',
    parameters: {
        temperature: 0.8,
        max_length: 512,
        tempo: 120,
        key_signature: 'C',
        instrument_type: 'Piano',
        duration: '5.0s',
        sample_rate: '44.1kHz',
        model: 'YourModel',
        inference_steps: 100
    }
}
```

### 支持的音频格式

- WAV
- MP3
- OGG

### 部署到GitHub Pages

1. 推送代码到GitHub仓库
2. 在仓库设置中启用GitHub Pages
3. 访问 `https://你的用户名.github.io/仓库名`