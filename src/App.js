import './App.css';
import {BrowserRouter as Router, Route, Routes, Switch} from "react-router-dom";
import { ExplorePage } from './pages/ExplorePage/ExplorePage';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" element={<HomePage/>} />
          <Route path="/explore" element={<ExplorePage/>} />
      </Switch>
    </Router>
  );
}

export default App;
