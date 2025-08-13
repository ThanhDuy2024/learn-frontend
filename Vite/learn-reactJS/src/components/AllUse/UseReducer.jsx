import { useReducer } from "react"

const reducer = (state, action) => {
  switch (action) {
    case "UP":
      return state + 1;
    case "DOWN":
      return state - 1;
    default:
      break;
  }
  return 0;
}

export const UseReducer = () => {
  const [count, dispatchCount] = useReducer(reducer, 0);

  const handleUp = () => {
    dispatchCount("UP");
  }

  const handleDown = () => {
    dispatchCount("DOWN");
  }
  return (
    <>
      <div>{count}</div>
      <button className="block" onClick={handleUp}>UP</button>
      <button onClick={handleDown}>DOWN</button>
    </>
  )
}