import { products } from './data/products';
import ProductList from './components/ProductList';

function App() {
    return <ProductList products={products} />;
}

export default App; 