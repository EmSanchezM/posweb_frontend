import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import SelectProductsModal from './components/SelectProductsModal';
import useProductsModal from './hooks/useProductsModal';

const CashOrders = () => {
	const {
		handleOpenModalProducts,
		handleHideModalProducts,
		modalProducts,
		selectedProducts,
		setSelectedProducts,
		globalFilter,
		setGlobalFilter,
		removeProduct,
		handleQuantityProduct
	} = useProductsModal();

	return (
		<>
			<header className='flex items-center gap-2 ml-4 my-2'>
				<h3 className='font-bold'>Seleccionar productos</h3>
				<Button
					icon='pi pi-cart-plus'
					onClick={() => handleOpenModalProducts()}
				/>
			</header>
			<SelectProductsModal
				modalProducts={modalProducts}
				handleHideModalProducts={handleHideModalProducts}
				selectedProducts={selectedProducts}
				setSelectedProducts={setSelectedProducts}
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
						<Column body={removeProduct} header='Eliminar' />
					</DataTable>
				</SplitterPanel>
				<SplitterPanel className='flex items-center justify-center'>
					<div>
						<h4>TOTAL DE VENTA</h4>
					</div>
				</SplitterPanel>
			</Splitter>
		</>
	);
};

export default CashOrders;
