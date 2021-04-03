import { Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/" component={Register} exact />
        <Route path="/shopdetail" component={ShopDetail} />
        <Route path="/registershop" component={RegisterShop} />
        <Route path="/registercustomer" component={RegisterCustomer} />
        <Route path="/verifyotp" component={Verifyotp} />
        <Route path="/productdetail" component={ProductDetail} />
        <Route path="/stepsdetail" component={StepsDetail} />
      </Switch>
    </div>
  );
}

export default App;
