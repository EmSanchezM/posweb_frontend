import { createBrowserRouter, redirect } from 'react-router-dom';
import { ErrorBoundary } from '../components/commons/Errors/ErrorBoundary';

import AdminLayout from '../components/layouts/AdminLayout';
import Layout from '../components/layouts/Layout';

import PrivateRoute from '../components/routing/PrivateRoute/PrivateRoute';

import { ROLES } from '../lib/constants/roles';

import Login from '../pages/auth';
import Categories from '../pages/Categories';
import CategoryForm from '../pages/Categories/form';
import Customers from '../pages/Customers';
import CustomerForm from '../pages/Customers/form';
import Misssing from '../pages/Missing';
import Products from '../pages/Products';
import ProductsForm from '../pages/Products/form';
import CashOrders from '../pages/sales/cash-orders';
import TableOrders from '../pages/sales/table-orders';
import WebOrders from '../pages/sales/web-orders';
import Suppliers from '../pages/Suppliers';
import SupplierForm from '../pages/Suppliers/form';
import Users from '../pages/Users';
import UserForm from '../pages/Users/form';

export const router = createBrowserRouter([{
	path: '/',
	element: <Layout />,
	errorElement: <ErrorBoundary />,
	children: [
		{
			index: true,
			element: <Login />
		},
		{
			path: 'admin',
			element: (<PrivateRoute allowedRoles={[ROLES.ADMIN]}><AdminLayout /></PrivateRoute>),
			errorElement: <ErrorBoundary />,
			children: [
				{ 
					index: true, 
					element: <Users />,
				},
				{ path: 'usuarios', element: <Users /> },
				{ path: 'usuarios/:action', element: <UserForm /> },
				{ path: 'clientes', element: <Customers /> },
				{ path: 'clientes/:action', element: <CustomerForm /> },
				{ path: 'proveedores', element: <Suppliers /> },
				{ path: 'proveedores/:action', element: <SupplierForm /> },
				{ path: 'categorias', element: <Categories /> },
				{ path: 'categorias/:action', element: <CategoryForm /> },
				{ path: 'productos', element: <Products /> },
				{ path: 'productos/:action', element: <ProductsForm /> },
			]
		},
		{
			path: 'ventas',
			element: (<PrivateRoute allowedRoles={[ROLES.MESERO, ROLES.CAJERO]}><AdminLayout /></PrivateRoute>),
			children: [
				{ index: true, element: <CashOrders /> },
				{ path: 'caja', element: <CashOrders /> },
				{ path: 'pedidos-web', element: <WebOrders /> },
				{ path: 'pedidos-mesa', element: <TableOrders /> },
				
			]
		},
		{ 
			path: '*',
			element: <Misssing />
		}
	]
}])
/*
function AppRoutes() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Login />} />
					
					<Route element={<PrivateRoute allowedRoles={[ROLES.ADMIN]} />}>
						<Route path='admin' element={<AdminLayout />}>
							<Route path='usuarios' element={<Users />} />
							<Route path='usuarios/:action' element={<UserForm />} />
							<Route path='clientes' element={<Customers />} />
							<Route path='clientes/:action' element={<CustomerForm />} />
							<Route path='proveedores' element={<Suppliers />} />
							<Route path='proveedores/:action' element={<SupplierForm />} />
							<Route path='categorias' element={<Categories />} />
							<Route path='categorias/:action' element={<CategoryForm />} />
							<Route path='productos' element={<Products />} />
							<Route path='productos/:action' element={<ProductsForm />} />
						</Route>
					</Route>
					
					<Route
						element={
							<PrivateRoute allowedRoles={[ROLES.MESERO, ROLES.CAJERO]} />
						}
					>
						<Route path='ventas' element={<AdminLayout />}>
							<Route path='caja' element={<CashOrders />} />
							<Route path='pedidos-web' element={<WebOrders />} />
							<Route path='pedidos-mesa' element={<TableOrders />} />
						</Route>
					</Route>
					<Route path='*' element={<Misssing />} />
				</Route>
			</Routes>
		</Suspense>
	);
}

export default AppRoutes;
*/
