// app/clothing/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Example Clothing Products
const products = [
  {
    id: 1,
    name: "Summer Dress",
    description: "A stylish dress perfect for summer days.",
    price: "$59",
    img: "/images/3.1.jpg",
    href: "/clothing/product/summer-dress",
  },
  {
    id: 2,
    name: "Jeans X",
    description: "Comfortable and trendy jeans for everyday wear.",
    price: "$49",
    img: "/images/3.2.jpg",
    href: "/clothing/product/jeans-x",
  },
  {
    id: 3,
    name: "Leather Jacket",
    description: "A premium quality leather jacket for colder weather.",
    price: "$149",
    img: "/images/3.3.jpg",
    href: "/clothing/product/leather-jacket",
  },
  {
    id: 4,
    name: "Sneakers Pro",
    description: "Durable and stylish sneakers for any occasion.",
    price: "$89",
    img: "/images/3.4.jpg",
    href: "/clothing/product/sneakers-pro",
  },
  {
    id: 5,
    name: "Hoodie X",
    description: "A comfy and stylish hoodie for casual wear.",
    price: "$39",
    img: "/images/3.5.jpg",
    href: "/clothing/product/hoodie-x",
  },
  {
    id: 6,
    name: "Sweater Pro",
    description: "A warm and soft sweater perfect for winter.",
    price: "$79",
    img: "/images/3.6.jpg",
    href: "/clothing/product/sweater-pro",
  },
  {
    id: 7,
    name: "Shorts",
    description: "Perfect for the beach or casual summer days.",
    price: "$29",
    img: "/images/3.7.jpg",
    href: "/clothing/product/shorts",
  },
  {
    id: 8,
    name: "Winter Coat",
    description: "Stay warm with this stylish winter coat.",
    price: "$159",
    img: "/images/3.8.jpg",
    href: "/clothing/product/winter-coat",
  },
];

export default function ClothingPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800">
      {/* Title Section */}
      <div className="text-center py-6 max-w-4xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-white">
          Clothing Collection
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Discover the latest trends in clothing, from casual wear to stylish
          outerwear.
        </p>
      </div>

      {/* Product Grid Section */}
      <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl w-full mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <Image
                src={product.img}
                alt={product.name}
                width={300}
                height={200}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold text-black dark:text-white">
                {product.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {product.description}
              </p>
              <p className="text-xl font-semibold text-blue-600">
                {product.price}
              </p>
              <Link href={product.href}>
                <Button
                  variant="outline"
                  className="mt-3 text-blue-600 border-blue-600 hover:bg-blue-100"
                >
                  View Product
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
