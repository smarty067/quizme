import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function QuestionCard({ question, showMemory, onMemoryDone }) {
  const [memoryVisible, setMemoryVisible] = useState(false);

  useEffect(() => {
    if (question?.type === 'memory' && showMemory) {
      setMemoryVisible(true);
      const timer = setTimeout(() => {
        setMemoryVisible(false);
        onMemoryDone?.();
      }, question.memoryDuration || 2000);
      return () => clearTimeout(timer);
    }
  }, [question, showMemory, onMemoryDone]);

  if (!question) return null;

  return (
    <motion.div
      className="question-card"
      key={question.id + '-' + question.title}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <div className="question-category">{question.category}</div>
      <h2 className="question-title">{question.title}</h2>

      {/* Memory game: show sequence first */}
      {question.type === 'memory' && memoryVisible && (
        <motion.div
          className="memory-sequence"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="memory-label">MEMORIZE THIS!</div>
          <div className="memory-items">
            {question.memorySequence.map((item, i) => (
              <motion.span
                key={i}
                className="memory-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                {item}
              </motion.span>
            ))}
          </div>
          <div className="memory-timer-bar">
            <motion.div
              className="memory-timer-fill"
              initial={{ width: '100%' }}
              animate={{ width: '0%' }}
              transition={{ duration: (question.memoryDuration || 2000) / 1000, ease: 'linear' }}
            />
          </div>
        </motion.div>
      )}

      {/* Spot difference: show grid */}
      {question.type === 'spot-difference' && question.displaySequence && (
        <div className="spot-grid">
          {question.displaySequence.map((item, i) => (
            <span key={i} className="spot-item">{item}</span>
          ))}
        </div>
      )}

      {/* Regular question text (shown after memory phase for memory questions) */}
      {!(question.type === 'memory' && memoryVisible) && (
        <p className="question-text">{question.question}</p>
      )}
    </motion.div>
  );
}
