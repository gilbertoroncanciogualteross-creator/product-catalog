import ProductCard from './ProductCard';

export default function ProductList({ products }) {
    if (products.length === 0) {
        return <p>No products</p>
    }

    return (
        <ul>
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
        </ul>
    );
}