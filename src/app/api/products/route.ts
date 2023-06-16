import { NextResponse } from "next/server";

import products from "../../../bd/products";

import { Product } from "../../../models/Product";


export async function GET() {
    const data: Product[] = products;

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(NextResponse.json(data));
      }, 1000);
    });
  }