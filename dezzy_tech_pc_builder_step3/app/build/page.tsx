'use client'
import { useState } from 'react'

const mockComponents = {
  cpu: ['Ryzen 5 5600X', 'Intel i5-12400F'],
  gpu: ['RTX 3060', 'RX 6700 XT'],
  ram: ['16GB DDR4', '32GB DDR5'],
  psu: ['550W Bronze', '750W Gold']
}

const prices: Record<string, number> = {
  'Ryzen 5 5600X': 160,
  'Intel i5-12400F': 150,
  'RTX 3060': 330,
  'RX 6700 XT': 379,
  '16GB DDR4': 55,
  '32GB DDR5': 99,
  '550W Bronze': 49,
  '750W Gold': 89
}

export default function BuildPage() {
  const [selected, setSelected] = useState<Record<string, string>>({})

  const total = Object.values(selected).reduce((sum, item) => {
    return sum + (prices[item] || 0)
  }, 0)

  function handleSelect(category: string, part: string) {
    setSelected(prev => ({ ...prev, [category]: part }))
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Build Your PC</h1>
      {Object.entries(mockComponents).map(([category, options]) => (
        <div key={category} className="mb-4">
          <label className="block mb-1 font-semibold capitalize">{category}</label>
          <select
            value={selected[category] || ''}
            onChange={(e) => handleSelect(category, e.target.value)}
            className="w-full bg-gray-800 text-white p-2 rounded"
          >
            <option value="">Select a {category}</option>
            {options.map(part => (
              <option key={part} value={part}>{part} - ${prices[part]}</option>
            ))}
          </select>
        </div>
      ))}
      <div className="mt-6 text-xl font-bold">Total Price: ${total.toFixed(2)}</div>
    </div>
  )
}

