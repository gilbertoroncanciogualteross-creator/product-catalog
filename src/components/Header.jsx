export default function Header({ count }) {
    return (
        <header className="mb-8">
            <h1 className="text-3xl font-semibold">Product Catalog</h1>
            <p className="text-text-muted">{count} products</p>
        </header>
    );
}