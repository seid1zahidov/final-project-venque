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
import Community1add from './pages/communitycrud/Community1add';
import Community2update from './pages/communitycrud2/Community2update';
import Community2details from '../src/pages/communitycrud2/Community2details'
import Community2Add from './pages/communitycrud2/Community2Add';
import Community3details from './pages/communitycrud3/Community3details';
import Community3Add from './pages/communitycrud3/Community3Add';
import Community3update from './pages/communitycrud3/Community3update';
import Community4details from './pages/communitycrud4/Community4details';
import Community4update from './pages/communitycrud4/Community4update';
import Community4Add from './pages/communitycrud4/Community4Add';
import Community5details from './pages/communitycrud5/Community5details';
import Community5Add from './pages/communitycrud5/Community5Add';
import Community5update from './pages/communitycrud5/Community5update';
import Community6details from './pages/communitycrud6/Community6details';
import Community6updata from './pages/communitycrud6/Community6updata';
import Community6Add from './pages/communitycrud6/Community6Add';


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/About' element={<About />} />
          <Route path='/Technology' element={<Technology />} />
          <Route path='/Shop' element={<Shop />} />
          <Route path='/Admin' element={<Home />} />
          <Route path='/shopimgAdd' element={<Addshopimg />} />
          <Route path='/Shopimgdetails' element={<Shopimgdetails />} />
          <Route path='/Shopimgupdate/:id' element={<Shopimgupdate />} />
          <Route path='/HelpimgAdd' element={<AddHelpimg />} />
          <Route path='/Helpdetails' element={<Helpdetails />} />
          <Route path='/Helpupdate/:id' element={<Helpupdate />} />
          <Route path='/Complaint' element={<Helpcomplaint />} />
          <Route path='/Community' element={<Community />} />
          <Route path='/Communitydetails' element={<Communitydetails />} />
          <Route path='/Com1update/:id' element={<Communitydetailsupdate />} />
          <Route path='/Com1Add' element={<Community1add />} />
          <Route path='/Communitydetails1' element={<Community2details />} />
          <Route path='/Com2Add' element={<Community2Add />} />
          <Route path='/Com2update/:id' element={<Community2update />} />
          <Route path='/cart' element={<Addslider />} />
          <Route path='/cartdetails' element={<Cartdteails />} />
          <Route path='/cartupdate/:id' element={<Cartupdate />} />
          <Route path='/Communitydetails2' element = {<Community3details />} />
          <Route path='/Com3Add' element = {<Community3Add />} />
          <Route path='/Com3update/:id' element = {<Community3update />} />
          <Route path='/Communitydetails3' element = {<Community4details />} />
          <Route path='/Com4update/:id' element = {<Community4update />} />
          <Route path='/Com4Add' element = {<Community4Add />} />
          <Route path='/Communitydetails4' element = {<Community5details />} />
          <Route path='/Com5Add' element = {<Community5Add />} />
          <Route path='/Com5update/:id' element = {<Community5update />} />
          <Route path='/Communitydetails5' element = {<Community6details />} />
          <Route path='/Com6update/:id' element = {<Community6updata />} />
          <Route path='/Com6Add' element = {<Community6Add />} />





          <Route path='/seids' element={<Contextd />} />
          <Route path='/Help' element={<Help />} />




        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
