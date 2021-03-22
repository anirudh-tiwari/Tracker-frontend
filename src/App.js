// import './App.css';
import { Router } from "@reach/router"
import ShopDetail from './cmp/ShopDetail';
import RegisterShop from './cmp/RegisterShop';
import RegisterCustomer from './cmp/RegisterCustomer';
import Register from './cmp/register';
import Verifyotp from './cmp/verifyotp';
import ProductDetail from './cmp/productdetail';

function App() {
  return (
    <div >

      <Router>

        <ShopDetail path="/shopdetail" />
        <RegisterShop path="/registershop" />
        <RegisterCustomer path="/registercustomer" />
        <Register path="/" />
        <Verifyotp path="/verifyotp" />
        <ProductDetail path="/productdetail" />
      </Router>
    </div>
  );
}

export default App;
