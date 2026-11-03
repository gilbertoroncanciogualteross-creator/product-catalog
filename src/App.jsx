import { products } from './data/products';

function App() {
    console.log(products)
    return (
        <ul>
            {products.map(p => (
                <li key={p.id}>{p.name} - {p.price}</li>
            ))}
        </ul>
    )
}

export default App