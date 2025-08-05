import { useState } from "react"
export const OnChange = () => {
  const users = [
    {
      name: "Le Van A"
    },
    {
      name: "Le Van C"
    }, 
    {
      name: "Nguyen Thi C"
    },
    {
      name: "Lam Thanh Duy"
    }
  ]
  const [user, setUser] = useState([]);
  const handleChange = (event) => {
    const keyword = event.target.value;
    const ul = document.querySelector(".menu");
    const findUser = users.filter(item => item.name.includes(keyword));
    const html = findUser.map(item => {
      return `<li>${item.name}<\li>`
    })
    ul.innerHTML = html.join("");
  }
  return (
    <>
      <input type="text" onChange={handleChange} className="border border-amber-800"/>

      <ul className="menu">

      </ul>
    </>
  )
}