import { createSlice } from '@reduxjs/toolkit';
import {
	createOrder,
	deleteOrder,
	getOrders,
	updateOrder
} from '../../lib/services/orders';

const initialState = {
	currentOrder: {},
	orders: [],
	error: '',
	loading: false
};

const orderSlice = createSlice({
	name: 'orders',
	initialState,
	reducers: {
		setCurrentOrder: (state, action) => {
			state.currentOrder = action.payload;
		}
	},
	extraReducers(builder) {
		builder
			.addCase(createOrder.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(createOrder.fulfilled, (state, action) => {
				state.loading = false;
				state.orders = [action.payload];
			})
			.addCase(createOrder.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(getOrders.fulfilled, (state, action) => {
				state.loading = false;
				state.orders = [...action.payload];
			})
			.addCase(getOrders.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(updateOrder.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(updateOrder.fulfilled, (state, action) => {
				state.loading = false;
				const {
					arg: { id }
				} = action.meta;
				if (id) {
					state.orders = state.orders.map(item =>
						item.id === id ? action.payload : item
					);
				}
			})
			.addCase(updateOrder.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			})
			.addCase(deleteOrder.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(deleteOrder.fulfilled, (state, action) => {
				state.loading = false;
				const {
					arg: { id }
				} = action.meta;
				if (id) {
					state.orders = state.orders.filter(item => item.id !== id);
				}
			})
			.addCase(deleteOrder.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload.message;
			});
	}
});

export const { setCurrentOrder } = orderSlice.actions;
export default orderSlice.reducer;
