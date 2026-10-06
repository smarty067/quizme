// Game Logic Utilities — QUIZ ME

/**
 * Calculate the final score for a game session.
 * @param {number} correctAnswers - Number of correct answers
 * @param {number} totalRemainingTime - Total remaining time across all questions (seconds)
 * @param {number} unusedLifelines - Number of lifelines not used (0-3)
 * @returns {object} Score breakdown
 */
export function calculateScore(correctAnswers, totalRemainingTime, unusedLifelines) {
  const baseScore = correctAnswers * 100;
  const timeBonus = Math.floor(totalRemainingTime * 5);
  const lifelineBonus = unusedLifelines * 50;
  const finalScore = baseScore + timeBonus + lifelineBonus;

  return {
    baseScore,
    timeBonus,
    lifelineBonus,
    finalScore,
  };
}

/**
 * Apply 50/50 lifeline — removes two incorrect options.
 * @param {string[]} options - All options
 * @param {string} answer - The correct answer
 * @returns {string[]} Two options to keep (correct + one wrong)
 */
export function applyFiftyFifty(options, answer) {
  const wrongOptions = options.filter((opt) => opt !== answer);
  // Shuffle wrong options and keep one
  const shuffled = wrongOptions.sort(() => Math.random() - 0.5);
  const keptWrong = shuffled[0];
  // Return in original order
  return options.filter((opt) => opt === answer || opt === keptWrong);
}

/**
 * Get or initialize leaderboard from localStorage.
 * @param {string} key - localStorage key
 * @returns {Array} Leaderboard entries
 */
export function getLeaderboard(key = 'mindexe_leaderboard') {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/**
 * Save a score to the leaderboard (top 10 only).
 * @param {object} entry - { name, score, time, date, combination }
 * @param {string} key - localStorage key
 */
export function saveToLeaderboard(entry, key = 'mindexe_leaderboard') {
  const board = getLeaderboard(key);
  board.push(entry);
  board.sort((a, b) => b.score - a.score);
  const top10 = board.slice(0, 10);
  try {
    localStorage.setItem(key, JSON.stringify(top10));
  } catch {
    // localStorage might be full or unavailable
  }
  return top10;
}

/**
 * Format seconds into MM:SS display.
 * @param {number} totalSeconds
 * @returns {string}
 */
export function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Shuffle an array (Fisher-Yates).
 * @param {Array} array
 * @returns {Array} New shuffled array
 */
export function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Maximum timer value (configurable)
export const MAX_TIMER = 60;
export const DEFAULT_TIMER = 30;
export const EXTRA_TIME = 10;
export const TOTAL_QUESTIONS = 10;
