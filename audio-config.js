// 音频文件配置
// 按照新的格式要求配置音频文件

const audioConfig = [
    {
        filename: 'Gong0.wav',
        radar: {
            hr: 60,
            bpm: 60
        },
        agent: {
            mode: 'MusicGen',
            instruments: 'Gong',
            tempo: 60,
            useCase: 'Deep resonant sound'
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
            bpm: 80
        },
        agent: {
            mode: 'MusicGen',
            instruments: 'Gong',
            tempo: 80,
            useCase: 'Higher pitched metallic'
        },
        audio: {
            title: 'Gong Demo 1',
            duration: '2.8s'
        }
    }
    // 添加更多音频文件配置示例：
    // {
    //     filename: 'demo1_yu_90bpm.mp3',
    //     radar: {
    //         hr: 90,
    //         bpm: 90
    //     },
    //     agent: {
    //         mode: 'MusicGen',
    //         instruments: 'Yu',
    //         tempo: 90,
    //         useCase: 'Traditional Chinese instrument'
    //     },
    //     audio: {
    //         title: 'Yu Demo',
    //         duration: '4.5s'
    //     }
    // }
];

// 导出配置供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = audioConfig;
} else {
    window.audioConfig = audioConfig;
}
