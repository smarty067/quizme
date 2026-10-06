import { motion } from 'framer-motion';

const labels = ['A', 'B', 'C', 'D'];

export default function AnswerOption({ option, index, onSelect, disabled, isSelected, isCorrect, showResult }) {
  const getClass = () => {
    if (showResult && isSelected && isCorrect) return 'answer-correct';
    if (showResult && isSelected && !isCorrect) return 'answer-wrong';
    if (isSelected) return 'answer-selected';
    return '';
  };

  return (
    <motion.button
      className={`answer-option ${getClass()}`}
      onClick={() => !disabled && onSelect(option)}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.2 }}
    >
      <span className="answer-label">{labels[index]}</span>
      <span className="answer-text">{option}</span>
    </motion.button>
  );
}
