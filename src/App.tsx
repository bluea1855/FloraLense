import { useState } from 'react';
import type { Screen } from '@/types';
import { HomeScreen } from '@/screens/HomeScreen';
import { ResultScreen } from '@/screens/ResultScreen';

function App() {
  const [screen, setScreen] = useState<Screen>('home');

  const navigate = (next: Screen) => {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="mx-auto min-h-screen max-w-md bg-stone-50 shadow-2xl">
      {screen === 'home' ? (
        <HomeScreen
          onScan={() => navigate('result')}
          onNavigate={navigate}
        />
      ) : (
        <ResultScreen onNavigate={navigate} />
      )}
    </div>
  );
}

export default App;
