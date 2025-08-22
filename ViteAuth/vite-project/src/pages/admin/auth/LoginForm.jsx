import { useState } from "react"
import { Link } from "react-router"

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail(event.target.email.value);
    setPassword(event.target.password.value);
  }

  console.log(email);
  console.log(password);
  return (
    <>
      <div className="w-[700px] mx-auto text-center p-[20px] shadow-md rounded-[10px] mt-[150px]">
        <h1 className="text-[#1e293b] text-[1.875rem] font-[600] mb-[8px]">Welcome Back</h1>
        <div className="text-[#64748b] text-[15px] mb-[36px]">Please sign in to your corporate account</div>
        <form action="" onSubmit={handleSubmit}>
          <div className="">
            <input type="email" placeholder="Enter your email" className="w-[75%] border-2 border-[#e2e8f0]  outline-0  p-[10px] rounded-[8px] mb-[15px]" name="email"/>
          </div>
          <div className="">
            <input type="password" placeholder="Enter your password" className="w-[75%] border-2 border-[#e2e8f0] outline-0 p-[10px] rounded-[8px] mb-[20px]" name="password"/>
          </div>

          <button className="w-[75%] bg-blue-500 p-[10px] rounded-[10px] text-[18px] text-white cursor-pointer">Login</button>
        </form>

        <div className="flex justify-between items-center w-[75%] mx-auto mt-[10px]">
          <Link className="hover:text-blue-500" to={"/admin/register"}>
            Do you not account?
          </Link>

          <Link className="hover:text-blue-500" to={"/admin/forgot/password"}>
            Forgot Password!
          </Link>
        </div>
      </div>
    </>
  )
}