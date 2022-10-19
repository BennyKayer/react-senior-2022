import { AnyAction } from "redux";
import { UserData } from "../../utils/firebase/firebase.utils";
import {
    signInFailed,
    signInSuccess,
    signOutFailure,
    signOutSuccess,
    signUpFailed,
} from "./user.action";

export type UserSlice = {
    readonly currentUser: UserData | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
};

const INITIAL_STATE: UserSlice = {
    currentUser: null,
    isLoading: false,
    error: null,
};

type UserReducer = (state: UserSlice, action: AnyAction) => UserSlice;
export const userReducer: UserReducer = (state = INITIAL_STATE, action) => {
    if (signInSuccess.match(action)) {
        return { ...state, currentUser: action.payload };
    }
    if (
        signInFailed.match(action) ||
        signUpFailed.match(action) ||
        signOutFailure.match(action)
    ) {
        return { ...state, error: action.payload, isLoading: false };
    }
    if (signOutSuccess.match(action)) {
        return { ...state, currentUser: null };
    }
    return state;
};
