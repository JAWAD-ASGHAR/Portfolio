import React from 'react'
import { IoArrowBackOutline } from 'react-icons/io5'

const BackButton = () => {
  return (
    <button
    onClick={() => window.history.back()}
    className="h-16 w-16 justify-center items-center rounded-full bg-gray-600 hover:bg-gray-700 transition-all duration-300 ease-in-out flex"
  >
    <IoArrowBackOutline size={30} color="white" />
  </button>
  )
}

export default BackButton