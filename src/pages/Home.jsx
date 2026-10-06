import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { getLeaderboard } from '../utils/gameLogic';

export default function Home({ stallMode, setStallMode, soundEnabled, toggleSound }) {
  const navigate = useNavigate();
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const leaderboard = getLeaderboard();

  return (
    <div className="home-page">
      {/* Floating particles background */}
      <div className="particles">
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 7}s`,
          }} />
        ))}
      </div>

      {/* Top bar */}
      <div className="home-topbar">
        <motion.button
          className="icon-btn"
          onClick={toggleSound}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={soundEnabled ? 'Sound ON' : 'Sound OFF'}
        >
          {soundEnabled ? '🔊' : '🔇'}
        </motion.button>
        <motion.button
          className={`icon-btn stall-toggle ${stallMode ? 'stall-active' : ''}`}
          onClick={() => setStallMode(!stallMode)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={stallMode ? 'Stall Mode ON' : 'Stall Mode OFF'}
        >
          🎪
        </motion.button>
      </div>

      {/* Hero Section */}
      <motion.div
        className="home-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="home-brain-icon"
          animate={{ 
            rotate: [0, 5, -5, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          🧠
        </motion.div>

        <motion.h1
          className="home-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          QUIZ ME
        </motion.h1>

        <motion.p
          className="home-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          THINK BEFORE YOU SAY
        </motion.p>

        <motion.div
          className="home-tagline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="tagline-line">10 QUESTIONS.</div>
          <div className="tagline-line">30 SECONDS EACH.</div>
          <div className="tagline-line">ONE MISTAKE.</div>
          <div className="tagline-line highlight">GAME OVER.</div>
        </motion.div>

        <motion.div
          className="home-rules"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="rule-item">
            <span className="rule-icon">🧠</span>
            <span>10 Questions</span>
          </div>
          <div className="rule-item">
            <span className="rule-icon">⏱️</span>
            <span>30 Seconds</span>
          </div>
          <div className="rule-item">
            <span className="rule-icon">❤️</span>
            <span>3 Lifelines</span>
          </div>
          <div className="rule-item">
            <span className="rule-icon">❌</span>
            <span>1 Wrong = Game Over</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Buttons */}
      <motion.div
        className="home-buttons"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.button
          className="btn btn-primary btn-glow btn-large"
          onClick={() => navigate('/setup')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          START CHALLENGE
        </motion.button>

        <motion.button
          className="btn btn-secondary"
          onClick={() => navigate('/how-to-play')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          HOW TO PLAY
        </motion.button>

        <motion.button
          className="btn btn-ghost"
          onClick={() => setShowLeaderboard(!showLeaderboard)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          🏆 LEADERBOARD
        </motion.button>

        <motion.button
          className="btn btn-outline btn-small"
          onClick={() => navigate('/answers')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          📖 ANSWERS
        </motion.button>
      </motion.div>

      {/* Leaderboard Modal */}
      {showLeaderboard && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setShowLeaderboard(false)}
        >
          <motion.div
            className="modal-card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="modal-title">🏆 LEADERBOARD</h2>
            <p className="modal-note">Local device scores only</p>
            {leaderboard.length === 0 ? (
              <p className="modal-empty">No scores yet. Be the first to play!</p>
            ) : (
              <div className="leaderboard-list">
                {leaderboard.map((entry, i) => (
                  <div key={i} className={`leaderboard-row ${i < 3 ? 'top-three' : ''}`}>
                    <span className="lb-rank">{i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${i + 1}`}</span>
                    <span className="lb-name">{entry.name}</span>
                    <span className="lb-combo">{entry.combination}</span>
                    <span className="lb-score">{entry.score}</span>
                  </div>
                ))}
              </div>
            )}
            <button className="btn btn-secondary" onClick={() => setShowLeaderboard(false)}>CLOSE</button>
          </motion.div>
        </motion.div>
      )}

      {stallMode && (
        <div className="stall-badge">
          🎪 STALL MODE
        </div>
      )}
    </div>
  );
}
