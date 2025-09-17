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
    },
    {
        filename: 'demo3.wav',
        radar: {
            hr: 110,
            rr: 22
        },
        agent: {
            tonalMode: 'Jue',
            instruments: 'Flute, Yangqin, Synthesizer, Harp',
            tempo: 'slow',
            useCase: 'touching, background'
        }
    },
    {
        filename: 'demo4.wav',
        radar: {
            hr: 90,
            rr: 19
        },
        agent: {
            tonalMode: 'Yu',
            instruments: 'Flute, Yangqin, Synthesizer, struck string',
            tempo: 'slow',
            useCase: 'touching, meditation'
        }
    }
];

// 导出配置供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = audioConfig;
} else {
    window.audioConfig = audioConfig;
}