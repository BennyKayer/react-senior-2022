import { createContext, useState, useEffect } from "react";
import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// Actual value you want to access
export const UserContext = createContext({
    currUser: null,
    setCurrentUser: () => null,
});

// Actual component
export const UserProvider = ({ children }) => {
    const [currUser, setCurrUser] = useState(null);
    const value = { currUser, setCurrUser };

    useEffect(() => {
        // Permanently open listener
        // call once and it will run callback on every authStateChange
        // whether signIn or signOut
        const unsubscribe = onAuthStateChangedListener((user) => {
            setCurrUser(user);
            if (user) {
                createUserDocumentFromAuth(user);
            }
        });

        // Has to unsubscribe to prevent memory leak
        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    );
};
