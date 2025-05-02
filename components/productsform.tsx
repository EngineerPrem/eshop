// components/ProductForm.tsx
import { useState } from 'react'

export default function ProductForm() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validate the inputs
    if (!name || !description || !price || !imageUrl) return

    // Create product object
    const newProduct = {
      name,
      description,
      price: parseFloat(price),
      imageUrl,
      createdAt: new Date().toISOString(),
    }

    // Retrieve products from localStorage
    const products = JSON.parse(localStorage.getItem('products') || '[]')

    // Add new product to the products array
    products.push(newProduct)

    // Save the updated list of products to localStorage
    localStorage.setItem('products', JSON.stringify(products))

    // Reset form after successful submission
    setName('')
    setDescription('')
    setPrice('')
    setImageUrl('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-semibold">
          Product Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold">
          Product Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-semibold">
          Price ($)
        </label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-semibold">
          Image URL
        </label>
        <input
          type="text"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="w-full p-2 mt-1 border border-gray-300 rounded-md"
          required
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full p-2 bg-blue-600 text-white rounded-md mt-4 hover:bg-blue-500"
      >
        {isSubmitting ? 'Adding...' : 'Add Product'}
      </button>
    </form>
  )
}
