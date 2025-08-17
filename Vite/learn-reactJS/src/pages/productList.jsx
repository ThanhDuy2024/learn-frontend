import { useQuery } from "@tanstack/react-query";
import { fetchProduct } from "../api/productApi";
import { useNavigate } from "react-router";
export const ProductList = () => {
  const navigate = useNavigate();
  const { data, isPending, isError } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
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
    </>
  )
}