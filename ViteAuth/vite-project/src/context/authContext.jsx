import { createContext, useContext } from "react"
import { useMutation } from "@tanstack/react-query"
import { loginApi } from "../api/auth/authApi";
import { toast } from "sonner"
import { useNavigate } from "react-router";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const handleLogin = ({ email, password }) => {
    login.mutate({ email, password });
  }

  const login = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      if (data === false) {
        toast.error("Your email or password incorrect");
      } else {
        localStorage.setItem("accessToken", data.accessToken);
        toast.success(data.message)
        setTimeout(() => {
          navigate("/admin/dashboard");
        }, 1000) 
      }
    },
    onError: () => {
      console.log("Login error")
    }
  })


  return (
    <AuthContext.Provider value={{ handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);