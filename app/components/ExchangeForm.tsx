'use client'

import React, { useState, useEffect } from 'react'
import { FaExchangeAlt, FaCalculator, FaWhatsapp, FaSpinner } from 'react-icons/fa'

const ExchangeForm = () => {
  const [amount, setAmount] = useState('')
  const [usdAmount, setUsdAmount] = useState(0)
  const [bdtAmount, setBdtAmount] = useState(0)
  const [phoneNumber, setPhoneNumber] = useState('')
  const [redotpayId, setRedotpayId] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const RATE = 140 // BDT to USD rate

  useEffect(() => {
    if (amount) {
      const numAmount = parseFloat(amount)
      if (!isNaN(numAmount)) {
        setUsdAmount(numAmount)
        setBdtAmount(numAmount * RATE)
      }
    } else {
      setUsdAmount(0)
      setBdtAmount(0)
    }
  }, [amount])

  const validatePhoneNumber = (phone: string) => {
    const phoneRegex = /^(\+880|0)?1[3-9]\d{8}$/
    return phoneRegex.test(phone.replace(/\s+/g, ''))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      // Validate phone number
      if (!validatePhoneNumber(phoneNumber)) {
        throw new Error('Please enter a valid Bangladeshi phone number')
      }

      // Validate RedotPay ID
      if (!redotpayId.trim()) {
        throw new Error('Please enter your RedotPay ID')
      }

      // Validate amount
      if (usdAmount <= 0) {
        throw new Error('Please enter a valid amount')
      }
      
      // Prepare WhatsApp message
      const message = `New Exchange Request:\n\n` +
        `USD Amount: $${usdAmount}\n` +
        `BDT Amount: ${bdtAmount.toFixed(2)} BDT\n` +
        `Phone Number: ${phoneNumber}\n` +
        `RedotPay ID: ${redotpayId}\n\n` +
        `Rate: 1 USD = ${RATE} BDT`

      // Encode the message for URL
      const encodedMessage = encodeURIComponent(message)
      
      // WhatsApp URL with phone number and message
      const whatsappUrl = `https://wa.me/8801845978534?text=${encodedMessage}`
      
      // Open WhatsApp in new tab
      window.open(whatsappUrl, '_blank')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Exchange Rate Calculator</h2>
        <p className="text-gray-600">Current Rate: 1 USD = {RATE} BDT</p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
            Enter Amount (USD)
          </label>
          <div className="relative">
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => {
                setAmount(e.target.value)
                setError('')
              }}
              className="input-field pl-10"
              placeholder="0.00"
              step="0.01"
              min="0"
              required
              disabled={isLoading}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
          </div>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Your Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phoneNumber}
            onChange={(e) => {
              setPhoneNumber(e.target.value)
              setError('')
            }}
            className="input-field"
            placeholder="+880 1XXXXXXXXX"
            required
            disabled={isLoading}
          />
          <p className="mt-1 text-xs text-gray-500">Format: +880 1XXXXXXXXX</p>
        </div>

        <div>
          <label htmlFor="redotpayId" className="block text-sm font-medium text-gray-700 mb-2">
            Your RedotPay ID
          </label>
          <input
            type="text"
            id="redotpayId"
            value={redotpayId}
            onChange={(e) => {
              setRedotpayId(e.target.value)
              setError('')
            }}
            className="input-field"
            placeholder="Enter your RedotPay ID"
            required
            disabled={isLoading}
          />
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-600">You will receive:</span>
            <span className="text-lg font-semibold text-gray-900">{bdtAmount.toFixed(2)} BDT</span>
          </div>
          <div className="text-sm text-gray-500">
            Rate: 1 USD = {RATE} BDT
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <FaSpinner className="animate-spin text-xl" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <FaWhatsapp className="text-xl" />
              <span>Contact on WhatsApp</span>
            </>
          )}
        </button>
      </form>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start gap-3">
          <FaCalculator className="text-blue-500 mt-1" />
          <div>
            <h3 className="font-medium text-gray-900">How it works</h3>
            <p className="text-sm text-gray-600 mt-1">
              1. Enter the USD amount you want to exchange<br />
              2. Provide your phone number and RedotPay ID<br />
              3. Click the WhatsApp button to contact us<br />
              4. Complete the exchange process
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExchangeForm 