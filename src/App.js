import './App.css';
import { Route, Routes } from 'react-router-dom';
import Books from './pages/Books';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Books />} />
      </Routes>
    </div>
  );
}

export default App;
