import { createContext, useState } from "react";


const AuthContext=createContext(
    {
        token:"",
        isLoggedIn:false,
        login:()=>{},
        logout:()=>{}
    }
);

export const AuthContextProvider=(props)=>{
    const [token, setToken]=useState("");
    const loginHandler=(token)=>{
        if(!token) return false;
        setToken(token);
        AuthContext.isLoggedIn=true;
        return true;
    }
    const logoutHandler=()=>{
        AuthContext.isLoggedIn=false;
        setToken("");
        return true;
    }
    const Auth={
        token:token,
        isLoggedIn:AuthContext.isLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }
    return <AuthContext.Provider value={Auth}>{props.children}</AuthContext.Provider>
}

export default AuthContext;