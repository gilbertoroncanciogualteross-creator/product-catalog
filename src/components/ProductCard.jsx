export default function ProductCard({ product }) {
  return (
    <li>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Category: {product.category}</p>
    </li>
  );
} 