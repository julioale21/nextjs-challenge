
import React from 'react';
import { HomeContent } from '../components/Home';

const fetchProducts = async () => {
  const response = await fetch(`${process.env.BASE_URL || ""}/api/products`, { next: { revalidate: 10 } });

  return await response.json();
}


export default async function HomeView() {
  const products = await fetchProducts();

  if (!products) return 'Loading...';

  return (
    <HomeContent products={products} />
  )
}
