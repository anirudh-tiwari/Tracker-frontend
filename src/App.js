// import './App.css';
import { Router } from "@reach/router"
import ShopDetail from './cmp/ShopDetail';
import RegisterShop from './cmp/RegisterShop';
import RegisterCustomer from './cmp/RegisterCustomer';
import Register from './cmp/register';
import Verifyotp from './cmp/verifyotp';
import ProductDetail from './cmp/productdetail';
import StepsDetail from './cmp/StepsDetail';
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

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
        <StepsDetail path="/stepsdetail" />
      </Router>
    </div>
  );
}

export default App;
