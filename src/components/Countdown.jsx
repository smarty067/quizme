import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Countdown({ onComplete }) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      onComplete();
      return;
    }
    const timer = setTimeout(() => setCount((c) => c - 1), 800);
    return () => clearTimeout(timer);
  }, [count, onComplete]);

  return (
    <div className="countdown-overlay">
      <AnimatePresence mode="wait">
        {count > 0 ? (
          <motion.div
            key={count}
            className="countdown-number"
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {count}
          </motion.div>
        ) : (
          <motion.div
            key="go"
            className="countdown-go"
            initial={{ scale: 2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            GO!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
