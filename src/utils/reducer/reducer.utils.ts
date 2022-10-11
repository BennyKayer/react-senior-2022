import { AnyAction } from "redux";

// Why 2 not 1 with optional payload?
// change of thinking, no point of referencing something that shouldn't be there
// just creates a hassle with undefined check, which we don't want
export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
};

export type Action<T> = {
    type: T;
};

// Function Overloading, not present in JS only TS
export function createAction<T extends string, P>(
    type: T,
    payload: P
): ActionWithPayload<T, P>;
export function createAction<T extends string>(
    type: T,
    payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload };
}

// export const createAction = (type, payload) => ({ type, payload });
