import { AnyAction } from "redux";

// AC stands for action creator - these functions from .action folder
export type Matchable<AC extends () => AnyAction> = AC & {
    type: ReturnType<AC>["type"];
    match: (action: AnyAction) => action is ReturnType<AC>;
};

export function withMatcher<AC extends () => AnyAction & { type: string }>(
    actionCreator: AC
): Matchable<AC>;
export function withMatcher<
    AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

export function withMatcher(actionCreator: Function) {
    const type = actionCreator().type;
    return Object.assign(actionCreator, {
        type,
        match(action: AnyAction) {
            return action.type === type;
        },
    });
}

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
