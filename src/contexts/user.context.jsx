import { createContext, useEffect, useReducer } from "react";
import {
    onAuthStateChangedListener,
    createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";
import { createAction } from "../utils/reducer/reducer.utils";

// Actual value you want to access
export const UserContext = createContext({
    currUser: null,
    setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currUser: payload };
        default:
            throw new Error(`Unhandled type ${type} in userReducer`);
    }
};

const INITIAL_STATE = {
    currUser: null,
};

// Actual component
export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);

    const { currUser } = state;
    const setCurrUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
    };

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
