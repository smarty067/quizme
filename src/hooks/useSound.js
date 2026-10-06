import { useRef, useCallback, useEffect, useState } from 'react';

// Simple audio manager using Web Audio API oscillators for sound effects
// No external files needed

const AudioContext = window.AudioContext || window.webkitAudioContext;

export function useSoundEffects() {
  const ctxRef = useRef(null);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    try {
      return localStorage.getItem('mindexe_sound') !== 'off';
    } catch {
      return true;
    }
  });

  const getCtx = useCallback(() => {
    if (!ctxRef.current) {
      try {
        ctxRef.current = new AudioContext();
      } catch {
        return null;
      }
    }
    if (ctxRef.current.state === 'suspended') {
      ctxRef.current.resume();
    }
    return ctxRef.current;
  }, []);

  const playTone = useCallback((frequency, duration, type = 'sine', volume = 0.15) => {
    if (!soundEnabled) return;
    const ctx = getCtx();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.type = type;
    osc.frequency.setValueAtTime(frequency, ctx.currentTime);
    gain.gain.setValueAtTime(volume, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  }, [soundEnabled, getCtx]);

  const playClick = useCallback(() => {
    playTone(800, 0.08, 'sine', 0.1);
  }, [playTone]);

  const playCorrect = useCallback(() => {
    if (!soundEnabled) return;
    const ctx = getCtx();
    if (!ctx) return;
    // Rising two-tone
    setTimeout(() => playTone(523, 0.15, 'sine', 0.15), 0);
    setTimeout(() => playTone(783, 0.2, 'sine', 0.15), 100);
  }, [soundEnabled, getCtx, playTone]);

  const playWrong = useCallback(() => {
    if (!soundEnabled) return;
    // Descending buzz
    playTone(300, 0.3, 'sawtooth', 0.08);
    setTimeout(() => playTone(200, 0.4, 'sawtooth', 0.06), 200);
  }, [soundEnabled, playTone]);

  const playTimeout = useCallback(() => {
    if (!soundEnabled) return;
    playTone(440, 0.15, 'square', 0.08);
    setTimeout(() => playTone(330, 0.15, 'square', 0.08), 200);
    setTimeout(() => playTone(220, 0.4, 'square', 0.06), 400);
  }, [soundEnabled, playTone]);

  const playCountdown = useCallback(() => {
    playTone(660, 0.1, 'sine', 0.08);
  }, [playTone]);

  const playVictory = useCallback(() => {
    if (!soundEnabled) return;
    const ctx = getCtx();
    if (!ctx) return;
    const notes = [523, 659, 783, 1046];
    notes.forEach((freq, i) => {
      setTimeout(() => playTone(freq, 0.3, 'sine', 0.12), i * 150);
    });
  }, [soundEnabled, getCtx, playTone]);

  const toggleSound = useCallback(() => {
    setSoundEnabled((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('mindexe_sound', next ? 'on' : 'off');
      } catch {}
      return next;
    });
  }, []);

  return {
    soundEnabled,
    toggleSound,
    playClick,
    playCorrect,
    playWrong,
    playTimeout,
    playCountdown,
    playVictory,
  };
}
