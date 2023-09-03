import { useContext, createContext, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState();
    const [user, setUser] = useState();

    function saveUser(response){

        setToken(response.data.token);
        localStorage.setItem("token", token);

        setUser(response.data.user);
        setIsAuthenticated(true);
        
    };

    function clearAuth(){
        
        localStorage.clear();
        setIsAuthenticated(false);
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, user, saveUser, clearAuth}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

