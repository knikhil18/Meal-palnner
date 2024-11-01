import './App.css';
import Cover from './components/Cover';
import Logincard from './components/Logincard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Logincard />} />
        <Route path="/Cover" element={<Cover />} />
      </Routes>
    </Router>
  );
}
export default App;