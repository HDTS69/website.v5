'use client'

import { ServiceCategoryLayout } from '../../components/ServiceCategoryLayout'

export default function HotWaterBuyersGuidePage() {
  return (
    <ServiceCategoryLayout
      title="Hot Water System Buyers Guide"
      description="Our comprehensive guide to help you choose the perfect hot water system for your home, considering factors like energy efficiency, capacity, running costs, and environmental impact."
    >
      <div className="mx-auto mt-8 max-w-4xl text-gray-300">
        <h2 className="mb-4 text-2xl font-semibold text-white">
          How to Choose the Right Hot Water System
        </h2>

        <p className="mb-4">
          Selecting the right hot water system for your home is an important
          decision that affects your comfort, energy bills, and environmental
          footprint. This guide will help you understand the different types of
          hot water systems available and the factors to consider when making
          your choice.
        </p>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-white">
          Types of Hot Water Systems
        </h3>

        <div className="mb-4">
          <h4 className="mb-2 text-lg font-medium text-[#00E6CA]">
            Gas Hot Water Systems
          </h4>
          <p>
            Gas hot water systems are available in both storage and continuous
            flow options. They heat water quickly and are generally more
            energy-efficient than electric systems, resulting in lower running
            costs. Ideal for households with access to natural gas.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="mb-2 text-lg font-medium text-[#00E6CA]">
            Electric Hot Water Systems
          </h4>
          <p>
            Electric hot water systems are available in storage and
            instantaneous models. They're relatively inexpensive to purchase and
            install but typically have higher running costs. Best suited for
            homes with off-peak electricity rates and areas without gas access.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="mb-2 text-lg font-medium text-[#00E6CA]">
            Heat Pump Systems
          </h4>
          <p>
            Heat pump systems work like a refrigerator in reverse, extracting
            heat from the air to warm the water. They're extremely
            energy-efficient, using up to 70% less electricity than traditional
            electric systems, and are eligible for government rebates.
          </p>
        </div>

        <div className="mb-4">
          <h4 className="mb-2 text-lg font-medium text-[#00E6CA]">
            Solar Hot Water Systems
          </h4>
          <p>
            Solar systems use roof-mounted panels to capture the sun's energy
            and heat water. They typically include a booster for cloudy days.
            While they have higher upfront costs, they offer the lowest running
            costs and environmental impact, with available rebates to offset
            initial expenses.
          </p>
        </div>

        <h3 className="mb-3 mt-6 text-xl font-semibold text-white">
          Factors to Consider
        </h3>

        <ul className="mb-6 list-disc space-y-2 pl-5">
          <li>
            <span className="font-medium text-white">Household Size:</span> The
            number of people in your home determines the capacity you'll need
          </li>
          <li>
            <span className="font-medium text-white">Available Space:</span>{' '}
            Consider where the unit will be installed and space constraints
          </li>
          <li>
            <span className="font-medium text-white">Energy Efficiency:</span>{' '}
            Higher star ratings mean lower running costs and environmental
            impact
          </li>
          <li>
            <span className="font-medium text-white">Climate:</span> Your local
            climate affects the efficiency of certain systems, particularly
            solar and heat pump
          </li>
          <li>
            <span className="font-medium text-white">
              Initial vs. Running Costs:
            </span>{' '}
            Balance upfront purchase price against long-term operating costs
          </li>
          <li>
            <span className="font-medium text-white">Available Rebates:</span>{' '}
            Government incentives can significantly reduce costs for
            energy-efficient options
          </li>
        </ul>

        <div className="mb-8 rounded-lg border border-gray-700 bg-gray-800 p-6">
          <h3 className="mb-4 text-xl font-semibold text-white">
            Need Expert Advice?
          </h3>
          <p className="mb-4">
            Our licensed plumbers can help you select the perfect hot water
            system for your specific needs and budget. We provide
            obligation-free quotes and expert installation services.
          </p>
          <p className="font-medium text-[#00E6CA]">
            Contact us today for personalized advice on your hot water system
            options.
          </p>
        </div>
      </div>
    </ServiceCategoryLayout>
  )
}
