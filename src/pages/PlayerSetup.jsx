import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questionSets } from '../data/questions';

export default function PlayerSetup({ onStartGame, playClick }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: name, 2: challenge
  const [name, setName] = useState(() => {
    try { return localStorage.getItem('mindexe_name') || ''; } catch { return ''; }
  });
  const [selectedSet, setSelectedSet] = useState(null);

  const handleNameSubmit = () => {
    if (!name.trim()) return;
    try { localStorage.setItem('mindexe_name', name.trim()); } catch {}
    playClick?.();
    setStep(2);
  };

  const handleStart = () => {
    if (!selectedSet) return;
    playClick?.();
    onStartGame(selectedSet, name.trim());
  };

  return (
    <div className="setup-page">
      <motion.button
        className="back-btn"
        onClick={() => step === 1 ? navigate('/') : setStep(1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ← BACK
      </motion.button>

      <AnimatePresence mode="wait">
        {step === 1 ? (
          <motion.div
            key="name"
            className="setup-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <div className="setup-icon">👤</div>
            <h2 className="setup-title">ENTER YOUR NAME</h2>
            <input
              className="setup-input"
              type="text"
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleNameSubmit()}
              maxLength={20}
              autoFocus
            />
            <motion.button
              className="btn btn-primary btn-large"
              onClick={handleNameSubmit}
              disabled={!name.trim()}
              whileHover={name.trim() ? { scale: 1.05 } : {}}
              whileTap={name.trim() ? { scale: 0.95 } : {}}
            >
              NEXT →
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="challenge"
            className="setup-section"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
          >
            <h2 className="setup-title">SELECT CHALLENGE</h2>
            <p className="setup-player-name">Player: <strong>{name}</strong></p>

            <div className="challenge-grid">
              {questionSets.map((set) => (
                <motion.button
                  key={set.id}
                  className={`challenge-card ${selectedSet?.id === set.id ? 'challenge-selected' : ''}`}
                  onClick={() => { setSelectedSet(set); playClick?.(); }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  style={{ '--card-accent': set.color }}
                >
                  <span className="challenge-icon">{set.icon}</span>
                  <span className="challenge-name">{set.name}</span>
                  <span className="challenge-desc">{set.description}</span>
                  <span className="challenge-count">{set.questions.length} questions</span>
                </motion.button>
              ))}
            </div>

            <motion.button
              className="btn btn-primary btn-large btn-glow"
              onClick={handleStart}
              disabled={!selectedSet}
              whileHover={selectedSet ? { scale: 1.05 } : {}}
              whileTap={selectedSet ? { scale: 0.95 } : {}}
            >
              START GAME
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
