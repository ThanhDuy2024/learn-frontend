import { useEffect, useState, createContext } from "react"
import { UseContext } from "./UseContext";

export const store = createContext();

export const UseEffect = () => {
  const [listData, setListData] = useState([]);
  const [category, setCategory] = useState("beauty");
  const [products, setproducts] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      fetch(`https://dummyjson.com/products/categories`)
        .then(res => res.json())
        .then(data => {
          setListData(data);
        })
    }, 1000);
  }, []);

  useEffect(() => {
    if(products.length > 0) {
      setproducts([]);
    }
    setTimeout(() => {
      fetch(`https://dummyjson.com/products/category/${category}`)
        .then(res => res.json())
        .then(data => {
          setproducts(data.products);
        })
    }, 1000);
  }, [category]);

  const categoryData = [
    {
      id: 1,
      title: "beauty"
    },
    {
      id: 2,
      title: "fragrances"
    },
    {
      id: 3,
      title: "furniture"
    },
  ]

  const handleCategory = (title) => {
    setCategory(title);
  }
  return (
    <>
      <div className="mt-[20px]">
        {categoryData.map((item, index) =>
          <button key={index} 
          className="ml-[5px] border border-black p-[10px] cursor-pointer hover:bg-blue-500 hover:text-white"
          onClick={() => handleCategory(item.title)}>
            {item.title}
          </button>
        )}
      </div>
      <store.Provider value={products}>
        <UseContext/>
      </store.Provider>
    </>
  )
}