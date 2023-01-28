import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartProducts } from '../../services/products';

const useCartProducts = () => {
	const dispatch = useDispatch();

	const products = useSelector(state => state.product.cartProducts);
	
	useEffect(() => {
		dispatch(getCartProducts());
	}, []);

	return {
		products
	};
};

export default useCartProducts;
