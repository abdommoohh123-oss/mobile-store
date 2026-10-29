import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Ourshop from './Comonents/Ourshop/Ourshop';
import Home from './Comonents/pages/Home';
import Accessories from './Comonents/pages/Accessories';
import Offers from './Comonents/pages/Offers';
import NotFound from './Comonents/pages/NotFound';
import Cart from './Comonents/pages/Cart';
import Wishlist from './Comonents/pages/Wishlist';
import Layout from './Comonents/Layout/Layout';
import MobileDetails from './Comonents/pages/MobileDetails';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="mobiles" element={<Ourshop />} />
        <Route path="mobiles/:id" element={<MobileDetails />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="offers" element={<Offers />} />
        <Route path="cart" element={<Cart />} />
        <Route path="wishlist" element={<Wishlist />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App