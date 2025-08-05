import { useState } from "react"
export const Onclick = () => {
  const [show, setShow] = useState(false);

  const handleShowMenu = () => {
    setShow(!show);
  }
  return (
    <>
      <button className=" cursor-pointer" onClick={handleShowMenu}>
        Show menu
      </button>

      <ul className={(show ? "block" : "hidden")}>
        <li>Menu 1</li>
        <li>Menu 2</li>
        <li>Menu 3</li>
        <li>Menu 4</li>
      </ul>
    </>
  )
}