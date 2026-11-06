import ProductCard from './ProductCard';

export default function ProductList({ products }) {
    return (
        <ul>
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
        </ul>
    );
}