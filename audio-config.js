// 音频文件配置
// 在这里添加你的音频文件和对应的prompt、参数信息

const audioConfig = [
    {
        filename: 'Gong0.wav',
        title: 'Gong 0',
        tag: 'Percussion',
        prompt: 'Generate a deep, resonant gong sound with rich harmonics and a long decay',
        parameters: {
            temperature: 0.7,
            max_length: 256,
            tempo: 60,
            key_signature: 'C',
            instrument_type: 'Gong',
            duration: '3.2s',
            sample_rate: '44.1kHz',
            model: 'MusicGen',
            inference_steps: 50
        }
    },
    {
        filename: 'Gong1.wav',
        title: 'Gong 1', 
        tag: 'Percussion',
        prompt: 'Create a higher-pitched gong with metallic timbre and shorter sustain',
        parameters: {
            temperature: 0.8,
            max_length: 192,
            tempo: 80,
            key_signature: 'F',
            instrument_type: 'Gong',
            duration: '2.8s',
            sample_rate: '44.1kHz',
            model: 'MusicGen',
            inference_steps: 45
        }
    }
    // 在这里添加更多音频文件配置
    // {
    //     filename: 'your-audio-file.wav',
    //     title: 'Your Title',
    //     tag: 'Genre',
    //     prompt: 'Your prompt description',
    //     parameters: {
    //         temperature: 0.8,
    //         max_length: 512,
    //         tempo: 120,
    //         key_signature: 'C',
    //         instrument_type: 'Piano',
    //         duration: '5.0s',
    //         sample_rate: '44.1kHz',
    //         model: 'YourModel',
    //         inference_steps: 100
    //     }
    // }
];

// 导出配置供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = audioConfig;
} else {
    window.audioConfig = audioConfig;
}
