import logo from './logo.svg';
import './App.css';
import ProductProvider from './context/ProductProvider';
import Home from './page/Home';

function App() {
  return (
    <div className="App">
      <ProductProvider>
        <Home />
      </ProductProvider>
    </div>
  );
}

export default App;
