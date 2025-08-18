export const fetchProduct = async (limit, skip) => {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
  return res.json();
}

export const fetchProductDeatil = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  return res.json();
}