import { NextResponse } from 'next/server';

import { Product } from "../../../../models/Product";

import products from "../../../../bd/products";


export async function GET(req: Request) {

  const productId = req.url.slice(req.url.lastIndexOf('/') + 1);

  const product: Product | undefined = products.find((product) => product.id === Number(productId));

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(NextResponse.json(product));
    }, 1000);
  });
}