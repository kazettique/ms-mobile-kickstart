import { Link, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Routes>
        <Route path="/" element={<div>home component</div>} />
        <Route path="about" element={<div>about component</div>} />
      </Routes>
    </div>
  );
}

export default App;
