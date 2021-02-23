// import './App.css';
import { Router } from "@reach/router"
import Register from './cmp/Register';

function App() {
  return (
    <div >

      <Router>

        <Register path="/register" />
      </Router>
    </div>
  );
}

export default App;
