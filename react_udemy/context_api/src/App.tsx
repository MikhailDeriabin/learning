import Header from './components/Header';
import Shop from './components/Shop';
import ShoppingCartContextProvider from "./store/ShoppingCartContext/shopping-cart-context";
import Test from "./components/Test";


function App() {

  return (
      <ShoppingCartContextProvider>
        <Test/>
        <Header />
        <Shop />
      </ShoppingCartContextProvider>
  );
}

export default App;
