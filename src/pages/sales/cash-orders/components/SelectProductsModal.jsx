import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Dialog } from 'primereact/dialog';

import useCartProducts from '../../../../lib/hooks/product/useCartProducts';

import FooterSelectProducts from './FooterSelectProducts';
import HeaderSelectProducts from './HeaderSelectProducts';

const SelectProductsModal = ({
	visibleModalProducts,
	handleHideModalProducts,
	selectedProducts,
	handleAddSelectedProducts,
	globalFilter,
	setGlobalFilter
}) => {
	const { products } = useCartProducts();

	return (
		<Dialog
			header='Selecciona tus productos'
			visible={visibleModalProducts}
			footer={
				<FooterSelectProducts
					handleHideModalProducts={handleHideModalProducts}
				/>
			}
			onHide={handleHideModalProducts}
		>
			<DataTable
				value={products}
				paginator
				rows={5}
				rowsPerPageOptions={[5, 10, 25]}
				responsiveLayout='scroll'
				selection={selectedProducts}
				globalFilter={globalFilter}
				onSelectionChange={evt => handleAddSelectedProducts(evt)}
				header={<HeaderSelectProducts setGlobalFilter={setGlobalFilter} />}
			>
				<Column selectionMode='multiple'></Column>
				<Column field='code' header='Código' sortable />
				<Column field='name' header='Nombre' />
				<Column field='category.name' header='Categoría' />
				<Column field='price1' header='Precio' />
				<Column field='inStock' header='Stock' />
			</DataTable>
		</Dialog>
	);
};

export default SelectProductsModal;
