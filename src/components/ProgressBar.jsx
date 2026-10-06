import { motion } from 'framer-motion';

export default function ProgressBar({ current, total }) {
  return (
    <div className="progress-bar">
      {Array.from({ length: total }, (_, i) => (
        <motion.div
          key={i}
          className={`progress-dot ${i < current ? 'progress-dot-done' : i === current ? 'progress-dot-active' : 'progress-dot-empty'}`}
          initial={i === current ? { scale: 0 } : false}
          animate={i === current ? { scale: 1 } : {}}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {i < current ? '✓' : i + 1}
        </motion.div>
      ))}
    </div>
  );
}
