import './App.css';
import {RouterProvider, BrowserRouter as Router, Route, Routes, createBrowserRouter, createRoutesFromElements, Link, Outlet} from "react-router-dom";
import { ExplorePage } from './pages/ExplorePage/ExplorePage';
import { HomePage } from './pages/HomePage/HomePage';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Routes path="/" element={HomePage} >
          <Route path="/" element={<HomePage/>} />
          <Route path="/explore" element={<ExplorePage/>} />
          <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    )
  );
  return(
    <div className='App'>
      <h1>Hello</h1>
    </div>
  )
}

const Root = () =>{
  return(
    <>
      <div>
        <Link to="/"> HomePage </Link>
        <Link to="/explore"> ExplorePage </Link>
        <Link to="/contact"> ContactUs </Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default App;
