import { products } from './data/products';
import Header from './components/Header'
import ProductList from './components/ProductList';
import { useState } from 'react';

function App() {

    const [cart, setCart] = useState([]);

    function addToCart(product) {
        setCart([...cart, { ...product, quantity: 1 }]);
        console.log(cart);
    }

    return (
        <main className="max-w-[1200px] mx-auto px-8 py-16 font-sans">
            <Header count={products.length} />
            <ProductList products={products} onAddToCart={addToCart} />
            <p>Cart: {cart.length} items</p>
        </main>
    );
}

export default App;