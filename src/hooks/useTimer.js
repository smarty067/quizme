import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Custom hook for the countdown timer.
 * @param {number} initialTime - Starting time in seconds
 * @param {function} onTimeout - Callback when timer reaches 0
 * @returns {object} Timer state and controls
 */
export function useTimer(initialTime = 30, onTimeout) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);
  const onTimeoutRef = useRef(onTimeout);

  // Keep the callback ref updated
  useEffect(() => {
    onTimeoutRef.current = onTimeout;
  }, [onTimeout]);

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const reset = useCallback((newTime) => {
    stop();
    setTimeLeft(newTime ?? initialTime);
  }, [initialTime, stop]);

  const addTime = useCallback((seconds) => {
    setTimeLeft((prev) => {
      const maxTimer = 60; // configurable max
      return Math.min(prev + seconds, maxTimer);
    });
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
          setIsRunning(false);
          // Use setTimeout to avoid state update during render
          setTimeout(() => onTimeoutRef.current?.(), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning]);

  return {
    timeLeft,
    isRunning,
    start,
    stop,
    reset,
    addTime,
  };
}
