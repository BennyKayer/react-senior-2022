import { createSelector } from "reselect";
import { RootState } from "../store";

import { UserSlice } from "./user.reducer";

export const selectUserReducer = (state: RootState): UserSlice => state.user;

export const selectCurrentUser = createSelector(
    [selectUserReducer],
    (userSlice) => userSlice.currentUser
);
