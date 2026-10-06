import { useState, useCallback, useRef } from 'react';
import { calculateScore, applyFiftyFifty, saveToLeaderboard, TOTAL_QUESTIONS, DEFAULT_TIMER, EXTRA_TIME } from '../utils/gameLogic';

/**
 * Main game state hook. Manages all game logic.
 */
export function useGame() {
  const [playerName, setPlayerName] = useState('');
  const [selectedSet, setSelectedSet] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameStatus, setGameStatus] = useState('idle'); // idle | playing | correct | wrong | timeout | victory
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalTimeUsed, setTotalTimeUsed] = useState(0);
  const [totalRemainingTime, setTotalRemainingTime] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showMemoryPhase, setShowMemoryPhase] = useState(false);

  // Lifelines
  const [lifelines, setLifelines] = useState({
    fiftyFifty: false,
    extraTime: false,
    hint: false,
  });
  const [activeFiftyFifty, setActiveFiftyFifty] = useState(null);
  const [showHint, setShowHint] = useState(false);

  // Track time per question for scoring
  const questionStartTimeRef = useRef(Date.now());
  const gameStartTimeRef = useRef(Date.now());

  const currentQuestion = selectedSet?.questions?.[currentQuestionIndex] || null;
  const totalQuestions = Math.min(selectedSet?.questions?.length || 0, TOTAL_QUESTIONS);

  const startGame = useCallback((questions, name) => {
    setPlayerName(name);
    setSelectedSet(questions);
    setCurrentQuestionIndex(0);
    setGameStatus('playing');
    setCorrectAnswers(0);
    setTotalTimeUsed(0);
    setTotalRemainingTime(0);
    setSelectedAnswer(null);
    setLifelines({ fiftyFifty: false, extraTime: false, hint: false });
    setActiveFiftyFifty(null);
    setShowHint(false);
    setShowMemoryPhase(false);
    questionStartTimeRef.current = Date.now();
    gameStartTimeRef.current = Date.now();
  }, []);

  const handleAnswer = useCallback((answer, timeLeft) => {
    if (gameStatus !== 'playing') return;

    setSelectedAnswer(answer);
    const timeUsed = DEFAULT_TIMER - timeLeft;
    setTotalTimeUsed((prev) => prev + timeUsed);
    setTotalRemainingTime((prev) => prev + timeLeft);

    if (answer === currentQuestion?.answer) {
      setCorrectAnswers((prev) => prev + 1);
      setGameStatus('correct');

      // Check if this was the last question
      setTimeout(() => {
        if (currentQuestionIndex + 1 >= totalQuestions) {
          setGameStatus('victory');
        } else {
          setCurrentQuestionIndex((prev) => prev + 1);
          setSelectedAnswer(null);
          setActiveFiftyFifty(null);
          setShowHint(false);
          setShowMemoryPhase(false);
          setGameStatus('playing');
          questionStartTimeRef.current = Date.now();
        }
      }, 1200);
    } else {
      setGameStatus('wrong');
    }
  }, [gameStatus, currentQuestion, currentQuestionIndex, totalQuestions]);

  const handleTimeout = useCallback(() => {
    if (gameStatus === 'playing') {
      setGameStatus('timeout');
      setTotalTimeUsed((prev) => prev + DEFAULT_TIMER);
    }
  }, [gameStatus]);

  const useFiftyFifty = useCallback(() => {
    if (lifelines.fiftyFifty || !currentQuestion) return;
    setLifelines((prev) => ({ ...prev, fiftyFifty: true }));
    const remaining = applyFiftyFifty(currentQuestion.options, currentQuestion.answer);
    setActiveFiftyFifty(remaining);
  }, [lifelines.fiftyFifty, currentQuestion]);

  const useExtraTime = useCallback(() => {
    if (lifelines.extraTime) return false;
    setLifelines((prev) => ({ ...prev, extraTime: true }));
    return EXTRA_TIME;
  }, [lifelines.extraTime]);

  const useHint = useCallback(() => {
    if (lifelines.hint || !currentQuestion) return;
    setLifelines((prev) => ({ ...prev, hint: true }));
    setShowHint(true);
  }, [lifelines.hint, currentQuestion]);

  const getScore = useCallback(() => {
    const unusedLifelines = [lifelines.fiftyFifty, lifelines.extraTime, lifelines.hint]
      .filter((used) => !used).length;
    return calculateScore(correctAnswers, totalRemainingTime, unusedLifelines);
  }, [correctAnswers, totalRemainingTime, lifelines]);

  const getTotalGameTime = useCallback(() => {
    return Math.floor((Date.now() - gameStartTimeRef.current) / 1000);
  }, []);

  const saveScore = useCallback(() => {
    const score = getScore();
    const entry = {
      name: playerName,
      score: score.finalScore,
      time: getTotalGameTime(),
      date: new Date().toISOString(),
      combination: selectedSet?.name || '',
      correctAnswers,
    };
    return saveToLeaderboard(entry);
  }, [playerName, getScore, getTotalGameTime, selectedSet, correctAnswers]);

  const resetGame = useCallback(() => {
    setGameStatus('idle');
    setCurrentQuestionIndex(0);
    setCorrectAnswers(0);
    setTotalTimeUsed(0);
    setTotalRemainingTime(0);
    setSelectedAnswer(null);
    setLifelines({ fiftyFifty: false, extraTime: false, hint: false });
    setActiveFiftyFifty(null);
    setShowHint(false);
    setShowMemoryPhase(false);
  }, []);

  return {
    // State
    playerName,
    selectedSet,
    currentQuestionIndex,
    currentQuestion,
    gameStatus,
    correctAnswers,
    totalQuestions,
    totalTimeUsed,
    totalRemainingTime,
    selectedAnswer,
    lifelines,
    activeFiftyFifty,
    showHint,
    showMemoryPhase,

    // Actions
    setPlayerName,
    setSelectedSet,
    startGame,
    handleAnswer,
    handleTimeout,
    useFiftyFifty,
    useExtraTime,
    useHint,
    getScore,
    getTotalGameTime,
    saveScore,
    resetGame,
    setShowMemoryPhase,
    setGameStatus,
  };
}
