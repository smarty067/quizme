import { useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import AnswerOption from '../components/AnswerOption';
import Lifelines from '../components/Lifelines';
import GameOver from '../components/GameOver';
import Victory from '../components/Victory';
import Countdown from '../components/Countdown';
import { useTimer } from '../hooks/useTimer';
import { useGame } from '../hooks/useGame';
import { TOTAL_QUESTIONS, DEFAULT_TIMER } from '../utils/gameLogic';

export default function Game({ gameSet, playerName, stallMode, sounds }) {
  const navigate = useNavigate();
  const game = useGame();
  const [showCountdown, setShowCountdown] = useState(true);
  const [memoryPhaseActive, setMemoryPhaseActive] = useState(false);
  const timerStartedRef = useRef(false);

  const handleTimeout = useCallback(() => {
    game.handleTimeout();
    sounds?.playTimeout?.();
  }, [game.handleTimeout, sounds]);

  const timer = useTimer(DEFAULT_TIMER, handleTimeout);

  // Start game when component mounts
  useEffect(() => {
    if (gameSet && playerName) {
      game.startGame(gameSet, playerName);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Handle memory phase for memory questions
  useEffect(() => {
    if (game.gameStatus === 'playing' && game.currentQuestion) {
      if (game.currentQuestion.type === 'memory') {
        setMemoryPhaseActive(true);
        timer.stop();
      } else if (!showCountdown && !timerStartedRef.current) {
        timer.reset(DEFAULT_TIMER);
        timer.start();
        timerStartedRef.current = true;
      }
    }
  }, [game.currentQuestionIndex, game.gameStatus, game.currentQuestion, showCountdown]);

  // Reset timer start tracking on question change
  useEffect(() => {
    timerStartedRef.current = false;
  }, [game.currentQuestionIndex]);

  const handleCountdownComplete = useCallback(() => {
    setShowCountdown(false);
    if (game.currentQuestion?.type === 'memory') {
      setMemoryPhaseActive(true);
    } else {
      timer.reset(DEFAULT_TIMER);
      timer.start();
      timerStartedRef.current = true;
    }
  }, [game.currentQuestion, timer]);

  const handleMemoryDone = useCallback(() => {
    setMemoryPhaseActive(false);
    timer.reset(DEFAULT_TIMER);
    timer.start();
    timerStartedRef.current = true;
  }, [timer]);

  const handleAnswer = useCallback((answer) => {
    if (game.gameStatus !== 'playing' || memoryPhaseActive) return;
    timer.stop();
    game.handleAnswer(answer, timer.timeLeft);

    if (answer === game.currentQuestion?.answer) {
      sounds?.playCorrect?.();
    } else {
      sounds?.playWrong?.();
    }
  }, [game, timer, memoryPhaseActive, sounds]);

  // Start timer for next question after correct answer transition
  useEffect(() => {
    if (game.gameStatus === 'playing' && !showCountdown && !memoryPhaseActive && !timerStartedRef.current) {
      if (game.currentQuestion?.type === 'memory') {
        setMemoryPhaseActive(true);
      } else {
        timer.reset(DEFAULT_TIMER);
        timer.start();
        timerStartedRef.current = true;
      }
    }
  }, [game.gameStatus, game.currentQuestionIndex, showCountdown, memoryPhaseActive]);

  const handleExtraTime = useCallback(() => {
    const extra = game.useExtraTime();
    if (extra) {
      timer.addTime(extra);
      sounds?.playClick?.();
    }
  }, [game, timer, sounds]);

  const handleFiftyFifty = useCallback(() => {
    game.useFiftyFifty();
    sounds?.playClick?.();
  }, [game, sounds]);

  const handleHint = useCallback(() => {
    game.useHint();
    sounds?.playClick?.();
  }, [game, sounds]);

  const handleRetry = useCallback(() => {
    game.startGame(gameSet, playerName);
    setShowCountdown(true);
    timerStartedRef.current = false;
    timer.reset(DEFAULT_TIMER);
  }, [game, gameSet, playerName, timer]);

  const handleHome = useCallback(() => {
    navigate('/');
  }, [navigate]);

  const handlePlayAgain = useCallback(() => {
    if (stallMode) {
      navigate('/setup');
    } else {
      handleRetry();
    }
  }, [stallMode, navigate, handleRetry]);

  // Save score on victory
  useEffect(() => {
    if (game.gameStatus === 'victory') {
      game.saveScore();
    }
  }, [game.gameStatus]);

  // Determine which options to show (affected by 50/50)
  const visibleOptions = game.activeFiftyFifty || game.currentQuestion?.options || [];
  const isDisabled = game.gameStatus !== 'playing' || memoryPhaseActive;

  // Countdown warning sound
  useEffect(() => {
    if (timer.timeLeft <= 5 && timer.timeLeft > 0 && timer.isRunning) {
      sounds?.playCountdown?.();
    }
  }, [timer.timeLeft, timer.isRunning]);

  if (showCountdown) {
    return <Countdown onComplete={handleCountdownComplete} />;
  }

  return (
    <div className="game-page">
      <Header
        questionIndex={game.currentQuestionIndex}
        totalQuestions={game.totalQuestions}
      />

      <div className="game-body">
        {game.gameStatus !== 'wrong' && game.gameStatus !== 'timeout' && game.gameStatus !== 'victory' && (
          <>
            <Timer timeLeft={timer.timeLeft} isRunning={timer.isRunning} />
            <ProgressBar current={game.currentQuestionIndex} total={game.totalQuestions} />

            <AnimatePresence mode="wait">
              <QuestionCard
                key={game.currentQuestionIndex}
                question={game.currentQuestion}
                showMemory={memoryPhaseActive}
                onMemoryDone={handleMemoryDone}
              />
            </AnimatePresence>

            {/* Hint display */}
            {game.showHint && game.currentQuestion?.hint && (
              <motion.div
                className="hint-box"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                💡 {game.currentQuestion.hint}
              </motion.div>
            )}

            {/* Correct answer flash */}
            <AnimatePresence>
              {game.gameStatus === 'correct' && (
                <motion.div
                  className="correct-flash"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.3 }}
                >
                  ✓ CORRECT
                </motion.div>
              )}
            </AnimatePresence>

            {/* Answer options */}
            {!memoryPhaseActive && (
              <div className="answers-grid">
                {(game.currentQuestion?.options || []).map((option, i) => {
                  const isHidden = game.activeFiftyFifty && !game.activeFiftyFifty.includes(option);
                  if (isHidden) return (
                    <motion.div key={i} className="answer-option answer-eliminated" initial={{ opacity: 1 }} animate={{ opacity: 0.2 }}>
                      <span className="answer-label">{['A','B','C','D'][i]}</span>
                      <span className="answer-text" style={{ textDecoration: 'line-through' }}>{option}</span>
                    </motion.div>
                  );
                  return (
                    <AnswerOption
                      key={i}
                      option={option}
                      index={i}
                      onSelect={handleAnswer}
                      disabled={isDisabled || isHidden}
                      isSelected={game.selectedAnswer === option}
                      isCorrect={option === game.currentQuestion?.answer}
                      showResult={game.gameStatus === 'correct'}
                    />
                  );
                })}
              </div>
            )}

            {/* Lifelines */}
            <Lifelines
              lifelines={game.lifelines}
              onFiftyFifty={handleFiftyFifty}
              onExtraTime={handleExtraTime}
              onHint={handleHint}
              disabled={isDisabled}
            />
          </>
        )}

        {/* Game Over */}
        {(game.gameStatus === 'wrong' || game.gameStatus === 'timeout') && (
          <GameOver
            type={game.gameStatus}
            questionIndex={game.currentQuestionIndex}
            totalQuestions={game.totalQuestions}
            correctAnswers={game.correctAnswers}
            onRetry={handleRetry}
            onHome={handleHome}
          />
        )}

        {/* Victory */}
        {game.gameStatus === 'victory' && (
          <Victory
            playerName={game.playerName}
            score={game.getScore()}
            totalTime={game.getTotalGameTime()}
            lifelines={game.lifelines}
            onPlayAgain={handlePlayAgain}
            onHome={handleHome}
            playVictory={sounds?.playVictory}
          />
        )}
      </div>
    </div>
  );
}
