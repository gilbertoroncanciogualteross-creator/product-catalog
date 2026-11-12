import ProductCard from './ProductCard';
import { useState } from 'react';

export default function ProductList({ products }) {
    const [reversed, setReversed] = useState(false);

    

    if (products.length === 0) {
        return <p>No products</p>
    }

    return (
        <> 
            <button
                className="mb-4 bg-inverse text-on-inverse px-4 py-2 rounded-sm cursor-pointer"
                onClick={() => setReversed(!reversed)}
            >
                Reverse
            </button>
            <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
                {products.map(p => (
                <ProductCard key={p.id} product={p} />
                ))}
            </ul>
        </>
    );
}