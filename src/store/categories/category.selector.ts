import { createSelector } from "reselect";
import { RootState } from "../store";

import { CategoriesState } from "./category.reducer";
import { CategoryMap } from "./category.types";

const selectCategoryReducer = (state: RootState): CategoriesState =>
    state.categories;

export const selectCategories = createSelector(
    [selectCategoryReducer],
    (reducer) => reducer.categories
);

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories): CategoryMap => {
        return categories.reduce<CategoryMap>((acc, category) => {
            const { title, items } = category;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {});
    }
);

export const selectCategoriesIsLoading = createSelector(
    [selectCategoryReducer],
    (reducer) => reducer.isLoading
);
