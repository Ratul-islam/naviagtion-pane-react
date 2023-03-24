import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Nav from './components/nav';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Activity from './pages/activity';
import About from './pages/about';
import Settings from './pages/settings';
import Error from './pages/Error';

function App() {
  
  const root = document.querySelector(':root');
  const followUpDiv = document.getElementsByClassName('toggle-bg')[0];
  console.log(followUpDiv)

  const toggleChange =(change)=> {
      if(change){
        root.style.setProperty('--bg-color', '#f5f4fe');
        root.style.setProperty('--nav-color', '#ffffff');
        root.style.setProperty('--font-color', '#000000');
        followUpDiv.style.left = "2%";
      }
      if(!change){
        root.style.setProperty('--bg-color', '#00071d');
        root.style.setProperty('--nav-color', '#131c31');
        root.style.setProperty('--font-color', '#ffffff');
        followUpDiv.style.left = "48%";
      }
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Nav change={toggleChange}/>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/activity' element={<Activity />} />
          <Route path='/about' element={<About />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
