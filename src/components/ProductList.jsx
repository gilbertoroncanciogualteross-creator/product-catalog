import ProductCard from './ProductCard';

export default function ProductList({ products }) {
    if (products.length === 0) {
        return <p>No products</p>
    }

    return (
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8">
            {products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
        </ul>
    );
}