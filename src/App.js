import {Route, Routes} from 'react-router-dom';
import Navbar from "./components/navbar/Navbar";
import Home from './pages/home/Home';
import Collection from './pages/collection/Collection';
import ProductDetails from "./pages/productDetails/ProductDetails"
import Footer from './components/footer/Footer';
import AllProducts from './components/getAllProducts/AllProducts';


function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/category/collection/:categoryId' element={<Collection />}/>
            <Route path='/product/:productId' element={<ProductDetails />}/>
            <Route path='/allProducts' element={<AllProducts />}/>

          </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
