'use client'

import { motion } from 'framer-motion'

export default function CategoriesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-2xl font-bold mb-4">Categories</h1>
      <p>You can manage product categories here.</p>
    </motion.div>
  )
}
