import { motion } from 'framer-motion';

export default function GameOver({ type, questionIndex, totalQuestions, correctAnswers, onRetry, onHome }) {
  const isTimeout = type === 'timeout';

  return (
    <motion.div
      className="game-over-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="game-over-card"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <motion.div
          className="game-over-icon"
          initial={{ rotate: -180, scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{ delay: 0.2, type: 'spring' }}
        >
          {isTimeout ? '⏰' : '❌'}
        </motion.div>

        <h2 className="game-over-title">
          {isTimeout ? "TIME'S UP!" : 'GAME OVER'}
        </h2>

        {!isTimeout && (
          <p className="game-over-subtitle">Wrong answer!</p>
        )}

        <div className="game-over-stats">
          <div className="stat-row">
            <span>You reached</span>
            <span className="stat-value">Question {questionIndex + 1} / {totalQuestions}</span>
          </div>
          <div className="stat-row">
            <span>Correct answers</span>
            <span className="stat-value">{correctAnswers} / {totalQuestions}</span>
          </div>
        </div>

        <div className="game-over-buttons">
          <motion.button
            className="btn btn-primary"
            onClick={onRetry}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            TRY AGAIN
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            onClick={onHome}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            HOME
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}
