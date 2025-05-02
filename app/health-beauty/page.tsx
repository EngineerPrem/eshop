// app/beauty/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Example Beauty Products
const products = [
  {
    id: 1,
    name: "Moisturizing Cream",
    description: "Hydrates your skin and keeps it soft all day.",
    price: "$19.99",
    img: "/images/6.1.jpg",
    href: "/health-beauty/product/moisturizing-cream",
  },
  {
    id: 2,
    name: "Lipstick Set",
    description: "A set of 5 vibrant long-lasting lipsticks.",
    price: "$29.99",
    img: "/images/6.2.jpg",
    href: "/health-beauty/product/lipstick-set",
  },
  {
    id: 3,
    name: "Face Wash",
    description: "Gentle face wash suitable for all skin types.",
    price: "$9.99",
    img: "/images/6.3.jpg",
    href: "/health-beauty/product/face-wash",
  },
  {
    id: 4,
    name: "Hair Serum",
    description: "Nourishes your hair and adds natural shine.",
    price: "$15.49",
    img: "/images/6.4.jpg",
    href: "/health-beauty/product/hair-serum",
  },
  {
    id: 5,
    name: "Foundation",
    description: "Flawless foundation for a natural look.",
    price: "$24.99",
    img: "/images/6.5.jpg",
    href: "/health-beauty/product/foundation",
  },
  {
    id: 6,
    name: "Face Mask Pack",
    description: "Soothing sheet masks for glowing skin.",
    price: "$12.00",
    img: "/images/6.6.jpg",
    href: "/health-beauty/product/face-mask-pack",
  },
  {
    id: 7,
    name: "Nail Polish Kit",
    description: "Trendy nail colors with quick-dry formula.",
    price: "$18.75",
    img: "/images/6.7.jpg",
    href: "/health-beauty/product/nail-polish-kit",
  },
  {
    id: 8,
    name: "Perfume Spray",
    description: "Long-lasting floral fragrance for everyday use.",
    price: "$34.95",
    img: "/images/6.8.jpg",
    href: "/health-beauty/product/perfume-spray",
  },
];

export default function BeautyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800">
      {/* Title Section */}
      <div className="text-center py-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-600 dark:text-white">
          Beauty Essentials
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Discover top-rated beauty products to elevate your self-care routine.
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
