let clickAudioContext;
let typingSoundIntervalId = null;
let officeTickIntervalId = null;
let officeTickLevel = 1;
let officeTickFadeIntervalId = null;
let goodNightHumSource = null;
let goodNightHumGainNode = null;
let endingSongAudio = null;
let endingSongFadeIntervalId = null;

const getAudioContext = () => {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) {
        return null;
    }

    if (!clickAudioContext) {
        clickAudioContext = new AudioCtx();
    }

    if (clickAudioContext.state === "suspended") {
        clickAudioContext.resume();
    }

    return clickAudioContext;
};

export const playClickSound = () => {
    const audioContext = getAudioContext();
    if (!audioContext) {
        return;
    }

    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.type = "triangle";
    oscillator.frequency.setValueAtTime(2200, now);
    oscillator.frequency.exponentialRampToValueAtTime(1400, now + 0.012);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.06, now + 0.0015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.015);

    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start(now);
    oscillator.stop(now + 0.016);
};

export const startTypewriterSound = () => {
    const audioContext = getAudioContext();
    if (!audioContext) {
        return;
    }

    const makeTap = (startTime, freq) => {
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const highpass = audioContext.createBiquadFilter();
        const bandpass = audioContext.createBiquadFilter();

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(freq, startTime);
        oscillator.frequency.exponentialRampToValueAtTime(freq * 0.86, startTime + 0.012);

        highpass.type = "highpass";
        highpass.frequency.setValueAtTime(1100, startTime);
        bandpass.type = "bandpass";
        bandpass.frequency.setValueAtTime(1750, startTime);
        bandpass.Q.setValueAtTime(1.2, startTime);

        gain.gain.setValueAtTime(0.0001, startTime);
        gain.gain.exponentialRampToValueAtTime(0.022, startTime + 0.0012);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.014);

        oscillator.connect(highpass);
        highpass.connect(bandpass);
        bandpass.connect(gain);
        gain.connect(audioContext.destination);
        oscillator.start(startTime);
        oscillator.stop(startTime + 0.016);
    };

    if (typingSoundIntervalId) {
        window.clearInterval(typingSoundIntervalId);
        typingSoundIntervalId = null;
    }

    makeTap(audioContext.currentTime, 1220);
    typingSoundIntervalId = window.setInterval(() => {
        const minFreq = 1160;
        const maxFreq = 1320;
        const freq = minFreq + Math.random() * (maxFreq - minFreq);
        makeTap(audioContext.currentTime, freq);
    }, 92);
};

export const stopTypewriterSound = () => {
    if (!typingSoundIntervalId) {
        return;
    }

    window.clearInterval(typingSoundIntervalId);
    typingSoundIntervalId = null;
};

export const startOfficeTickSound = () => {
    const audioContext = getAudioContext();
    if (!audioContext) {
        return;
    }

    let isTick = true;
    const playTickTock = () => {
        const now = audioContext.currentTime;
        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();
        const bandpass = audioContext.createBiquadFilter();

        oscillator.type = "triangle";
        const baseFreq = isTick ? 980 : 760;
        const endFreq = isTick ? 720 : 560;
        const peakGain = (isTick ? 0.032 : 0.04) * officeTickLevel;

        oscillator.frequency.setValueAtTime(baseFreq, now);
        oscillator.frequency.exponentialRampToValueAtTime(endFreq, now + 0.028);

        bandpass.type = "bandpass";
        bandpass.frequency.setValueAtTime(isTick ? 1400 : 1100, now);
        bandpass.Q.setValueAtTime(1.8, now);

        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.exponentialRampToValueAtTime(peakGain, now + 0.0015);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.035);

        oscillator.connect(bandpass);
        bandpass.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start(now);
        oscillator.stop(now + 0.04);
        isTick = !isTick;
    };

    if (officeTickIntervalId) {
        window.clearInterval(officeTickIntervalId);
        officeTickIntervalId = null;
    }

    playTickTock();
    officeTickIntervalId = window.setInterval(() => {
        playTickTock();
    }, 520);
};

export const stopOfficeTickSound = () => {
    if (officeTickFadeIntervalId) {
        window.clearInterval(officeTickFadeIntervalId);
        officeTickFadeIntervalId = null;
    }
    if (!officeTickIntervalId) {
        return;
    }

    window.clearInterval(officeTickIntervalId);
    officeTickIntervalId = null;
};

export const fadeOfficeTickLevel = (targetLevel, durationMs = 500) => {
    const safeTarget = Math.max(0, Math.min(1, targetLevel));
    if (officeTickFadeIntervalId) {
        window.clearInterval(officeTickFadeIntervalId);
        officeTickFadeIntervalId = null;
    }
    if (durationMs <= 0) {
        officeTickLevel = safeTarget;
        return;
    }

    const startLevel = officeTickLevel;
    const startMs = Date.now();
    officeTickFadeIntervalId = window.setInterval(() => {
        const elapsed = Date.now() - startMs;
        const t = Math.min(1, elapsed / durationMs);
        officeTickLevel = startLevel + ((safeTarget - startLevel) * t);
        if (t >= 1) {
            window.clearInterval(officeTickFadeIntervalId);
            officeTickFadeIntervalId = null;
        }
    }, 30);
};

