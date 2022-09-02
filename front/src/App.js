import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './pages/About';
import Technology from './pages/Technology';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewProduct from './pages/newProduct/NewProduct';
import ProductsList from './pages/productList/ProductsList';
import NewUser from './pages/newUser/NewUser';
import Sidebar from './Admin/sidebar/Sidebar';
import Addslider from './Admin/Slider/Addslider.jsx'
import Cartdteails from './pages/cartdetails/Cartdetails.jsx';
import Cartupdate from './pages/cartcrud/Cartupdate.jsx'


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/About' element={<About />} />
          <Route path='/Technology' element={<Technology />} />
          <Route path='/Admin' element={<Home />} />
            {/* users */}
            <Route path='/users' element={<UserList />} />
            <Route path='/user/:userId' element={<User />} />
            <Route path='/newProduct' element={<NewProduct />} />
            {/* end-users */}

            {/* products */}

            <Route path='/products' element={<ProductsList />} />
            <Route path='/newProduct' element={<NewUser />} />

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
