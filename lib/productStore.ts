// Initialize an empty array to store products in memory
let products: { id: number, name: string, description: string, price: number }[] = [];

// Function to insert a product into the in-memory store
export function insertProduct(name: string, description: string, price: number) {
  const newProduct = {
    id: products.length + 1, // Simple ID generation based on length of array
    name,
    description,
    price,
  };
  
  products.push(newProduct); // Add the new product to the array
  return newProduct; // Return the newly inserted product
}

// Function to get all products from the in-memory store
export function getProducts() {
  return products;
}
