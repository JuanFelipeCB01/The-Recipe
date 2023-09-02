import { useContext, createContext, useState } from "react";

const AuthContext = createContext({
    isAuthenticated: false
});

export function AuthProvider({children}){
    const [isAuthenticated, setIsAthenticated] = useState(false);
    // const [jwt, setJWT] = useState();

    return(
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);

