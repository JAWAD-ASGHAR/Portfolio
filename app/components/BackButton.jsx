"use client";

import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'
import { motion } from 'framer-motion'

const BackButton = ({onClick}) => {
  return (
    <motion.button
      onClick={onClick}
      className="h-16 w-16 justify-center items-center rounded-full bg-gray-600 hover:bg-gray-700 transition-all duration-300 ease-in-out flex"
      whileHover={{ scale: 1.1, rotate: -5 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <IoArrowBackOutline size={30} color="white" />
    </motion.button>
  )
}

export default BackButton