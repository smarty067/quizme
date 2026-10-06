import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

export default function Timer({ timeLeft, isRunning }) {
  const prevTimeRef = useRef(timeLeft);

  useEffect(() => {
    prevTimeRef.current = timeLeft;
  }, [timeLeft]);

  const getTimerClass = () => {
    if (timeLeft <= 5) return 'timer-critical';
    if (timeLeft <= 10) return 'timer-warning';
    return 'timer-normal';
  };

  return (
    <div className={`timer-container ${getTimerClass()}`}>
      <div className="timer-icon">⏱</div>
      <motion.div
        className="timer-value"
        key={timeLeft}
        initial={{ scale: timeLeft <= 10 ? 1.2 : 1, y: -5 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ duration: 0.15 }}
      >
        {timeLeft}
      </motion.div>
      <div className="timer-bar-track">
        <motion.div
          className="timer-bar-fill"
          initial={false}
          animate={{
            width: `${(timeLeft / 30) * 100}%`,
          }}
          transition={{ duration: 0.5, ease: 'linear' }}
          style={{
            background:
              timeLeft <= 5
                ? 'linear-gradient(90deg, #ef4444, #ff0000)'
                : timeLeft <= 10
                ? 'linear-gradient(90deg, #f59e0b, #ef4444)'
                : 'linear-gradient(90deg, #00f0ff, #a855f7)',
          }}
        />
      </div>
    </div>
  );
}
