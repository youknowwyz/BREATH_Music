// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded, initializing...');
    try {
        initializeNavigation();
        initializeScrollEffects();
        loadAudioDemos();
        initializeAudioPlayers();
        initializeParameterTabs();
        initializeTooltips();
    } catch (error) {
        console.error('Error during initialization:', error);
    }
});

// 导航栏功能
function initializeNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // 移动端菜单切换
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 点击导航链接时关闭移动端菜单
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 平滑滚动到锚点
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70; // 考虑固定导航栏高度
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// 动态加载音频demo
function loadAudioDemos() {
    try {
        // 使用配置文件中的音频数据
        const audioFiles = window.audioConfig || [];
        
        console.log('Loading audio demos, config:', audioFiles);
        console.log('audioConfig available:', typeof window.audioConfig);
        
        const audioDemos = document.getElementById('audio-demos');
        if (!audioDemos) {
            console.error('audio-demos element not found');
            return;
        }
        
        if (audioFiles.length === 0) {
            audioDemos.innerHTML = `
                <div class="no-audio-message">
                    <i class="fas fa-music"></i>
                    <h3>暂无音频文件</h3>
                    <p>请在 audio-config.js 中配置音频文件信息</p>
                </div>
            `;
            return;
        }

        audioDemos.innerHTML = ''; // 清空现有内容
        
        audioFiles.forEach((audio, index) => {
            console.log(`Creating demo ${index}:`, audio);
            const audioDemo = createAudioDemo(audio, index);
            audioDemos.appendChild(audioDemo);
        });
    } catch (error) {
        console.error('Error in loadAudioDemos:', error);
        const audioDemos = document.getElementById('audio-demos');
        if (audioDemos) {
            audioDemos.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i>
                    <h3>加载音频演示时出错</h3>
                    <p>请检查控制台错误信息</p>
                </div>
            `;
        }
    }
}

function createAudioDemo(audioData, index) {
    try {
        const audioDemo = document.createElement('div');
        audioDemo.className = 'audio-demo-item fade-in-up';
        audioDemo.style.animationDelay = `${index * 0.1}s`;
        
        // 调试信息
        console.log('Creating audio demo:', audioData);
        
        // 获取文件扩展名
        const fileExtension = audioData.filename.split('.').pop().toLowerCase();
        const mimeType = fileExtension === 'mp3' ? 'audio/mpeg' : 
                        fileExtension === 'wav' ? 'audio/wav' : 
                        fileExtension === 'ogg' ? 'audio/ogg' : 'audio/mpeg';
        
        audioDemo.innerHTML = `
            <div class="audio-item">
                <div class="audio-player">
                    <audio controls preload="metadata">
                        <source src="audio/${audioData.filename}" type="${mimeType}">
                        您的浏览器不支持音频播放。
                    </audio>
                    <div class="audio-download">
                        <a href="audio/${audioData.filename}" download="${audioData.filename}" class="download-btn">
                            <i class="fas fa-download"></i> 下载
                        </a>
                    </div>
                </div>
                
                <div class="info-table">
                    <table class="audio-info-table">
                        <tr>
                            <td class="info-label">Radar:</td>
                            <td class="info-value">HR/RR ${audioData.radar.hr}/${audioData.radar.rr}</td>
                        </tr>
                        <tr>
                            <td class="info-label">Agent:</td>
                            <td class="info-value">Tonal Mode: ${audioData.agent.tonalMode}, Instruments: ${audioData.agent.instruments}, Tempo: ${audioData.agent.tempo}, Use-case: ${audioData.agent.useCase}</td>
                        </tr>
                    </table>
                </div>
            </div>
        `;
        
        return audioDemo;
    } catch (error) {
        console.error('Error creating audio demo:', error);
        const errorDemo = document.createElement('div');
        errorDemo.className = 'audio-demo-item error';
        errorDemo.innerHTML = `
            <div class="error-message">
                <i class="fas fa-exclamation-triangle"></i>
                <h3>创建音频演示时出错</h3>
                <p>请检查配置数据</p>
            </div>
        `;
        return errorDemo;
    }
}


// 滚动动画效果
function initializeScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, observerOptions);

    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.demo-card, .parameter-card, .feature');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// 音频播放器功能
function initializeAudioPlayers() {
    const audioElements = document.querySelectorAll('audio');
    
    audioElements.forEach(audio => {
        // 添加播放状态指示器
        audio.addEventListener('play', function() {
            this.closest('.demo-card').classList.add('playing');
        });
        
        audio.addEventListener('pause', function() {
            this.closest('.demo-card').classList.remove('playing');
        });
        
        audio.addEventListener('ended', function() {
            this.closest('.demo-card').classList.remove('playing');
        });
    });
}

// 参数表标签页功能
function initializeParameterTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('onclick').match(/'([^']+)'/)[1];
            showTab(targetTab);
        });
    });
}

function showTab(tabName) {
    // 隐藏所有标签内容
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // 移除所有按钮的激活状态
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // 显示目标标签内容
    const targetContent = document.getElementById(tabName);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    // 激活对应的按钮
    const targetButton = document.querySelector(`[onclick="showTab('${tabName}')"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
}

// 工具提示功能
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            showTooltip(this);
        });
        
        element.addEventListener('mouseleave', function() {
            hideTooltip();
        });
    });
}

