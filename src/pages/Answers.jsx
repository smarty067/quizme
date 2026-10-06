import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { questionSets } from '../data/questions';
import { useState } from 'react';

export default function Answers() {
  const navigate = useNavigate();
  const [expandedSet, setExpandedSet] = useState(null);

  return (
    <div className="answers-page">
      <motion.button
        className="back-btn"
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ← HOME
      </motion.button>

      <motion.div
        className="answers-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="answers-title">🧠 ANSWERS</h1>
        <p className="answers-note">Complete answer key for all combinations</p>
      </motion.div>

      <div className="answers-list">
        {questionSets.map((set) => (
          <motion.div
            key={set.id}
            className="answer-set"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: set.id * 0.1 }}
          >
            <button
              className={`answer-set-header ${expandedSet === set.id ? 'expanded' : ''}`}
              onClick={() => setExpandedSet(expandedSet === set.id ? null : set.id)}
              style={{ '--set-color': set.color }}
            >
              <span className="set-icon">{set.icon}</span>
              <span className="set-name">{set.name}</span>
              <span className="set-arrow">{expandedSet === set.id ? '▲' : '▼'}</span>
            </button>

            {expandedSet === set.id && (
              <motion.div
                className="answer-questions"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {set.questions.map((q, i) => (
                  <div key={q.id} className="answer-item">
                    <div className="answer-item-header">
                      <span className="answer-q-num">Q{i + 1}</span>
                      <span className="answer-q-title">{q.title}</span>
                      <span className="answer-q-cat">{q.category}</span>
                    </div>
                    <div className="answer-q-question">{q.question}</div>
                    <div className="answer-correct">
                      <span className="answer-label-text">Answer:</span>
                      <span className="answer-value">{q.answer}</span>
                    </div>
                    {q.explanation && (
                      <div className="answer-explanation">
                        <span className="answer-label-text">Explanation:</span>
                        <span>{q.explanation}</span>
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
