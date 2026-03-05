import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../auth/useUser";
import Authloader from "../../../shared/components/loaders/Authloader";
import type { User } from "../../auth/type";

const ProtectedRoute = ({accessRole} : {accessRole ?:User["role"]}) => {
  const { data: user, isLoading, isError } = useUser();

  if (isLoading) return <Authloader/>;

  if (isError || !user) {
    return <Navigate to="/login" replace />;
  }

  if(accessRole && user.role !== accessRole){
    return <Navigate to="/" replace/>
  }

  return <Outlet />;
};

export default ProtectedRoute;
