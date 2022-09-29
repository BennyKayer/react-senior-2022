import { USER_ACTION_TYPES } from "./user.action-types";

const INITIAL_STATE = {
    currentUser: null,
    isLoading: false,
    error: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
            return { ...state, currentUser: payload };
        case USER_ACTION_TYPES.SIGN_UP_FAILED:
        case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
        case USER_ACTION_TYPES.SIGN_IN_FAILURE:
            return { ...state, error: payload, isLoading: false };
        case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
            return { ...state, currentUser: null };
        // SEC: Explanation
        // Necessary to return same object not {...state} as f.e
        // actions from categories or cart will also trigger this reducer
        // returning same object will let redux know
        // OH THIS PART OF ROOT REDUCER DID NOT CHANGED, DON"T RE RENDER
        default:
            return state;
    }
};
