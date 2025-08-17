import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router"
import { fetchProductDeatil } from "../api/productApi";

export const ProductDetail = () => {
  const { id } = useParams();

  const { data } = useQuery({
    queryKey: ["productDeatail", id],
    queryFn: () => fetchProductDeatil(id),
    retry: true
  })
  return (
    <>
      {data && (
        <div className="">
          <div className="" key={data.id}>
            {data.title}
            <br />
            {data.price}
          </div>
        </div>
      )}
    </>
  )
}