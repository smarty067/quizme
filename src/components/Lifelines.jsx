import { motion } from 'framer-motion';

export default function Lifelines({ lifelines, onFiftyFifty, onExtraTime, onHint, disabled }) {
  return (
    <div className="lifelines-container">
      <motion.button
        className={`lifeline-btn ${lifelines.fiftyFifty ? 'lifeline-used' : ''}`}
        onClick={onFiftyFifty}
        disabled={lifelines.fiftyFifty || disabled}
        whileHover={!lifelines.fiftyFifty && !disabled ? { scale: 1.05 } : {}}
        whileTap={!lifelines.fiftyFifty && !disabled ? { scale: 0.95 } : {}}
      >
        {lifelines.fiftyFifty ? '✓' : '❤️'} 50/50
      </motion.button>

      <motion.button
        className={`lifeline-btn ${lifelines.extraTime ? 'lifeline-used' : ''}`}
        onClick={onExtraTime}
        disabled={lifelines.extraTime || disabled}
        whileHover={!lifelines.extraTime && !disabled ? { scale: 1.05 } : {}}
        whileTap={!lifelines.extraTime && !disabled ? { scale: 0.95 } : {}}
      >
        {lifelines.extraTime ? '✓' : '❤️'} +10 SEC
      </motion.button>

      <motion.button
        className={`lifeline-btn ${lifelines.hint ? 'lifeline-used' : ''}`}
        onClick={onHint}
        disabled={lifelines.hint || disabled}
        whileHover={!lifelines.hint && !disabled ? { scale: 1.05 } : {}}
        whileTap={!lifelines.hint && !disabled ? { scale: 0.95 } : {}}
      >
        {lifelines.hint ? '✓' : '❤️'} HINT
      </motion.button>
    </div>
  );
}