function showTooltip(element) {
    const tooltipText = element.getAttribute('data-tooltip');
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip-popup';
    tooltip.textContent = tooltipText;
    tooltip.style.cssText = `
        position: absolute;
        background: #1f2937;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.8rem;
        z-index: 1000;
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    document.body.appendChild(tooltip);
    
    // 计算位置
    const rect = element.getBoundingClientRect();
    tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
    tooltip.style.top = rect.top - tooltip.offsetHeight - 8 + 'px';
    
    // 显示动画
    setTimeout(() => {
        tooltip.style.opacity = '1';
    }, 10);
    
    element._tooltip = tooltip;
}

function hideTooltip() {
    const tooltip = document.querySelector('.tooltip-popup');
    if (tooltip) {
        tooltip.remove();
    }
}

// 音乐生成功能
function generateMusic() {
    const button = event.target;
    const originalText = button.innerHTML;
    
    // 显示加载状态
    button.innerHTML = '<div class="loading"></div> 生成中...';
    button.disabled = true;
    
    // 模拟生成过程
    setTimeout(() => {
        // 创建新的demo卡片
        const newDemoCard = createNewDemoCard();
        const demoGrid = document.querySelector('.demo-grid');
        demoGrid.appendChild(newDemoCard);
        
        // 滚动到新生成的卡片
        newDemoCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // 恢复按钮状态
        button.innerHTML = originalText;
        button.disabled = false;
        
        // 显示成功消息
        showNotification('音乐生成成功！', 'success');
    }, 3000);
}

function createNewDemoCard() {
    const card = document.createElement('div');
    card.className = 'demo-card fade-in-up';
    
    const styles = ['Ambient', 'Folk', 'Blues', 'Funk'];
    const randomStyle = styles[Math.floor(Math.random() * styles.length)];
    
    card.innerHTML = `
        <div class="demo-header">
            <h3>${randomStyle}风格</h3>
            <span class="demo-tag">${randomStyle}</span>
        </div>
        <div class="audio-player">
            <audio controls preload="metadata">
                <source src="audio/generated-${randomStyle.toLowerCase()}-demo.mp3" type="audio/mpeg">
                您的浏览器不支持音频播放。
            </audio>
        </div>
        <div class="demo-info">
            <p><strong>生成参数:</strong> ${randomStyle}音乐风格，随机调性，${Math.floor(Math.random() * 100) + 80} BPM</p>
            <p><strong>时长:</strong> ${Math.floor(Math.random() * 3) + 2}:${Math.floor(Math.random() * 60).toString().padStart(2, '0')}</p>
            <p><strong>质量:</strong> 高保真</p>
        </div>
    `;
    
    return card;
}

// 下载功能
function downloadAll() {
    const audioElements = document.querySelectorAll('audio source');
    let downloadCount = 0;
    
    audioElements.forEach((source, index) => {
        setTimeout(() => {
            const link = document.createElement('a');
            link.href = source.src;
            link.download = `breath-music-demo-${index + 1}.mp3`;
            link.click();
            downloadCount++;
            
            if (downloadCount === audioElements.length) {
                showNotification('所有音频文件下载完成！', 'success');
            }
        }, index * 500);
    });
}

// 参数配置功能
function exportConfig() {
    const config = {
        musicGeneration: {
            temperature: 0.8,
            max_length: 512,
            top_p: 0.9,
            repetition_penalty: 1.1,
            tempo: 120,
            key_signature: 'C',
            time_signature: '4/4',
            instrument_count: 4
        },
        styleTransfer: {
            style_weight: 0.7,
            content_weight: 0.3,
            style_layers: [1,2,3,4,5],
            iterations: 1000
        },
        harmonyAnalysis: {
            chord_complexity: 'medium',
            progression_length: 8,
            voice_leading: 'smooth',
            harmonic_rhythm: 2
        },
        rhythmPattern: {
            rhythm_density: 0.6,
            syncopation_level: 0.4,
            pattern_length: 16,
            accent_pattern: 'standard'
        }
    };
    
    const configJson = JSON.stringify(config, null, 2);
    const blob = new Blob([configJson], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'breath-music-config.json';
    link.click();
    
    URL.revokeObjectURL(url);
    showNotification('配置文件已导出！', 'success');
}

function resetConfig() {
    if (confirm('确定要重置所有参数到默认值吗？')) {
        // 这里可以添加重置逻辑
        showNotification('参数已重置为默认值！', 'info');
    }
}

function applyConfig() {
    const button = event.target;
    const originalText = button.innerHTML;
    
    button.innerHTML = '<div class="loading"></div> 应用中...';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.disabled = false;
        showNotification('配置已应用！', 'success');
    }, 2000);
}

// 通知系统
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // 添加通知样式
    notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 15px;
        min-width: 300px;
        animation: slideInRight 0.3s ease-out;
    `;
    
    document.body.appendChild(notification);
    
    // 自动移除
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease-in';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, 4000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'check-circle',
        error: 'exclamation-circle',
        warning: 'exclamation-triangle',
        info: 'info-circle'
    };
    return icons[type] || 'info-circle';
}

