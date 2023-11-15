import './App.css';
import { ExplorePage } from './pages/ExplorePage/ExplorePage';
import { HomePage } from './pages/HomePage/HomePage';
import { ContactUs } from './pages/ContactUs/ContactUs';

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

  return(
    <>
      {component}
    </>    
  );
}

export default App;
