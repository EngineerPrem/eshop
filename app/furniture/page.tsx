// app/furniture/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Example Furniture Products
const products = [
  {
    id: 1,
    name: "Sofa Set",
    description: "A comfortable and stylish sofa set for your living room.",
    price: "$799",
    img: "/images/2.1.jpg",
    href: "/furniture/product/sofa-set",
  },
  {
    id: 2,
    name: "Dining Table",
    description: "A modern dining table that fits every home.",
    price: "$499",
    img: "/images/2.2.jpg",
    href: "/furniture/product/dining-table",
  },
  {
    id: 3,
    name: "Coffee Table",
    description: "A sleek and stylish coffee table for your living room.",
    price: "$149",
    img: "/images/2.3.jpg",
    href: "/furniture/product/coffee-table",
  },
  {
    id: 4,
    name: "Bookshelf",
    description: "A spacious bookshelf to organize your books.",
    price: "$249",
    img: "/images/2.4.jpg",
    href: "/furniture/product/bookshelf",
  },
  {
    id: 5,
    name: "Bed Frame",
    description: "A sturdy and comfortable bed frame for a good night's sleep.",
    price: "$599",
    img: "/images/2.5.jpg",
    href: "/furniture/product/bed-frame",
  },
  {
    id: 6,
    name: "Nightstand",
    description: "A convenient nightstand for your bedroom essentials.",
    price: "$99",
    img: "/images/2.6.jpg",
    href: "/furniture/product/nightstand",
  },
  {
    id: 7,
    name: "Armchair",
    description: "A cozy armchair for your living room or office.",
    price: "$299",
    img: "/images/2.7.jpg",
    href: "/furniture/product/armchair",
  },
  {
    id: 8,
    name: "Wardrobe",
    description: "A spacious wardrobe to organize your clothes.",
    price: "$749",
    img: "/images/2.8.jpg",
    href: "/furniture/product/wardrobe",
  },
];

export default function FurniturePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800">
      {/* Title Section */}
      <div className="text-center py-6 max-w-4xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-white">
          Furniture Collection
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Discover elegant and modern furniture for your home. From cozy sofas
          to stylish dining tables, we've got you covered.
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
