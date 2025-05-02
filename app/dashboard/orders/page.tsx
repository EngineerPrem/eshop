'use client'

import { motion } from 'framer-motion'

export default function OrdersPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h1 className="text-2xl font-bold mb-4">Your Orders</h1>
      <p>Here you’ll see all your placed orders once they’re fetched from the database.</p>
    </motion.div>
  )
}
