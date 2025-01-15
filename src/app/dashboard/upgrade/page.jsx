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
      <div className="px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-2 mb-12">
            <div className="flex items-center justify-center gap-2 text-indigo-600 font-medium mb-2">
              <Sparkles className="h-5 w-5 text-yellow-400" />
              <span>New Features Available</span>
            </div>
            
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 tracking-tight">
              Choose your perfect plan
            </h1>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Start with our free plan and upgrade as you grow. No credit card required.
            </p>
            
            <div className="inline-flex items-center justify-center gap-4 p-1 bg-gray-800/80 backdrop-blur-sm rounded-full">
              <span className={`px-4 py-2 rounded-full transition-all duration-300 ${
                !isYearly ? 'bg-gray-700 text-white' : 'text-gray-400'
              }`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className="relative w-14 h-7 rounded-full bg-indigo-600/20 transition-colors focus:outline-none"
              >
                <span
                  className={`absolute left-1 top-1 h-5 w-5 transform rounded-full bg-indigo-600 shadow transition-transform duration-300 ${
                    isYearly ? 'translate-x-7' : ''
                  }`}
                />
              </button>
              <span className={`px-4 py-2 rounded-full transition-all duration-300 ${
                isYearly ? 'bg-gray-700 text-white' : 'text-gray-400'
              }`}>
                Yearly
                <span className="ml-2 text-sm text-indigo-600 font-medium">
                  Save 20%
                </span>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 ${
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

                <div className="mb-8">
                  <h3 className={`text-2xl font-bold ${plan.isPopular ? 'text-white' : 'text-gray-100'}`}>
                    {plan.name}
                  </h3>
                  <p className={`mt-2 ${plan.isPopular ? 'text-indigo-100' : 'text-gray-400'}`}>
                    {plan.description}
                  </p>
                  <div className="mt-6 flex items-baseline">
                    <span className={`text-5xl font-bold tracking-tight ${
                      plan.isPopular ? 'text-white' : 'text-gray-100'
                    }`}>
                      ${isYearly ? plan.price.yearly : plan.price.monthly}
                    </span>
                    <span className={`ml-2 ${plan.isPopular ? 'text-indigo-100' : 'text-gray-400'}`}>
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className={`rounded-full p-1 ${
                        plan.isPopular ? 'bg-indigo-400/20' : 'bg-indigo-100'
                      }`}>
                        <Check className={`h-4 w-4 ${
                          plan.isPopular ? 'text-indigo-100' : 'text-indigo-600'
                        }`} />
                      </div>
                      <span className={plan.isPopular ? 'text-indigo-100' : 'text-gray-400'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

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
    </div>
  );
};

export default PricingPage;
