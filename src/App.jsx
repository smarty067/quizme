import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useCallback } from 'react';
import Home from './pages/Home';
import PlayerSetup from './pages/PlayerSetup';
import Game from './pages/Game';
import Answers from './pages/Answers';
import HowToPlay from './pages/HowToPlay';
import { useSoundEffects } from './hooks/useSound';
import './index.css';

function AppRoutes() {
  const navigate = useNavigate();
  const sounds = useSoundEffects();
  const [stallMode, setStallMode] = useState(false);
  const [gameConfig, setGameConfig] = useState(null);

  const handleStartGame = useCallback((set, name) => {
    setGameConfig({ set, name });
    navigate('/game');
  }, [navigate]);

  return (
    <div className={`app ${stallMode ? 'stall-mode' : ''}`}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              stallMode={stallMode}
              setStallMode={setStallMode}
              soundEnabled={sounds.soundEnabled}
              toggleSound={sounds.toggleSound}
            />
          }
        />
        <Route
          path="/setup"
          element={
            <PlayerSetup
              onStartGame={handleStartGame}
              playClick={sounds.playClick}
            />
          }
        />
        <Route
          path="/game"
          element={
            gameConfig ? (
              <Game
                gameSet={gameConfig.set}
                playerName={gameConfig.name}
                stallMode={stallMode}
                sounds={sounds}
              />
            ) : (
              <Home
                stallMode={stallMode}
                setStallMode={setStallMode}
                soundEnabled={sounds.soundEnabled}
                toggleSound={sounds.toggleSound}
              />
            )
          }
        />
        <Route path="/answers" element={<Answers />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}
