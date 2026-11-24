export default function Cart({ cart, onRemove }) {
    if (cart.length === 0){
        return <p>Your cart is empty</p>
    }

    return (
        <ul>
            {cart.map(item => (
                <li key={item.id}>
                    {item.name} x {item.quantity}
                    <button onClick={() => onRemove(item.id)}>Remove</button>
                </li>
            ))}
        </ul>
    )
}