function getNotificationColor(type) {
    const colors = {
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
        info: '#6366f1'
    };
    return colors[type] || '#6366f1';
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 5px;
        border-radius: 50%;
        transition: background 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
    }
    
    .demo-card.playing {
        border-color: #6366f1;
        box-shadow: 0 10px 30px rgba(99, 102, 241, 0.2);
    }
    
    .demo-card.playing .demo-header h3 {
        color: #6366f1;
    }
`;
document.head.appendChild(style);

// 键盘快捷键
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K 快速生成音乐
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        generateMusic();
    }
    
    // ESC 关闭移动端菜单
    if (e.key === 'Escape') {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// 性能优化：防抖函数
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// 优化滚动事件
const optimizedScrollHandler = debounce(function() {
    // 滚动相关的处理逻辑
}, 10);

window.addEventListener('scroll', optimizedScrollHandler);

// 错误处理
window.addEventListener('error', function(e) {
    console.error('页面发生错误:', e.error);
    showNotification('页面发生错误，请刷新重试', 'error');
});

// 页面可见性API - 暂停/恢复音频
document.addEventListener('visibilitychange', function() {
    const audioElements = document.querySelectorAll('audio');
    
    if (document.hidden) {
        // 页面隐藏时暂停所有音频
        audioElements.forEach(audio => {
            if (!audio.paused) {
                audio.pause();
            }
        });
    }
});

// 导出全局函数供HTML调用
window.generateMusic = generateMusic;
window.downloadAll = downloadAll;
window.showTab = showTab;
window.exportConfig = exportConfig;
window.resetConfig = resetConfig;
window.applyConfig = applyConfig;
