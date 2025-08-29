import { Navigate, useNavigate } from "react-router";
import { useQuery } from "@tanstack/react-query";
import { profileApi } from "../../../api/auth/authApi";

export const ProtectedAdmin = ({children}) => {
  const navigate = useNavigate();
  const { data: admin, isLoading } = useQuery({
    queryKey: ["adminProfile"],
    queryFn: async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) return navigate("/admin/login"); // sau nay se call api refesh token
      const res = await profileApi(token);
      if (res.code === "success") {
        return res.data;
      } else {
        return navigate("/admin/login");
      }
    },
    retry: false,
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <p>Loading...</p>;

  if (!admin) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};
