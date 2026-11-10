import { products } from './data/products';
import Header from './components/Header'
import ProductList from './components/ProductList';

function App() {
    return (
        <main className="max-w-[1200px] mx-auto px-8 py-16 font-sans">
            <Header count={products.length} />
            <ProductList products={products} />
        </main>
    );
}

export default App;