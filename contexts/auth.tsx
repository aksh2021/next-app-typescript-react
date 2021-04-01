import React from "react";

type ContextProps = {
    user: string,
    setUser: any
};

export const AuthContext = React.createContext<Partial<ContextProps>>({});