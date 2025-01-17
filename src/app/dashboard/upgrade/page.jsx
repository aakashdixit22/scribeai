"use client"
import React, { useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: 'Free',
      description: 'Perfect for getting started',
      price: { monthly: 0, yearly: 0 },
      features: [
        '2 auto tracking',
        '7 Day transaction clearing',
        '24/7 Customer support',
        'All widget access'
      ],
      isPopular: false
    },
    {
      name: 'Advanced',
      description: 'Best for professionals',
      price: { monthly: 150, yearly: 1500 },
      features: [
        'AI Advisor',
        'Unlimited auto tracking',
        '1 Day transaction clearing',
        'Priority customer support',
        'All Widget Access'
      ],
      isPopular: true
    },
    {
      name: 'Team',
      description: 'For growing teams',
      price: { monthly: 180, yearly: 1800 },
      features: [
        'AI Advisor',
        'Unlimited auto tracking',
        '1 Day transaction clearing',
        'Priority customer support',
        'All Widget Access',
        'Team collaboration tools'
      ],
      isPopular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8 sm:py-12 lg:py-16">
        <div className="text-center space-y-4 mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-5 w-5 text-yellow-400" />
            <span className="text-indigo-400">New Features Available</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600">
            Choose your perfect plan
          </h1>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Start with our free plan and upgrade as you grow
          </p>

          <div className="flex items-center justify-center gap-4 p-1">
            <span className={`px-4 py-2 ${!isYearly ? 'text-white' : 'text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="relative w-14 h-7 rounded-full bg-indigo-600/20"
            >
              <span className={`absolute left-1 top-1 h-5 w-5 rounded-full bg-indigo-600 transition-transform duration-300 ${
                isYearly ? 'translate-x-7' : ''
              }`} />
            </button>
            <span className={`px-4 py-2 ${isYearly ? 'text-white' : 'text-gray-400'}`}>
              Yearly <span className="text-sm text-indigo-400">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col h-full relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.isPopular 
                  ? 'bg-gradient-to-b from-indigo-600 to-violet-600 text-white shadow-xl'
                  : 'bg-gray-800/80 backdrop-blur-sm shadow-lg hover:shadow-xl'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-0 right-0 mx-auto w-36 rounded-full bg-gradient-to-r from-amber-400 to-orange-400 px-3 py-1 text-sm font-medium text-white text-center shadow-lg">
                  Recommended
                </div>
              )}

              <div className="flex-1">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="mt-2 text-gray-300">{plan.description}</p>
                  <div className="mt-6 flex items-baseline">
                    <span className="text-5xl font-bold">
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className="ml-2 text-gray-300">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-indigo-400" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={`w-full rounded-2xl px-4 py-4 text-center font-medium transition-all duration-300 ${
                  plan.isPopular
                    ? 'bg-white text-indigo-600 hover:bg-gray-50'
                    : 'bg-gradient-to-r from-indigo-600 to-violet-600 text-white hover:opacity-90'
                }`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;