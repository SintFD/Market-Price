

export const ProductsInfo = async (brandName) => {
  const response = await fetch(
    `http://localhost:3001/product/${brandName.toLowerCase()}`
  );
  const data = await response.json();

  return data;
};

export const searchProducts = async (product) => {
  const response = await fetch(
    `http://localhost:3001/searchProduct/${product.toLowerCase()}`
  );
  const data = await response.json();

  return data;
};
