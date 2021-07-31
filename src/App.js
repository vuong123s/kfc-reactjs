import logo from './logo.svg';
import './App.css';
import Card from './features/card/Card.js';
import Slice from './features/slice/Slice.js';
import Menu from './features/menu/Menu.js';

function App() {
  return (
    <div className="App">
      <Menu />
      <Card />
      <Slice />
    </div>
  );
}
export default App;
