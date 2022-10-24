import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import {
    fetchCategoriesSuccess,
    fetchCategoriesFailed,
} from "./category.actions";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

function* fetchCategoriesAsync() {
    try {
        const categoriesArray = yield* call(getCategoriesAndDocuments);
        yield* put(fetchCategoriesSuccess(categoriesArray));
    } catch (error) {
        yield* put(fetchCategoriesFailed(error as Error));
    }
}

function* onFetchCategories() {
    yield* takeLatest(
        CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
    );
}

export function* categoriesSaga() {
    yield* all([call(onFetchCategories)]);
}
