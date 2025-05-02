// app/electronics/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Example Electronics Products
const products = [
  {
    id: 1,
    name: "Smartphone X",
    description: "The latest smartphone with incredible features.",
    price: "$699",
    img: "/images/1.1.jpg",
    href: "/electronics/product/smartphone-x", // Link to individual product page
  },
  {
    id: 2,
    name: "Laptop Pro",
    description: "A powerful laptop for work and play.",
    price: "$1299",
    img: "/images/1.2.jpg",
    href: "/electronics/product/laptop-pro", // Link to individual product page
  },
  {
    id: 3,
    name: "Smartwatch Ultra",
    description: "Stay connected with this feature-packed smartwatch.",
    price: "$399",
    img: "/images/1.3.jpg",
    href: "/electronics/product/smartwatch-ultra", // Link to individual product page
  },
  {
    id: 4,
    name: "Bluetooth Headphones",
    description: "Enjoy high-quality sound with these wireless headphones.",
    price: "$149",
    img: "/images/1.4.jpg",
    href: "/electronics/product/bluetooth-headphones", // Link to individual product page
  },
  {
    id: 5,
    name: "Gaming Console X",
    description: "Unleash the power of next-gen gaming with this console.",
    price: "$499",
    img: "/images/1.5.jpg",
    href: "/electronics/product/gaming-console-x", // Link to individual product page
  },
  {
    id: 6,
    name: "4K Ultra HD TV",
    description: "A stunning 4K experience for your living room.",
    price: "$799",
    img: "/images/1.6.jpg",
    href: "/electronics/product/4k-ultra-hd-tv", // Link to individual product page
  },
  {
    id: 7,
    name: "Bluetooth Headphones",
    description: "Enjoy high-quality sound with these wireless headphones.",
    price: "$149",
    img: "/images/1.4.jpg",
    href: "/electronics/product/bluetooth-headphones", // Link to individual product page
  },
  {
    id: 8,
    name: "Bluetooth Headphones",
    description: "Enjoy high-quality sound with these wireless headphones.",
    price: "$149",
    img: "/images/1.4.jpg",
    href: "/electronics/product/bluetooth-headphones", // Link to individual product page
  },
  // Add more products as needed
];

export default function ElectronicsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800">
      {/* Title Section */}
      <div className="text-center py-6 max-w-4xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-white">
          Electronics Collection
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Explore the latest in technology. From smartphones to 4K TVs, we have
          everything you need.
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
