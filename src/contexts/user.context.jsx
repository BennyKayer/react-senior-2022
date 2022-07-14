import { createContext, useState } from "react";

// Actual value you want to access
export const UserContext = createContext({
    currUser: null,
    setCurrentUser: () => null,
});

// Actual component
export const UserProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(null);
    const value = { currUser, setCurrUser };

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
