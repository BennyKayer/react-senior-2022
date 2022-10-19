import { createSelector } from "reselect";

import { UserSlice } from "./user.reducer";

export const selectUserReducer = (state: any): UserSlice => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (userSlice) => userSlice.currentUser
);
