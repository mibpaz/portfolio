import { staggerChildrenVariants } from '@/config/motion'
import { motion } from 'framer-motion'
import React from 'react'

export const SkillsGrid = ({ children }: { children: React.ReactNode }) => {

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
      variants={staggerChildrenVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  )
}
