import { Middleware } from "redux";
import { RootState } from "../../store/store";

// First argument is an Extra Dispatch signature added by middleware, adding functionality to dispatches hmmm
type LoggerMiddleware = Middleware<{}, RootState>;

export const loggerMiddleware: LoggerMiddleware =
    (store) => (next) => (action) => {
        if (!action.type) {
            return next(action);
        }

        console.log("type", action.type);
        console.log("payload", action.payload);
        console.log("currentState", store.getState());

        next(action);

        console.log("next state", store.getState());
    };
