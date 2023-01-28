import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import TotalsOrder from './components/TotalsOrder';

import SelectProductsModal from './components/SelectProductsModal';
import useProductsModal from './hooks/useProductsModal';

const CashOrders = () => {
	const {
		handleOpenModalProducts,
		handleHideModalProducts,
		visibleModalProducts,
		selectedProducts,
		handleAddSelectedProducts,
		globalFilter,
		setGlobalFilter,
		removeProduct,
		handleQuantityProduct
	} = useProductsModal();

	return (
		<>
			<header className='flex items-center gap-2 ml-4 my-2'>
				<h3 className='font-bold'>Seleccionar productos</h3>
				<Button icon='pi pi-cart-plus' onClick={handleOpenModalProducts} />
			</header>
			<SelectProductsModal
				visibleModalProducts={visibleModalProducts}
				handleHideModalProducts={handleHideModalProducts}
				selectedProducts={selectedProducts}
				handleAddSelectedProducts={handleAddSelectedProducts}
				globalFilter={globalFilter}
				setGlobalFilter={setGlobalFilter}
			/>

			<Splitter className='mb-5'>
				<SplitterPanel className='flex items-center justify-center'>
					<DataTable value={selectedProducts} responsiveLayout='scroll'>
						<Column field='code' header='Código' />
						<Column field='name' header='Nombre' />
						<Column field='category.name' header='Categoría' />
						<Column field='price1' header='Precio' />
						<Column field='inStock' header='Stock' />
						<Column body={handleQuantityProduct} header='Cantidad' />
						<Column field='subtotal' header='Total' />
						<Column body={removeProduct} header='Eliminar' />
					</DataTable>
				</SplitterPanel>
				<SplitterPanel className='flex items-center justify-center'>
					<TotalsOrder />
				</SplitterPanel>
			</Splitter>
		</>
	);
};

export default CashOrders;
