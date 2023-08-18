import { ReactNode, createContext, useState } from "react";

type ContextType = {
    userId?: string,
    setUserId?: any
}
const UserType = createContext<ContextType | null>(null);

const UserContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userId, setUserId] = useState("");
    return (
        <UserType.Provider value={{ userId, setUserId }}>
            {children}
        </UserType.Provider>
    )
}

export { UserType, UserContext };