export const startGoodNightHumSound = () => {
    const audioContext = getAudioContext();
    if (!audioContext) {
        return;
    }
    if (goodNightHumSource || goodNightHumGainNode) {
        return;
    }

    const now = audioContext.currentTime;
    const source = audioContext.createBufferSource();
    const gain = audioContext.createGain();
    const lowpass = audioContext.createBiquadFilter();
    const sampleRate = audioContext.sampleRate;
    const frameCount = sampleRate * 2;
    const noiseBuffer = audioContext.createBuffer(1, frameCount, sampleRate);
    const data = noiseBuffer.getChannelData(0);
    let lastOut = 0;
    for (let i = 0; i < frameCount; i += 1) {
        const white = (Math.random() * 2) - 1;
        // Classic brown noise integrator with normalization.
        lastOut = (lastOut + (0.02 * white)) / 1.02;
        data[i] = lastOut * 3.5;
    }
    source.buffer = noiseBuffer;
    source.loop = true;

    const highpass = audioContext.createBiquadFilter();
    highpass.type = "highpass";
    highpass.frequency.setValueAtTime(28, now);
    lowpass.type = "lowpass";
    lowpass.frequency.setValueAtTime(210, now);
    lowpass.Q.setValueAtTime(0.72, now);

    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(0.012, now + 0.55);

    source.connect(highpass);
    highpass.connect(lowpass);
    lowpass.connect(gain);
    gain.connect(audioContext.destination);
    source.start(now);

    goodNightHumSource = source;
    goodNightHumGainNode = gain;
};

export const stopGoodNightHumSound = () => {
    if (!goodNightHumSource || !goodNightHumGainNode) {
        return;
    }

    const audioContext = getAudioContext();
    if (!audioContext) {
        goodNightHumSource = null;
        goodNightHumGainNode = null;
        return;
    }

    const now = audioContext.currentTime;
    const currentGain = Math.max(goodNightHumGainNode.gain.value, 0.0001);
    goodNightHumGainNode.gain.cancelScheduledValues(now);
    goodNightHumGainNode.gain.setValueAtTime(currentGain, now);
    goodNightHumGainNode.gain.exponentialRampToValueAtTime(0.0001, now + 0.42);
    goodNightHumSource.stop(now + 0.44);

    goodNightHumSource = null;
    goodNightHumGainNode = null;
};

export const startEndingSongFadeIn = (durationMs = 2800, targetVolume = 0.24) => {
    const safeTargetVolume = Math.max(0, Math.min(1, targetVolume));
    const safeDurationMs = Math.max(0, durationMs);
    if (!endingSongAudio) {
        endingSongAudio = new Audio("song.mp3");
        endingSongAudio.loop = true;
        endingSongAudio.preload = "auto";
    }

    if (endingSongFadeIntervalId) {
        window.clearInterval(endingSongFadeIntervalId);
        endingSongFadeIntervalId = null;
    }

    endingSongAudio.volume = 0.0001;
    endingSongAudio.currentTime = 0;
    endingSongAudio.play().catch(() => {});

    if (safeDurationMs === 0) {
        endingSongAudio.volume = safeTargetVolume;
        return;
    }

    const startMs = Date.now();
    endingSongFadeIntervalId = window.setInterval(() => {
        const elapsed = Date.now() - startMs;
        const t = Math.min(1, elapsed / safeDurationMs);
        endingSongAudio.volume = 0.0001 + ((safeTargetVolume - 0.0001) * t);
        if (t >= 1) {
            window.clearInterval(endingSongFadeIntervalId);
            endingSongFadeIntervalId = null;
        }
    }, 30);
};

export const stopEndingSong = () => {
    if (endingSongFadeIntervalId) {
        window.clearInterval(endingSongFadeIntervalId);
        endingSongFadeIntervalId = null;
    }
    if (!endingSongAudio) {
        return;
    }
    endingSongAudio.pause();
    endingSongAudio.currentTime = 0;
    endingSongAudio.volume = 0.0001;
};

export const fadeOutEndingSong = (durationMs = 900) => {
    const safeDurationMs = Math.max(0, durationMs);
    if (!endingSongAudio) {
        return;
    }
    if (endingSongFadeIntervalId) {
        window.clearInterval(endingSongFadeIntervalId);
        endingSongFadeIntervalId = null;
    }
    const startVolume = Math.max(endingSongAudio.volume, 0.0001);
    if (safeDurationMs === 0) {
        stopEndingSong();
        return;
    }

    const startMs = Date.now();
    endingSongFadeIntervalId = window.setInterval(() => {
        const elapsed = Date.now() - startMs;
        const t = Math.min(1, elapsed / safeDurationMs);
        endingSongAudio.volume = startVolume + ((0.0001 - startVolume) * t);
        if (t >= 1) {
            window.clearInterval(endingSongFadeIntervalId);
            endingSongFadeIntervalId = null;
            stopEndingSong();
        }
    }, 30);
};
