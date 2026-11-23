import { products } from './data/products';
import Header from './components/Header'
import ProductList from './components/ProductList';
import { useState } from 'react';

function App() {

    const [cart, setCart] = useState([]);

    function addToCart(product) {
         // A. Look for the product in the cart
         const existing = cart.find(item => item.id === product.id)

         // B. If it's there: a new cart with its quantity + 1
         if (existing){
            setCart(cart.map(item =>
                 item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
         }

         // C. If not: a new cart with the product added, quantity 1
         else {
            setCart([...cart, {...product, quantity: 1}]);
         }
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