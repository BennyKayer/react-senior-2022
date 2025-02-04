import { Category } from "./category.types";
import {
    fetchCategoriesStart,
    fetchCategoriesSuccess,
    fetchCategoriesFailed,
} from "./category.actions";
import { AnyAction } from "redux";

export type CategoriesState = {
    readonly categories: Category[];
    readonly isLoading: boolean;
    readonly error: Error | null;
};

export const CATEGORIES_INITIAL_STATE: CategoriesState = {
    categories: [],
    isLoading: false,
    error: null,
};

type CategoriesReducer = (
    state: CategoriesState,
    action: AnyAction
) => CategoriesState;
export const categoriesReducer: CategoriesReducer = (
    state = CATEGORIES_INITIAL_STATE,
    action
) => {
    if (fetchCategoriesStart.match(action)) {
        return { ...state, isLoading: true };
    }
    if (fetchCategoriesSuccess.match(action)) {
        return {
            ...state,
            categories: action.payload,
            isLoading: false,
        };
    }
    if (fetchCategoriesFailed.match(action)) {
        return {
            ...state,
            error: action.payload,
            isLoading: false,
        };
    }

    return state;
};
