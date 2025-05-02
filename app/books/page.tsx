// app/books/page.tsx
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Example Books Products
const products = [
  {
    id: 1,
    name: "The Great Gatsby",
    description: "A classic novel by F. Scott Fitzgerald.",
    price: "$15",
    img: "/images/1.jpg",
    href: "/books/product/great-gatsby",
  },
  {
    id: 2,
    name: "1984",
    description: "A dystopian novel by George Orwell.",
    price: "$12",
    img: "/images/2.jpg",
    href: "/books/product/1984",
  },
  {
    id: 3,
    name: "To Kill a Mockingbird",
    description: "A Pulitzer Prize-winning novel by Harper Lee.",
    price: "$18",
    img: "/images/3.jpg",
    href: "/books/product/to-kill-a-mockingbird",
  },
  {
    id: 4,
    name: "Moby Dick",
    description: "A novel by Herman Melville about a sea captain's quest.",
    price: "$14",
    img: "/images/4.jpg",
    href: "/books/product/moby-dick",
  },
  {
    id: 5,
    name: "Pride and Prejudice",
    description: "A romance novel by Jane Austen.",
    price: "$10",
    img: "/images/5.jpg",
    href: "/books/product/pride-and-prejudice",
  },
  {
    id: 6,
    name: "The Catcher in the Rye",
    description: "A novel by J.D. Salinger about teenage rebellion.",
    price: "$16",
    img: "/images/6.jpg",
    href: "/books/product/catcher-in-the-rye",
  },
  {
    id: 7,
    name: "War and Peace",
    description: "A historical novel by Leo Tolstoy.",
    price: "$20",
    img: "/images/7.jpg",
    href: "/books/product/war-and-peace",
  },
  {
    id: 8,
    name: "The Hobbit",
    description: "A fantasy novel by J.R.R. Tolkien.",
    price: "$13",
    img: "/images/8.jpg",
    href: "/books/product/the-hobbit",
  },
];

export default function BooksPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800">
      {/* Title Section */}
      <div className="text-center py-6 max-w-4xl w-full mx-auto">
        <h1 className="text-3xl font-bold text-blue-600 dark:text-white">
          Books Collection
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Explore our collection of timeless books, from classic literature to
          modern-day bestsellers.
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
