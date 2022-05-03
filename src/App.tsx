import { Route, Routes } from 'react-router-dom';
import './App.css';
import GamePage from './pages/GamePage';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route index element={<LoginPage />} />
        <Route path="mainPage/*" element={<MainPage />} />
        <Route path="gamePage/*" element={<GamePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
