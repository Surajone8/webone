import './App.css';
// import videoSource from "./components/robin.mp4";
import HomePage from './components/HomePage';
// import CartProvider from './components/context/CartProvider';
import Cart from './components/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {
  return (
    <>
      <BrowserRouter>
        <div>
          <Navbar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </BrowserRouter>
      {/* <HomePage /> */}
      {/* <Cart /> */}

    </>
  );
}

export default App;
