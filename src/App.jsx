import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Experience from './components/Experience';

const App = () => {
  return (
    <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/experience' element={<Experience/>}/>
        <Route path='*' element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </HashRouter>
  );
}

export default App;
