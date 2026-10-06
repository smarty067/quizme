import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export default function HowToPlay() {
  const navigate = useNavigate();

  const rules = [
    { icon: '🧠', title: '10 Questions', desc: 'Answer all 10 questions correctly to win. Each question is connected — pay attention to clues!' },
    { icon: '⏱️', title: '30 Seconds', desc: 'You have 30 seconds per question. When the timer hits 0, it\'s Game Over.' },
    { icon: '❌', title: 'One Mistake', desc: 'One wrong answer and the game ends immediately. Think carefully!' },
    { icon: '❤️', title: '3 Lifelines', desc: 'Use them wisely. Each can only be used once per game.' },
    { icon: '5️⃣0️⃣', title: '50/50', desc: 'Removes two wrong answers, leaving the correct one and one distractor.' },
    { icon: '⏰', title: '+10 Seconds', desc: 'Adds 10 extra seconds to the current question\'s timer.' },
    { icon: '💡', title: 'Hint', desc: 'Reveals a clue to help you find the correct answer.' },
    { icon: '🏆', title: 'Victory', desc: 'Complete all 10 questions to become a QUIZ ME Champion!' },
    { icon: '🔗', title: 'Connected Questions', desc: 'Questions are linked! A previous answer might help you with the next one. Stay alert.' },
    { icon: '📊', title: 'Scoring', desc: 'Score is based on correct answers, time remaining, and unused lifelines.' },
  ];

  return (
    <div className="howto-page">
      <motion.button
        className="back-btn"
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        ← HOME
      </motion.button>

      <motion.h1
        className="howto-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        HOW TO PLAY
      </motion.h1>

      <div className="howto-grid">
        {rules.map((rule, i) => (
          <motion.div
            key={i}
            className="howto-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <span className="howto-icon">{rule.icon}</span>
            <h3 className="howto-card-title">{rule.title}</h3>
            <p className="howto-card-desc">{rule.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.button
        className="btn btn-primary btn-large btn-glow"
        onClick={() => navigate('/setup')}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        START CHALLENGE
      </motion.button>
    </div>
  );
}
