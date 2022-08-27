import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import About from './pages/About';
import Technology from './pages/Technology';
import Cart from './pages/Cart';
import Home from './components/Cart/Home';


function App() {
  return (
    <>

    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Technology' element={<Technology/>}/>
          <Route path='/basket' element={<Cart/>}/>
        </Routes>
      <Footer />
    <Home/>
    </BrowserRouter>
    </>
  );
}

export default App;
