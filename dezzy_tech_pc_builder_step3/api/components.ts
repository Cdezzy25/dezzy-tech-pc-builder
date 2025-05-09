export async function handler(req, res) {
  return res.json([
    { category: 'cpu', name: 'Ryzen 5 5600X', price: 160 },
    { category: 'gpu', name: 'RTX 3060', price: 330 },
    { category: 'ram', name: '16GB DDR4', price: 55 },
    { category: 'psu', name: '550W Bronze', price: 49 }
  ])
}
