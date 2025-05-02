// app/sports/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Example Sports Products
const products = [
  {
    id: 1,
    name: "Football",
    description: "Premium leather football for matches and practice.",
    price: "$25.99",
    img: "/images/5.1.jpg",
    href: "/sports/product/football",
  },
  {
    id: 2,
    name: "Tennis Racket",
    description: "Lightweight racket ideal for both beginners and pros.",
    price: "$49.99",
    img: "/images/5.2.jpg",
    href: "/sports/product/tennis-racket",
  },
  {
    id: 3,
    name: "Yoga Mat",
    description: "Non-slip and eco-friendly yoga mat for all levels.",
    price: "$19.99",
    img: "/images/5.3.jpg",
    href: "/sports/product/yoga-mat",
  },
  {
    id: 4,
    name: "Running Shoes",
    description: "Breathable running shoes designed for comfort.",
    price: "$89.99",
    img: "/images/5.4.jpg",
    href: "/sports/product/running-shoes",
  },
  {
    id: 5,
    name: "Basketball",
    description: "Durable basketball for indoor and outdoor play.",
    price: "$29.99",
    img: "/images/5.5.jpg",
    href: "/sports/product/basketball",
  },
  {
    id: 6,
    name: "Gym Gloves",
    description: "Padded gloves for weight lifting and workouts.",
    price: "$14.49",
    img: "/images/5.6.jpg",
    href: "/sports/product/gym-gloves",
  },
  {
    id: 7,
    name: "Water Bottle",
    description: "Stainless steel bottle to keep drinks cold or hot.",
    price: "$12.00",
    img: "/images/5.7.jpg",
    href: "/sports/product/water-bottle",
  },
  {
    id: 8,
    name: "Cricket Bat",
    description: "Grade-A willow bat for serious cricket players.",
    price: "$59.95",
    img: "/images/5.8.jpg",
    href: "/sports/product/cricket-bat",
  },
];

export default function SportsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800">
      {/* Title Section */}
      <div className="text-center py-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-600 dark:text-white">
          Sports Gear
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Gear up with high-performance sports equipment and accessories.
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
