# BREATH: A Bio-Radar Embodied Agent for Tonal and Human-Aware Diffusion Music Generation

Multimodal music generation system research demonstration

## About BREATH

BREATH is a multimodal music-generation system that turns millimetre-wave radar heart-rate & respiration signals into Chinese-pentatonic audio in real time.

A radar front-end captures HR/RR; an LLM agent maps these body states to musical parameters (tempo, genre, instrumentation, Gong–Yu mode); a latent-diffusion transformer synthesises 44.1 kHz stereo.

The clips on this page illustrate how physiological changes modulate the mode and mood of the generated music.

## Features

- **Audio Demo**: Real-time generated music samples
- **System Parameters**: L0 Events schema documentation
- **Research Focus**: Academic demonstration, not commercial product

## Audio Configuration

Add audio files to `audio/` directory and configure in `audio-config.js`:

```javascript
{
    filename: 'demo1_yu_90bpm.mp3',
    radar: { hr: 90, rr: 15 },
    tonal: 'Yu',
    agent: {
        mode: 'Yu',
        instruments: 'Erhu, Guzheng',
        tempo: 'slow',
        useCase: 'soothe'
    },
    audio: { title: 'Yu Demo', duration: '4.5s' }
}
```

## Deployment

1. Push to GitHub repository
2. Enable GitHub Pages in repository settings
3. Access at `https://yourusername.github.io/repositoryname`