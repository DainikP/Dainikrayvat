import { fetchProductsAPI } from '../../api/products';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from './productsSlice';

export const fetchProducts = () => async (dispatch) => {
  dispatch(fetchProductsStart());
  try {
    const products = await fetchProductsAPI();
    dispatch(fetchProductsSuccess(products));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message));
  }
};
