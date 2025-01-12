import { createContext, useEffect, useState } from "react";


const AuthContext=createContext(
    {
        token:"",
        isLoggedIn:false,
        login:()=>{},
        logout:()=>{}
    }
);

export const AuthContextProvider=(props)=>{
    const localStorageToken=localStorage.getItem('token');
    const [token, setToken]=useState(localStorageToken);
    const [isLoggedIn, setIsLoggedIn]=useState(!!localStorageToken);
  
    const loginHandler=(token)=>{
        if(!token) return false;
        localStorage.setItem('token',token);
        setToken(token);
        setIsLoggedIn(true);
        setTimeout(()=>{
            localStorage.removeItem('token');
        },1000*5*60)
        return true;
    }
    const logoutHandler=()=>{
        setIsLoggedIn(false);
        localStorage.removeItem('token');
        setToken("");
        return true;
    }
    const Auth={
        token:token,
        isLoggedIn:isLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }
    return <AuthContext.Provider value={Auth}>{props.children}</AuthContext.Provider>
}

export default AuthContext;