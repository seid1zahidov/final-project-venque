import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './pages/About';
import Technology from './pages/Technology';
import Home from './pages/home/Home';
import Addslider from './Admin/Slider/Addslider.jsx'
import Cartdteails from './pages/cartdetails/Cartdetails.jsx';
import Cartupdate from './pages/cartcrud/Cartupdate.jsx'
import Shop from './pages/Shopcard/Shop';
import Addshopimg from './Admin/shopimg/Addshopimg';
import Shopimgdetails from './pages/Shopimgdetails/Shopimgdetails'
import Shopimgupdate from './pages/Shopimgdetails/Shopimgupdate';


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/About' element={<About />} />
          <Route path='/Technology' element={<Technology />} />
          <Route path='/Shop' element = {<Shop />} />
          <Route path='/Admin' element={<Home />} />
          <Route path='/shopimgAdd' element = {<Addshopimg />} />
          <Route path='/Shopimgdetails' element = {<Shopimgdetails />} />
          <Route path='/Shopimgupdate/:id' element = {<Shopimgupdate />} />
            {/* users */}
            {/* end-users */}

            {/* products */}


            {/* end-products */}
            <Route path='/cart' element={<Addslider />} />
            <Route path='/cartdetails' element = {<Cartdteails />}/>
            <Route path='/cartupdate/:id' element = {<Cartupdate />}/>


        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
