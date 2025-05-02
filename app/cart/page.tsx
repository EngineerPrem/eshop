'use client';

import { useEffect, useState } from 'react';

const CartPage = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [cart, setCart] = useState<any[]>([]);

  // Fetch products when the page loads
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('/api/products');
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  // Add a product to the cart
  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  // Calculate the total price of the cart
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <div>
      <h2>Products</h2>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Shopping Cart</h2>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((product, index) => (
            <div key={index}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))
        )}
      </div>

      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
};

export default CartPage;
