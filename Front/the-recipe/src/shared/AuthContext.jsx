import { useContext, createContext, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState();
    const [user, setUser] = useState();

    function saveUser(response){

        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        setUser(response.data.user);
        setIsAuthenticated(true);
        
    };

    function clearAuth(){
        
        localStorage.clear();
        setIsAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, user, saveUser, clearAuth, token}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

