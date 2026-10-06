import { motion } from 'framer-motion';
import { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { formatTime } from '../utils/gameLogic';

export default function Victory({ playerName, score, totalTime, lifelines, onPlayAgain, onHome, playVictory }) {
  useEffect(() => {
    // Fire confetti!
    const duration = 4000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#00f0ff', '#a855f7', '#f59e0b', '#ef4444', '#22c55e'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#00f0ff', '#a855f7', '#f59e0b', '#ef4444', '#22c55e'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
    playVictory?.();
  }, []);

  const unusedCount = [lifelines.fiftyFifty, lifelines.extraTime, lifelines.hint]
    .filter((used) => !used).length;

  return (
    <motion.div
      className="victory-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="victory-card"
        initial={{ scale: 0, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 150, damping: 15, delay: 0.2 }}
      >
        <motion.div
          className="victory-emoji"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: 'spring' }}
        >
          🎉
        </motion.div>

        <motion.h1
          className="victory-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          YOU BEAT QUIZ ME!
        </motion.h1>

        <motion.p
          className="victory-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          Your brain survived all 10 questions.
        </motion.p>

        <motion.div
          className="victory-badge"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, type: 'spring' }}
        >
          <span className="badge-icon">🏆</span>
          <span className="badge-text">QUIZ ME CHAMPION</span>
        </motion.div>

        <motion.div
          className="victory-stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <div className="victory-stat">
            <span className="stat-label">CORRECT</span>
            <span className="stat-big">10 / 10</span>
          </div>
          <div className="victory-stat">
            <span className="stat-label">TIME TAKEN</span>
            <span className="stat-big">{formatTime(totalTime)}</span>
          </div>
          <div className="victory-stat">
            <span className="stat-label">LIFELINES USED</span>
            <span className="stat-big">{3 - unusedCount} / 3</span>
          </div>
          <div className="victory-stat highlight">
            <span className="stat-label">SCORE</span>
            <span className="stat-big">{score.finalScore}</span>
          </div>
        </motion.div>

        <div className="victory-score-breakdown">
          <div className="breakdown-row">
            <span>Base Score</span>
            <span>{score.baseScore}</span>
          </div>
          <div className="breakdown-row">
            <span>Time Bonus</span>
            <span>+{score.timeBonus}</span>
          </div>
          <div className="breakdown-row">
            <span>Lifeline Bonus</span>
            <span>+{score.lifelineBonus}</span>
          </div>
        </div>

        <div className="victory-buttons">
          <motion.button
            className="btn btn-primary btn-glow"
            onClick={onPlayAgain}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY AGAIN
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
