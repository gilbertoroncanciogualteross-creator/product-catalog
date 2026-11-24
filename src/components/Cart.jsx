export default function Cart({ cart }) {
    if (cart.length === 0){
        return <p>Your cart is empty</p>
    }

    return (
        <ul>
            {cart.map(item => (
                <li key={item.id}>
                    {item.name} x {item.quantity}
                </li>
            ))}
        </ul>
    )
}