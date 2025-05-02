// app/grocery/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Example Grocery Products
const products = [
  {
    id: 1,
    name: "Organic Apples",
    description: "Fresh and juicy organic apples, rich in fiber.",
    price: "$3.99 / lb",
    img: "/images/7.1.jpg",
    href: "/grocery/product/organic-apples",
  },
  {
    id: 2,
    name: "Milk - 1 Gallon",
    description: "Farm fresh milk, full of nutrients.",
    price: "$4.49",
    img: "/images/7.2.jpg",
    href: "/grocery/product/milk",
  },
  {
    id: 3,
    name: "Brown Bread",
    description: "Healthy whole wheat bread, freshly baked.",
    price: "$2.99",
    img: "/images/7.3.jpg",
    href: "/grocery/product/brown-bread",
  },
  {
    id: 4,
    name: "Free-Range Eggs",
    description: "12 large free-range eggs from local farms.",
    price: "$3.79",
    img: "/images/7.4.jpg",
    href: "/grocery/product/eggs",
  },
  {
    id: 5,
    name: "Orange Juice",
    description: "100% pure orange juice with no added sugar.",
    price: "$5.99",
    img: "/images/7.5.jpg",
    href: "/grocery/product/orange-juice",
  },
  {
    id: 6,
    name: "Tomatoes",
    description: "Fresh red tomatoes, perfect for salads and sauces.",
    price: "$1.99 / lb",
    img: "/images/7.6.jpg",
    href: "/grocery/product/tomatoes",
  },
  {
    id: 7,
    name: "Potatoes",
    description: "Starchy and versatile potatoes for all your meals.",
    price: "$0.99 / lb",
    img: "/images/7.7.jpg",
    href: "/grocery/product/potatoes",
  },
  {
    id: 8,
    name: "Spinach",
    description: "Fresh baby spinach, great for salads or cooking.",
    price: "$2.49",
    img: "/images/7.8.jpg",
    href: "/grocery/product/spinach",
  },
];

export default function GroceryPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800">
      {/* Title Section */}
      <div className="text-center py-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-600 dark:text-white">
          Grocery Essentials
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Stock your kitchen with fresh and healthy groceries.
        </p>
      </div>

      {/* Product Grid Section */}
      <div className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
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
              <p className="text-xl font-semibold text-green-600">
                {product.price}
              </p>
              <Link href={product.href}>
                <Button
                  variant="outline"
                  className="mt-3 text-green-600 border-green-600 hover:bg-green-100"
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
