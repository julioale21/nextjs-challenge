import { NextResponse } from "next/server";

import products from "../../../../bd/products";
import stockPrices from "../../../../bd/stock-price";

import { Product } from "../../../../models/Product";


export async function GET(req: Request) {

  const productId = req.url.slice(req.url.lastIndexOf('/') + 1);

  const product: Partial<Product> | undefined = products.find((product) => product.id === Number(productId));

  let response: any = [];

  if (product) {
    response = product?.skus?.map((sku) => {
      const code = Number(sku.code);

      const stock = stockPrices[code as keyof typeof stockPrices];

      return { ...sku, ...stock }
    });
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(NextResponse.json({ stocks: response }));
    }, 1000);
  });
}