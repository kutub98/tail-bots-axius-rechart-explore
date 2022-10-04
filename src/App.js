
import './App.css';
import NavItems from './Components/Navbar/NavItems';
import PriceOptions from './Components/PriceOption/PriceOptions';
import Rechart from './Components/Rechart/Rechart';


function App() {
  return (
    <div className="App">
      <NavItems></NavItems>
      <PriceOptions></PriceOptions>
      <Rechart></Rechart>
    </div>
  );
}

export default App;
