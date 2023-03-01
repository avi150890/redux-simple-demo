import './App.css';
import Purchase from './Components/Purchase';
import Cart from './Components/Cart';
import Total from './Components/Total';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Login />
      <Purchase />
      <Cart />
      <Total />
    </div>
  );
}

export default App;
