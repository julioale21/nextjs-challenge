import React from 'react';
import ProductDetail from '@/components/ProductDetail';

interface ProducDetailProps {
  params: {
    slug: string;
  } 
}

const fetchStock = async (productId: string) => {
  const response = await fetch(`${process.env.BASE_URL}/api/stock-price/${productId}`, { next: { revalidate: 10 } });

  return await response.json();
}

const ProducDetail: React.FC<ProducDetailProps> = async ({ params }) => {

  const { slug } = params;

  const productId = slug.split('-')[0];

  const productStock = await fetchStock(productId);

  console.log('params',params)
  return (
    <ProductDetail />
  )
}

export default ProducDetail