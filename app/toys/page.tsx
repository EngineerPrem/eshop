// app/toys/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Example Toys Products
const products = [
  {
    id: 1,
    name: "Lego Building Set",
    description: "Creative building blocks to spark imagination.",
    price: "$39.99",
    img: "/images/4.1.jpg",
    href: "/toys/product/lego-building-set",
  },
  {
    id: 2,
    name: "Remote Control Car",
    description: "High-speed RC car with rechargeable battery.",
    price: "$29.99",
    img: "/images/4.2.jpg",
    href: "/toys/product/rc-car",
  },
  {
    id: 3,
    name: "Doll House",
    description: "Deluxe wooden doll house with furniture.",
    price: "$59.99",
    img: "/images/4.3.jpg",
    href: "/toys/product/doll-house",
  },
  {
    id: 4,
    name: "Stuffed Bear",
    description: "Soft and cuddly teddy bear for kids.",
    price: "$14.99",
    img: "/images/4.4.jpg",
    href: "/toys/product/stuffed-bear",
  },
  {
    id: 5,
    name: "Puzzle Set",
    description: "Colorful jigsaw puzzle for brain development.",
    price: "$9.99",
    img: "/images/4.5.jpg",
    href: "/toys/product/puzzle-set",
  },
  {
    id: 6,
    name: "Toy Kitchen Set",
    description: "Mini kitchen set to inspire little chefs.",
    price: "$24.99",
    img: "/images/4.6.jpg",
    href: "/toys/product/kitchen-set",
  },
  {
    id: 7,
    name: "Action Figure",
    description: "Popular superhero action figure for all ages.",
    price: "$19.49",
    img: "/images/4.7.jpg",
    href: "/toys/product/action-figure",
  },
  {
    id: 8,
    name: "Ride-on Car",
    description:
      "Battery-powered car for toddlers to ride indoors or outdoors.",
    price: "$99.95",
    img: "/images/4.8.jpg",
    href: "/toys/product/ride-on-car",
  },
];

export default function ToysPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800">
      {/* Title Section */}
      <div className="text-center py-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-600 dark:text-white">
          Toys & Games
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Discover fun and educational toys for kids of all ages.
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
              <p className="text-xl font-semibold text-pink-600">
                {product.price}
              </p>
              <Link href={product.href}>
                <Button
                  variant="outline"
                  className="mt-3 text-pink-600 border-pink-600 hover:bg-pink-100"
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
