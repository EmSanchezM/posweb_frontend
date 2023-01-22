import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Loader from '../components/commons/Loader';
import PrivateRoute from '../components/routing/PrivateRoute/PrivateRoute';

import { ROLES } from '../lib/constants/roles';

const Layout = lazy(() => import('../components/layouts/Layout'));
const AdminLayout = lazy(() => import('../components/layouts/AdminLayout'));

const Login = lazy(() => import('../pages/auth'));
const Categories = lazy(() => import('../pages/Categories'));
const CategoryForm = lazy(() => import('../pages/Categories/form'));
const Customers = lazy(() => import('../pages/Customers'));
const CustomerForm = lazy(() => import('../pages/Customers/form'));
const Misssing = lazy(() => import('../pages/Missing'));
const Products = lazy(() => import('../pages/Products'));
const ProductsForm = lazy(() => import('../pages/Products/form'));
const CashOrders = lazy(() => import('../pages/sales/cash-orders'));
const TableOrders = lazy(() => import('../pages/sales/table-orders'));
const WebOrders = lazy(() => import('../pages/sales/web-orders'));
const Suppliers = lazy(() => import('../pages/Suppliers'));
const SupplierForm = lazy(() => import('../pages/Suppliers/form'));
const Users = lazy(() => import('../pages/Users'));
const UserForm = lazy(() => import('../pages/Users/form'));

function AppRoutes() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Login />} />
					{/** Admin Routes */}
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
					{/** Mesero, Cajero Routes */}
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
