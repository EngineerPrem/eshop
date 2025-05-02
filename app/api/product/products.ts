import { NextRequest, NextResponse } from 'next/server';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
}

// In-memory products store
let products: Product[] = [];

// Function to insert product
function insertProduct(name: string, description: string, price: number) {
  const newProduct: Product = {
    id: products.length + 1, // Generate simple unique ID
    name,
    description,
    price,
  };

  products.push(newProduct); // Add product to the store
  return newProduct;
}

// Function to get all products
function getProducts() {
  return products;
}

export async function POST(req: NextRequest) {
  try {
    const { name, description, price } = await req.json();
    const newProduct = insertProduct(name, description, price);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to insert product' }, { status: 500 });
  }
}

export async function GET() {
  const allProducts = getProducts();
  return NextResponse.json(allProducts, { status: 200 });
}
