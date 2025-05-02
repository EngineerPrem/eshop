"use client";

import { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { useAuthStore } from "@/store/useAuthStore";
import { motion } from "framer-motion";
import Image from "next/image";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const categories = [
    {
      name: "Electronics",
      img: "/images/0.1.jpg",
      description: "Explore the latest gadgets, phones, and tech accessories.",
      href: "/electronics/product",
    },
    {
      name: "Furniture",
      img: "/images/0.2.jpg",
      description: "Discover stylish and comfortable furniture for your home.",
      href: "/furniture",
    },
    {
      name: "Clothing",
      img: "/images/0.3.jpg",
      description: "Find the trendiest clothes for every season.",
      href: "/clothing",
    },
    {
      name: "Books",
      img: "/images/0.4.jpg",
      description:
        "Dive into a world of fiction, non-fiction, and educational books.",
      href: "/books",
    },
    {
      name: "Toys",
      img: "/images/0.5.jpg",
      description: "Bring joy to your kids with fun and educational toys.",
      href: "/toys",
    },
    {
      name: "Sports",
      img: "/images/0.6.jpg",
      description:
        "Gear up for your next sports adventure with top-quality products.",
      href: "/sports",
    },
    {
      name: "Health & Beauty",
      img: "/images/0.8.jpg",
      description: "Pamper yourself with our health and beauty essentials.",
      href: "/health-beauty",
    },
    {
      name: "Groceries",
      img: "/images/0.7.jpg",
      description:
        "Fresh and organic groceries delivered straight to your door.",
      href: "/grocery",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-4 shadow-md bg-gray-100 dark:bg-gray-800">
        <div className="flex items-center space-x-2">
          <Link href="/dashboard">
            <HiMenu
              className="text-2xl text-blue-600 cursor-pointer"
              title="Dashboard"
            />
          </Link>
          <div className="text-2xl font-bold text-blue-600 dark:text-white">
            ShopX
          </div>
        </div>

        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-black dark:text-white"
          />
        </div>

        <div className="flex items-center space-x-4">
        {!isLoggedIn ? (
  <Link href="/login">
    <Button variant="outline">Login</Button>
  </Link>
) : (
  <>
    <span className="text-sm text-gray-800 dark:text-white">
      Welcome, {user?.name || "User"}
    </span>
    <Button
      variant="outline"
      onClick={logout}
      className="text-red-600 border-red-600 hover:bg-red-100"
    >
      Logout
    </Button>
  </>
)}

          <Link
            href="/cart"
            className="flex items-center space-x-1 text-blue-600 hover:underline"
          >
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
          </Link>
        </div>
      </nav>

      {/* Image Slider */}
      <motion.div
        className="w-full max-w-6xl mx-auto mt-6 overflow-hidden rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={sliderImages[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          width={1600}
          height={600}
          className="w-full h-[600px] object-cover rounded-2xl transition-all duration-700"
          priority
        />
      </motion.div>

      {/* Categories */}
      <motion.div
        className="p-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {categories.map((category) => (
          <div
            key={category.name}
            className="group bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition duration-300"
          >
            <div className="flex flex-col items-center text-center space-y-2">
              <Image
                src={category.img}
                alt={category.name}
                width={300}
                height={200}
                className="w-full h-32 object-cover rounded-md"
              />
              <h3 className="text-lg font-semibold text-black dark:text-white group-hover:text-blue-600 transition">
                {category.name}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {category.description}
              </p>
              <Link href={category.href}>
                <Button
                  variant="outline"
                  className="mt-3 text-blue-600 border-blue-600 hover:bg-blue-100"
                >
                  View More
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

const sliderImages = [
  "/images/slider1.jpg",
  "/images/slider2.jpg",
  "/images/slider3.jpg",
  "/images/slider4.jpg",
  "/images/slider5.jpg",
];
