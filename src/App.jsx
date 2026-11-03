import { products } from './data/products';
import ProductCard from './components/ProductCard';

function App() {
    console.log(products)
    return (
        <ul>
            {products.map(p => (
                <ProductCard key={p.id} product={p} />
            ))}
        </ul>
    )
}

export default App