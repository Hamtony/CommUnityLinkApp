import './App.css';
import { ExplorePage } from './pages/ExplorePage/ExplorePage';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactUs } from './pages/ContactUs/ContactUs';
import { Route, Routes } from 'react-router-dom';

function App() {
  console.log(window.location)
  let component
  switch (window.location.pathname) {
    case "/":
      component = <HomePage/>
      break;
    case "/explore":
      component = <ExplorePage/>
      break;
    case "/contact":
      component = <ContactUs/>
      break;
    default:
      break;
  }

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
