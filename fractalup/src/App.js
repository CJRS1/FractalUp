import './App.css';
import Vista1 from './Vista1'
import Vista2 from './Vista2'
import Menu from './Menu'
import Home from './Home'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vista1" element={<Vista1 />} />
          <Route path="/vista2" element={<Vista2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
