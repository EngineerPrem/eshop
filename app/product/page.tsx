'use client';

import { useState } from 'react';

const ProductForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [message, setMessage] = useState('');

  const handleProductSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Send a POST request to the API to add the product
    const response = await fetch('/api/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, price }),
    });

    if (response.ok) {
      const product = await response.json();
      setMessage(`Product "${product.name}" added successfully!`);
      setName('');
      setDescription('');
      setPrice(0);
    } else {
      setMessage('Failed to add product');
    }
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleProductSubmit}>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description: </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default ProductForm;
