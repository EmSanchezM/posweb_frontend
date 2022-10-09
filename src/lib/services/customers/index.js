import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosPrivate } from '../../api/Axios';
import { customersMapper } from '../../mappers/customers/customers.mapper';

export const getCustomers = createAsyncThunk(
	'customers/all',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.get('customers');
			const data = [...response.data.data];

			let customers = data.map(customer => customersMapper(customer));

			return customers;
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

export const createCustomer = createAsyncThunk(
	'customers/createCustomer',
	async ({ createdCustomerData, navigate, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.post(
				'customers',
				createdCustomerData
			);

			//dispatch(notificationSuccess('Cliente agregado exitosamente'));

			navigate('/admin/clientes', { replace: true });

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

export const updateCustomer = createAsyncThunk(
	'customers/updateCustomer',
	async ({ id, updatedCustomerData, toast, navigate }, { rejectWithValue }) => {
		try {
			console.log('antes', { id, updatedCustomerData });
			const response = await axiosPrivate.put(
				`customers/${id}`,
				updatedCustomerData
			);

			/*toast.current.show({
				severity: 'success',
				summary: 'Successful',
				detail: 'Cliente actualizado exitosamente',
				life: 3000
			});
			*/

			navigate('/admin/clientes', { replace: true });
			console.log('despues', response.data.data);
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

export const deleteCustomer = createAsyncThunk(
	'customers/deleteCustomer',
	async ({ id, toast }, { rejectWithValue }) => {
		try {
			const response = await axiosPrivate.delete(`customers/${id}`);

			/*toast.current.show({
				severity: 'success',
				summary: 'Successful',
				detail: 'Cliente eliminado exitosamente',
				life: 3000
			});*/

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
