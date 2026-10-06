import { motion } from 'framer-motion';

export default function Header({ questionIndex, totalQuestions, stallMode, onToggleStall }) {
  return (
    <header className="game-header">
      <div className="header-left">
        <span className="header-logo">QUIZ ME</span>
      </div>
      {questionIndex !== undefined && (
        <div className="header-right">
          <motion.span
            className="header-question-count"
            key={questionIndex}
            initial={{ scale: 1.3, color: '#00f0ff' }}
            animate={{ scale: 1, color: '#ffffff' }}
            transition={{ duration: 0.3 }}
          >
            QUESTION {questionIndex + 1} / {totalQuestions}
          </motion.span>
        </div>
      )}
    </header>
  );
}
