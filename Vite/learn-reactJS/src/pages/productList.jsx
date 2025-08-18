import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/productApi";
import { useNavigate, useSearchParams } from "react-router";
import { useState } from "react";
export const ProductList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const limit = 5;
  let skip = 0;
  const url = new URLSearchParams(searchParams);
  
  const { data, isPending, isError } = useQuery({
    queryKey: ["products", limit, skip],
    queryFn: () => fetchProduct(limit, skip),
    retry: true
  });

  if(isPending) {
    return (
      <>
        <div className="">is loading....</div>
      </>
    )
  }

  if(isError) {
    return (
      <>
        <div className="">
          is error....
        </div>
      </>
    )
  }

  const handleGetId = (id) => {
    navigate(`/product/${id}`);
  }

  const handlePage = (pageNumber) => {
    setPage(pageNumber);
    url.set("page", pageNumber)
    skip = (parseInt(pageNumber) - 1) * limit;
    url.set("skip", skip);
    setSearchParams(url);
  }
  return (
    <>
      <div className="">
        {data.products.map((item, index) => 
          <div 
            className="hover:text-blue-500 cursor-pointer" 
            key={index}
            onClick={() => handleGetId(item.id)}
          >
              {item.title}
          </div>
        )}
      </div>

      <div className="text-center mb-[5px]">
        {Array(5).fill('').map((item, index) => 
          <button className={`border border-black mr-[5px] w-[30px] cursor-pointer hover:bg-blue-500 hover:text-white hover:border-0 ${page === index+1 ? "bg-blue-500 text-white border-0" : ""}`} onClick={() => handlePage(index+1)}>{index+1}</button>
        )}
      </div>
    </>
  )
}