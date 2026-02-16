import { useNavigation } from '../contexts/NavigationContext.jsx';

import HomeScreen from '../screens/HomeScreen.jsx';
import ModeSelectScreen from '../screens/ModeSelectScreen.jsx';
import CategoryScreen from '../screens/CategoryScreen.jsx';
import GameScreen from '../screens/GameScreen.jsx';
import ResultScreen from '../screens/ResultScreen.jsx';
import ProfileScreen from '../screens/ProfileScreen.jsx';
import SettingsScreen from '../screens/SettingsScreen.jsx';
import AboutScreen from '../screens/AboutScreen.jsx';
import LeaderboardScreen from '../screens/LeaderboardScreen.jsx';

const SCREEN_MAP = {
  Home: HomeScreen,
  ModeSelect: ModeSelectScreen,
  Category: CategoryScreen,
  Game: GameScreen,
  Result: ResultScreen,
  Profile: ProfileScreen,
  Settings: SettingsScreen,
  About: AboutScreen,
  Leaderboard: LeaderboardScreen,
};

export default function ModalContainer() {
  const { modalStack } = useNavigation();

  // Find the lowest visible index: the last full-page view, or 0
  let lowestVisible = 0;
  for (let i = modalStack.length - 1; i >= 0; i--) {
    if (modalStack[i].isFullPage) {
      lowestVisible = i;
      break;
    }
  }

  return (
    <div className="modal-container">
      {modalStack.map((entry, index) => {
        const ScreenComponent = SCREEN_MAP[entry.screen];
        if (!ScreenComponent) return null;

        // Don't render screens hidden behind a full-page view
        if (index < lowestVisible) return null;

        const isTop = index === modalStack.length - 1;
        const isBase = index === 0;

        if (entry.isFullPage) {
          return (
            <div
              key={entry.id}
              className="full-page-view"
              style={{ zIndex: 2000 + index }}
            >
              <ScreenComponent />
            </div>
          );
        }

        return (
          <div
            key={entry.id}
            className={`modal-layer ${isBase ? '' : 'modal-layer-animated'}`}
            style={{
              zIndex: 1000 + index,
              pointerEvents: isTop ? 'auto' : 'none',
              visibility: isTop ? 'visible' : 'hidden',
            }}
          >
            <ScreenComponent />
          </div>
        );
      })}
    </div>
  );
}
