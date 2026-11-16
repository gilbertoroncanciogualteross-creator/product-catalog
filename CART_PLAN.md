# Cart plan

## What the cart remembers

The cart remembers the price and the quantity before paying.

## Actions

- **Add:** the user clicks "Add to Cart" on a product.
    If it's not in the cart, it's added with quantity 1.
    If it's already there, its quantity goes up by 1.

- **Remove:** the user clicks "Remove" next to an item in the cart.
    A new list is created with every item except that one:
    `cart.filter(item => item.id !== id)`.

- **Change quantity:** the user clicks "+" or "-" next to an item.
    A new list is created where that item's quantity goes up or down by 1, and the oher items stay the same.
    If the quantity reaches 0, the item is removed.

## Calculated values

The numbers of items.

## Where the state lives, and why

The state lives in App, because have to travels down, from parent to child.