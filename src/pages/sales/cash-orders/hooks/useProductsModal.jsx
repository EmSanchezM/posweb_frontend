import { Button } from 'primereact/button';
import { useState } from 'react';

const useProductsModal = () => {
	const [modalProducts, setModalProducts] = useState(false);
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [globalFilter, setGlobalFilter] = useState('');

	const handleOpenModalProducts = () => setModalProducts(true);

	const handleHideModalProducts = () => setModalProducts(false);

	const handleRemoveSelectedProducts = product => {
		const filterProducts = selectedProducts.filter(p => p.id !== product.id);
		setSelectedProducts(filterProducts);
	};

	const removeProduct = rowData => {
		return (
			<Button
				icon='pi pi-trash'
				className='p-button-rounded p-button-danger'
				onClick={() => handleRemoveSelectedProducts(rowData)}
			/>
		);
	};

	const handleQuantityProduct = rowData => {
		return (
			<div className='flex items-center'>
				<Button
					icon='pi pi-plus'
					className='p-button-rounded p-button-success'
					onClick={() => handleRemoveSelectedProducts(rowData)}
				/>
				<span className='font-bold text-xl mx-2'>{1}</span>
				<Button
					icon='pi pi-minus'
					className='p-button-rounded p-button-danger'
					onClick={() => handleRemoveSelectedProducts(rowData)}
				/>
			</div>
		);
	};

	return {
		modalProducts,
		handleOpenModalProducts,
		handleHideModalProducts,
		selectedProducts,
		setSelectedProducts,
		globalFilter,
		setGlobalFilter,
		removeProduct,
		handleQuantityProduct
	};
};

export default useProductsModal;
