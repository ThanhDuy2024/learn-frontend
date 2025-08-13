import { useContext } from "react"
import { store } from "./UseEffect"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export const UseContext = () => {
  const products = useContext(store);
  return (
    <>
      {products.length > 0 ?
        (
          <ul className="ml-[50px]">
            {products.map((item, index) =>
              <li key={index}>{item.title}</li>
            )}
          </ul>
        )
        :
        (
          <ul className="ml-[50px]">
            {Array(10).fill("1").map((item, index) => (
              <Skeleton key={index} />
            ))}
          </ul>
        )
      }
    </>
  )
}