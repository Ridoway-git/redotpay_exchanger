'use client'

import React from 'react'
import { FaExchangeAlt, FaShieldAlt, FaClock, FaUserShield, FaWhatsapp, FaCheckCircle, FaStar, FaLock, FaUserCheck } from 'react-icons/fa'
import dynamic from 'next/dynamic'

const AnimatedSection = dynamic(() => import('./components/AnimatedSection'), {
  ssr: false
})

const ExchangeForm = dynamic(() => import('./components/ExchangeForm'), {
  ssr: false
})

const RateHistory = dynamic(() => import('./components/RateHistory'), {
  ssr: false
})

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <AnimatedSection direction="up">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-8">
                <FaStar className="text-yellow-400" />
                <span className="text-sm font-medium text-gray-700">বাংলাদেশের সেরা এক্সচেঞ্জ সার্ভিস</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Fast & Secure <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Exchange Service
                </span>
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                Get the best USD to BDT exchange rate (140 BDT) with instant processing and secure transactions. Trusted by thousands of customers in Bangladesh.
              </p>

              {/* Rate Display */}
              <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg mb-12 transform hover:scale-105 transition-transform">
                <div className="text-center px-6">
                  <div className="text-sm text-gray-600 mb-1">Current Rate</div>
                  <div className="text-3xl font-bold text-gray-900">1 USD = 140 BDT</div>
                </div>
                <div className="h-12 w-px bg-gray-200"></div>
                <div className="text-center px-6">
                  <div className="text-sm text-gray-600 mb-1">Processing Time</div>
                  <div className="text-3xl font-bold text-gray-900">5-15 min</div>
                </div>
              </div>

              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all">
                  <FaShieldAlt className="text-green-500" />
                  <span className="text-sm text-gray-700">Secure Transactions</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all">
                  <FaClock className="text-blue-500" />
                  <span className="text-sm text-gray-700">24/7 Support</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm hover:shadow-md transition-all">
                  <FaUserShield className="text-purple-500" />
                  <span className="text-sm text-gray-700">Trusted Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Exchange Form */}
          <div className="lg:col-span-2">
            <ExchangeForm />
          </div>

          {/* Rate History */}
          <div className="lg:col-span-1">
            <RateHistory />
          </div>
        </div>

        {/* Features Section */}
        <AnimatedSection direction="up">
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose RedotPay?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Experience the most reliable and secure exchange service with competitive rates and instant processing in Bangladesh.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <FaLock className="text-blue-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Bank-Level Security</h3>
                <p className="text-gray-600">Your transactions are protected with advanced encryption and security measures.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <FaExchangeAlt className="text-green-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Best Rates</h3>
                <p className="text-gray-600">Get the most competitive USD to BDT exchange rates in Bangladesh, updated daily.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FaClock className="text-purple-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Processing</h3>
                <p className="text-gray-600">Your USD to BDT exchange is processed instantly after quick verification.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <FaUserCheck className="text-orange-600 text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Verified Service</h3>
                <p className="text-gray-600">Trusted by thousands of verified users in Bangladesh with 99% satisfaction rate.</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Process Steps */}
        <AnimatedSection direction="up">
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Exchange USD to BDT</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Complete your USD to BDT exchange in three simple steps with our user-friendly process.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">1</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Enter USD Amount</h3>
                <p className="text-gray-600">Enter the USD amount you want to exchange to BDT</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">2</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Contact Us</h3>
                <p className="text-gray-600">Get in touch via WhatsApp for verification</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm text-center transform hover:-translate-y-1 transition-all">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Receive BDT</h3>
                <p className="text-gray-600">Get your BDT instantly after verification</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Trust Indicators */}
        <AnimatedSection direction="up">
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Thousands in Bangladesh</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Join our growing community of satisfied customers who trust RedotPay for their USD to BDT exchange needs.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-blue-600 mb-2">10000$+</div>
                <div className="text-gray-600">Exchanged</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-blue-600 mb-2">99%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
              <div className="text-center transform hover:scale-105 transition-transform">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600">Support</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Warning Notice */}
        <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-lg p-6 transform hover:scale-[1.02] transition-transform">
          <div className="flex items-start gap-4">
            <FaCheckCircle className="text-yellow-500 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-yellow-800 mb-2">Important Notice</h3>
              <p className="text-yellow-700">
                Please ensure you have verified your RedotPay account before making any transactions. 
                For security reasons, all transactions require account verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
} 