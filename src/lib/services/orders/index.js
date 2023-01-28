import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate } from '../../api/Axios';

export const getOrders = createAsyncThunk(
	'orders/all',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.get('orders');
			const data = [...response.data.data];

			//let Orders = data.map(product => OrdersMapper(product));

			return data;
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
					console.error(`ERROR: ${message}`);
			}
			return rejectWithValue(message);
		}
	}
);

export const getSelectOrders = createAsyncThunk(
	'orders/select',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.get('orders');
			const data = [...response.data.data];

			//let Orders = data.map(product => selecOrdersMapper(product));

			return data;
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
					console.error(`ERROR: ${message}`);
			}
			return rejectWithValue(message);
		}
	}
);

export const getCartOrders = createAsyncThunk(
	'orders/cart',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.get('orders');
			const data = [...response.data.data];

			//let Orders = data.map(product => OrdersCartMapper(product));

			return data;
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
					console.error(`ERROR: ${message}`);
			}
			return rejectWithValue(message);
		}
	}
);

export const createOrder = createAsyncThunk(
	'orders/creatOrder',
	async ({ createdOrderData, navigate, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.post(
				'orders',
				createdOrderData
			);
			if (response.data.ok) {
				toast.success('Orden agregada exitosamente');

				navigate('/ventas', { replace: true });

				return response.data;
			}

			return response.data;
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
					console.error(`ERROR: ${message}`);
			}

			return rejectWithValue(message);
		}
	}
);

export const updateOrder = createAsyncThunk(
	'orders/updateOrder',
	async ({ id, updatedOrderData, toast, navigate }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.put(
				`orders/${id}`,
				updatedOrderData
			);

			if (response.data.ok) {
				toast.success('Orden actualizada exitosamente');

				navigate('/ventas', { replace: true });

				return response.data.data;
			}

			return response.data.data;
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
					console.error(`ERROR: ${message}`);
			}

			return rejectWithValue(message);
		}
	}
);

export const deleteOrder = createAsyncThunk(
	'orders/deleteOrder',
	async ({ id, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.delete(`orders/${id}`);

			if (response.data.ok) {
				toast.success('Orden eliminada exitosamente');

				return response.data;
			}

			return response.data;
		} catch (error) {
			let message;
			switch (error.status) {
				case 500:
					message = 'Internal Server Error';
					break;
				case 401:
					message = 'Invalid credentials';
					break;
				default:
					message = error.message;
					console.error(`ERROR: ${message}`);
			}

			return rejectWithValue(message);
		}
	}
);
