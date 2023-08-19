import { ReactNode, createContext, useState } from "react";

interface ContextType {

    userId?: string,
    setUserId?: (id: string) => void;
}
const UserType = createContext<ContextType | null>(null);

const UserContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [userId, setUserId] = useState("");

    console.log("context::" +userId)
    return (
        <UserType.Provider value={{ userId, setUserId }}>
            {children}
        </UserType.Provider>
    )
}

export { UserType, UserContext };