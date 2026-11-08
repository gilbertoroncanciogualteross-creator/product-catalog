export default function Header({ count }) {
    return (
        <header>
            <h1>Product Catalog</h1>
            <p>{count} products</p>
        </header>
    );
}