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
import Contextd from './context/Contextd';
import Help from './pages/Help'
import AddHelpimg from './Admin/Helpimg/AddHelpimg';
import Helpdetails from './pages/Helpcrud/Helpdetails';
import Helpupdate from './pages/Helpcrud/Helpupdate';
import Helpcomplaint from './pages/complaint/Helpcomplaint';
import Communitydetails from './pages/communitycrud/Communitydetails';
import Community from './pages/Community';
import Communitydetailsupdate from './pages/communitycrud/Communitydetailsupdate';

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
          <Route path='/HelpimgAdd' element = {<AddHelpimg />} />
          <Route path='/Helpdetails' element = {<Helpdetails />} />
          <Route path='/Helpupdate/:id' element = {<Helpupdate />} />
          <Route path='/Complaint' element = {<Helpcomplaint />} />
          <Route path='/Community' element = {<Community />} />
          <Route path='/Communitydetails' element = {<Communitydetails />}/>
          <Route path='/Com1update/:id'  element = {<Communitydetailsupdate />}/>
            {/* users */}
            {/* end-users */}

            {/* products */}


            {/* end-products */}
            <Route path='/cart' element={<Addslider />} />
            <Route path='/cartdetails' element = {<Cartdteails />}/>
            <Route path='/cartupdate/:id' element = {<Cartupdate />}/>

            <Route path='/seids' element = {<Contextd />}/>
            <Route path='/Help' element = {<Help/>}/>


            

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
