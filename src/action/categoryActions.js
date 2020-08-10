import { CATEGORY_FETCH, CATEGORY_SET } from '../actionTypes/category';

export const getCategory = () => ({
  type: CATEGORY_FETCH,
});

export const setCategories = categories => ({
  type: CATEGORY_SET,
  categories,
});
