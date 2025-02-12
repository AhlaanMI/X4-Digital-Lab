// filepath: /c:/Users/HP/Desktop/X4/my-next-xampp/pages/index.js
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import styles from './Home.module.css';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export async function getStaticProps() {
  try {
    const res = await fetch('http://localhost:3000/api/sales');
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const sales = await res.json();
    console.log('Fetched sales data:', sales); // Log the fetched data
    return { props: { sales } };
  } catch (error) {
    console.error('Error fetching sales:', error);
    return { props: { sales: [] } };
  }
}

export default function Home({ sales }) {
  const data = {
    labels: sales.map(sale => sale.product),
    datasets: [
      {
        label: 'Quantity',
        data: sales.map(sale => sale.quantity),
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Sales Quantity by Product',
      },
    },
  };



  return (
    <div>
      <h1 className={styles.title}>Sales List</h1>
      <ul className={styles.list}>
        {sales.map((sale) => (
          <li key={sale.id} className={styles.listItem}>
            <span className={styles.product}>{sale.product}</span> - {sale.quantity} units - ${sale.price} - {new Date(sale.sale_date).toLocaleDateString()}
            </li>
        ))}
      </ul>
      <div style={{ marginTop: '20px', width: '600px', height: '400px' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}