import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Project from './pages/Project';
import Achievement from './pages/Achievement';
import Contact from './pages/Contact';
import About from './pages/About';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(1500px_circle_at_50%_10%,_#0f172a,_#000000_50%)]">
      <NavBar></NavBar>

      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/about' element={<About></About>}> </Route>
        <Route path='/project' element={<Project></Project>}> </Route>
        <Route path='/achievement' element={<Achievement></Achievement>}> </Route>
        <Route path='/contact' element={<Contact></Contact>}> </Route>
      </Routes>
    </div>
  );
}
export default App;
