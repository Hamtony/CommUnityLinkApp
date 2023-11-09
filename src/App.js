import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { ExplorePage } from './pages/ExplorePage/ExplorePage';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<ExplorePage/>} />
          <Route path="/explore" element={<ExplorePage/>} />
      </Routes>
    </Router>
  );
}

export default App;
