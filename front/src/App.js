import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import About from './pages/About';
import Technology from './pages/Technology';
import Carts from '../../front/src/components/Cart/Carts'


function App() {
  return (
    <>

    <BrowserRouter>
      <Header />
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Technology' element={<Technology/>}/>
          <Route path='/basket' element={<Carts/>}/>
        </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
