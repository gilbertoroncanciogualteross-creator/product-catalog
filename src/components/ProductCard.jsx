export default function ProductCard({ product }) {
  return (
    <li className="bg-surface rounded-md p-8 flex flex-col gap-2">
      <h3 className="text-lg font-bold">{product.name}</h3>
      <p className="font-semibold">Price: {product.price}</p>
      <p className="text-sm text-text-muted">Category: {product.category}</p>
      {!product.inStock && <span className="self-start bg-inverse text-on-inverse px-2 py-1 text-sm rounded-sm">Out of stock</span>}
    </li>
  );
} 