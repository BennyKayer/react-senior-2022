import {
    AdditionalInformation,
    UserData,
} from "../../utils/firebase/firebase.utils";
import {
    Action,
    ActionWithPayload,
    createAction,
    withMatcher,
} from "../../utils/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user.types";

export type SetCurrentUser = ActionWithPayload<
    USER_ACTION_TYPES.SET_CURRENT_USER,
    UserData
>;
export const setCurrentUser = withMatcher(
    (user: UserData): SetCurrentUser =>
        createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
);

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;
export const checkUserSession = withMatcher(
    (): CheckUserSession => createAction(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;
export const googleSignInStart = withMatcher(
    (): GoogleSignInStart =>
        createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export type EmailSignInStart = ActionWithPayload<
    USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
    { email: string; password: string }
>;
export const emailSignInStart = withMatcher(
    (email: string, password: string): EmailSignInStart =>
        createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export type SignInSuccess = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_IN_SUCCESS,
    UserData
>;
export const signInSuccess = withMatcher(
    (user: SignInSuccess["payload"]): SignInSuccess =>
        createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export type SignInFailed = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_IN_FAILURE,
    Error
>;
export const signInFailed = withMatcher(
    (error: SignInFailed["payload"]): SignInFailed =>
        createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error)
);

export type SignUpStart = ActionWithPayload<
    USER_ACTION_TYPES,
    { email: string; password: string; displayName: string }
>;
export const signUpStart = withMatcher(
    (
        email: SignUpStart["payload"]["email"],
        password: SignUpStart["payload"]["password"],
        displayName: SignUpStart["payload"]["displayName"]
    ): SignUpStart =>
        createAction(USER_ACTION_TYPES.SIGN_UP_START, {
            email,
            password,
            displayName,
        })
);

export type SignUpSuccess = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_UP_SUCCESS,
    { user: UserData; additionalDetails: AdditionalInformation }
>;
export const signUpSuccess = withMatcher(
    (
        user: SignUpSuccess["payload"]["user"],
        additionalDetails: SignUpSuccess["payload"]["additionalDetails"]
    ): SignUpSuccess =>
        createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, {
            user,
            additionalDetails,
        })
);

export type SignUpFailed = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_IN_FAILURE,
    Error
>;
export const signUpFailed = withMatcher(
    (error: SignUpFailed["payload"]): SignUpFailed =>
        createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error)
);

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;
export const signOutStart = withMatcher(
    (): SignOutStart => createAction(USER_ACTION_TYPES.SIGN_OUT_START)
);

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;
export const signOutSuccess = withMatcher(
    (): SignOutSuccess => createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export type SignOutFailure = ActionWithPayload<
    USER_ACTION_TYPES.SIGN_OUT_FAILURE,
    Error
>;
export const signOutFailure = withMatcher(
    (error: SignOutFailure["payload"]): SignOutFailure =>
        createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE, error)
);
