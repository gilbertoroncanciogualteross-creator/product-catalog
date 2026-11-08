import { products } from './data/products';
import Header from './components/Header'
import ProductList from './components/ProductList';

function App() {
    return (
        <main>
            <Header count={products.length} />
            <ProductList products={products} />
        </main>
    );
}

export default App;