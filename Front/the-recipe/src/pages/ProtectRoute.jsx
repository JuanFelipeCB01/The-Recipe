import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../shared/AuthContext";

export default function ProtectRoute(){

    const auth = useAuth();

    return auth.isAuthenticated ? <Outlet/> : <Navigate to="/login"/>;
    
};