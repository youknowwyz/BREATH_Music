// 音频文件配置
// 按照新的格式要求配置音频文件

const audioConfig = [
    {
        filename: 'demo1.wav',
        radar: {
            hr: 60,
            rr: 12
        },
        agent: {
            tonalMode: 'Gong',
            instruments: 'Flute, Synthesizer, Guzheng, Strings',
            tempo: 'medium',
            useCase: 'relax'
        }
    },
    {
        filename: 'Zhi0.wav',
        radar: {
            hr: 80,
            rr: 15
        },
        agent: {
            tonalMode: 'Zhi',
            instruments: 'Guzheng, Strings, Synthesizer, Yangqin',
            tempo: 'slow',
            useCase: 'meditative, relax'
        }
    }
];

// 导出配置供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = audioConfig;
} else {
    window.audioConfig = audioConfig;
}