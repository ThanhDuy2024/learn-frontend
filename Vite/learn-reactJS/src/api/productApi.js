export const fetchProduct = async () => {
  const res = await fetch('https://dummyjson.com/products')
  return res.json();
}

export const fetchProductDeatil = async (id) => {
  const res = await fetch(`https://dummyjson.com/products/${id}`)
  return res.json();
}