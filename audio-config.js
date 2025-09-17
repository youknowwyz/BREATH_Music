// 音频文件配置
// 按照新的格式要求配置音频文件

const audioConfig = [
    {
        filename: 'Gong0.wav',
        radar: {
            hr: 60,
            rr: 12
        },
        tonal: 'Yu',
        agent: {
            mode: 'Yu',
            instruments: 'Gong',
            tempo: 'slow',
            useCase: 'soothe'
        },
        audio: {
            title: 'Gong Demo 0',
            duration: '3.2s'
        }
    },
    {
        filename: 'Gong1.wav',
        radar: {
            hr: 80,
            rr: 15
        },
        tonal: 'Yu',
        agent: {
            mode: 'Yu',
            instruments: 'Gong',
            tempo: 'medium',
            useCase: 'relax'
        },
        audio: {
            title: 'Gong Demo 1',
            duration: '2.8s'
        }
    }
];

// 导出配置供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = audioConfig;
} else {
    window.audioConfig = audioConfig;
}