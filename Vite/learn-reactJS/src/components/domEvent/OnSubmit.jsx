import { useState } from "react";
export const OnSubmit = () => {
  const [name, setName] = useState();
  const handleSubmit = (event) => {
    event.preventDefault();
    const keyword = event.target.fullName.value;
    setName(keyword);
  }
  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" className="border border-amber-800" name="fullName"/>
        <button className="cursor-pointer">Submit</button>
      </form>

      <p>{name}</p>
    </>
  )
}