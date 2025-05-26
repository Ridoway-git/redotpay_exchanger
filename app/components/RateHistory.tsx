'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa'

const RateHistory = () => {
  // Mock data for May 2025
   const rateHistory = [
    { date: '2025-05-27', rate: 140 }, // Current rate
    { date: '2025-05-26', rate: 139 },
    { date: '2025-05-25', rate: 139 },
    
  ]

  const currentRate = rateHistory[0].rate // Current rate (May 8)
  const previousRate = rateHistory[1].rate // Previous rate (May 7)
  const rateChange = currentRate - previousRate
  const isPositive = rateChange >= 0

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg p-6"
    >
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Exchange Rate History</h3>
        <FaChartLine className="text-blue-500" />
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">1 USD = {currentRate} BDT</span>
          <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {isPositive ? <FaArrowUp /> : <FaArrowDown />}
            <span className="text-sm ml-1">{Math.abs(rateChange)} BDT</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">Last updated: {rateHistory[0].date}</p>
      </div>

      <div className="space-y-4">
        {rateHistory.map((item, index) => (
          <div key={item.date} className="flex items-center justify-between">
            <span className="text-sm text-gray-600">{item.date}</span>
            <span className="text-sm font-medium text-gray-900">{item.rate} BDT</span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <p className="text-sm text-gray-600">
          Rates are updated daily. The exchange rate may vary slightly based on the amount and payment method.
        </p>
      </div>
    </motion.div>
  )
}

export default RateHistory 
