"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";

const product = {
  name: "Sofa Set",
  description:
    "A comfortable and stylish sofa set for your living room, designed to enhance the aesthetic and provide relaxation.",
  price: "$799",
  img: "/images/2.1.jpg", // Replace with the actual image URL for the sofa set
  rating: 4.7,
  specifications: [
    "3-seat capacity",
    "High-quality fabric upholstery",
    "Soft cushions for maximum comfort",
    "Available in various colors",
    "Easy-to-clean surface",
  ],
};

export default function ProductPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto p-6 grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            src={product.img}
            alt={product.name}
            width={500}
            height={400}
            className="rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* Product Info Section */}
        <div className="flex flex-col justify-center space-y-5">
          <h1 className="text-4xl font-bold">{product.name}</h1>

          <div className="flex items-center gap-1 text-yellow-400">
            {Array.from({ length: 5 }, (_, i) => (
              <FaStar
                key={i}
                className={
                  i < Math.floor(product.rating)
                    ? "text-yellow-400"
                    : "text-gray-400"
                }
              />
            ))}
            <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
              {product.rating} / 5
            </span>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300">
            {product.description}
          </p>

          <p className="text-2xl font-semibold text-blue-600">
            {product.price}
          </p>

          <div>
            <h2 className="text-xl font-semibold mb-2">Specifications</h2>
            <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
              {product.specifications.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-4 mt-6">
            <Button
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-100"
            >
              Add to Cart
            </Button>
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white"
              onClick={() => router.push("/checkout")}
            >
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
