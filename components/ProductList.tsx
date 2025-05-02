// components/ProductList.tsx
import { useEffect, useState } from 'react'

export default function ProductList() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    // Retrieve products from localStorage
    const storedProducts = JSON.parse(localStorage.getItem('products') || '[]')
    setProducts(storedProducts)
  }, [])

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Product List</h2>
      {products.length === 0 ? (
        <p>No products added yet.</p>
      ) : (
        <ul className="space-y-4">
          {products.map((product, index) => (
            <li key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
              <div className="flex items-center space-x-4">
                <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover" />
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.description}</p>
                  <p className="mt-2 font-semibold">${product.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
