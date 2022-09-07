import { USER_ACTION_TYPES } from "./user.action-types";

const INITIAL_STATE = {
    currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, action) => {
    const { type, payload } = action;

    switch (type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return { ...state, currentUser: payload };
        // Necessary to return same object not {...state} as f.e
        // actions from categories or cart will also trigger this reducer
        // returning same object will let redux know
        // OH THIS PART OF ROOT REDUCER DID NOT CHANGED, DON"T RE RENDER
        default:
            return state;
    }
};
