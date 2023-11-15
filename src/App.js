import './App.css';
import { ExplorePage } from './pages/ExplorePage/ExplorePage';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { Route, Routes } from 'react-router-dom';

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <HomePage/> } />
        <Route path="explore" element={ <ExplorePage/> } />
        <Route path="contact" element={ <ContactUs/> } />
      </Routes>
    </div>   
  );
}

export default App;
