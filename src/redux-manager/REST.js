

export const ProductsInfo = async (brandName) => {
  const response = await fetch(
    `http://localhost:3001/user/${brandName.toLowerCase()}`
  );
  const data = await response.json();

  return data;
};
