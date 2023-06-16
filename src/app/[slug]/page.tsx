import React from 'react';
import ProductDetail from '@/components/ProductDetail';
import { Product } from '@/models/Product';

interface ProducDetailProps {
  params: {
    slug: string;
  } 
}

const fetchStock = async (productId: string) => {
  const response = await fetch(`${process.env.BASE_URL || ''}/api/stock-price/${productId}`, { next: { revalidate: 10 } });

  return await response.json();
}

const fetchProduct = async (productId: string) => {
  const response = await fetch(`${process.env.BASE_URL || ""}/api/products/${productId}`, { next: { revalidate: 10 } });

  return await response.json();
}

const ProducDetailView: React.FC<ProducDetailProps> = async ({ params }) => {

  const { slug } = params;

  const productId: string = slug.split('-')[0];

  const productStock: Partial<Product> = await fetchStock(productId);

  const product: Partial<Product> = await fetchProduct(productId);


  return (
    <ProductDetail {...product} {...productStock} />
  )
}

export default ProducDetailView