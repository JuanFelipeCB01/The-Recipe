import { useContext, createContext, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false,
    saveUser: () => {},
});

export function AuthProvider({children}){
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [token, setToken] = useState();
    const [user, setUser] = useState();

    // function getToken (){
    //     const tokenData = localStorage.getItem("token");
    //     if(tokenData){
    //         return token;
    //     }
    // }

    function saveUser(response){
        setToken(response.data.token);

        localStorage.setItem("token", token);
        setUser(response.data.user);
        setIsAuthenticated(true);
        
    }

    return(
        <AuthContext.Provider value={{isAuthenticated, user, saveUser}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

