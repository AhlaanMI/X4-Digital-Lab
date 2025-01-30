import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const sales = await prisma.sales.findMany();
      console.log('Fetched sales data:', sales); // Log the fetched data
      res.status(200).json(sales);
    } catch (error) {
      console.error('Error fetching sales from database:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}