import { Button } from 'primereact/button';
import { useState } from 'react';

const useProductsModal = () => {
	const [visibleModalProducts, setVisibleModalProducts] = useState(false);
	const [selectedProducts, setSelectedProducts] = useState([]);
	const [globalFilter, setGlobalFilter] = useState('');

	const handleOpenModalProducts = () => setVisibleModalProducts(true);

	const handleHideModalProducts = () => setVisibleModalProducts(false);

	const handleAddSelectedProducts = evt => {
		const products = [...evt.value]

		setSelectedProducts(products)
	}

	const handleRemoveSelectedProducts = product => {
		const filterProducts = selectedProducts.filter(p => p.id !== product.id);
		setSelectedProducts(filterProducts);
	}

	const removeProduct = rowData => {
		return (
			<Button
				icon='pi pi-trash'
				className='p-button-rounded p-button-danger'
				onClick={() => handleRemoveSelectedProducts(rowData)}
			/>
		);
	};

	const handleAddQuantityProduct = product => {
		setSelectedProducts(selectedProducts => {
			if (selectedProducts.find(item => item.id === product.id) == null) {
			  return [...selectedProducts, { ...product, quantity: 1 }]
			} else {
			  return selectedProducts.map(item => {
				if (item.id === product.id) {
				  return { ...item, quantity: item.quantity + 1 }
				} else {
				  return item
				}
			  })
			}
		})
	}

	const handleRemoveQuantityProduct = product => {
		setSelectedProducts(selectedProducts => {
			if (selectedProducts.find(item => item.id === product.id) == null) {
			  return [...selectedProducts, { ...product, quantity: 1 }]
			} else {
			  return selectedProducts.map(item => {
				if (item.id === product.id) {
				  return { ...item, quantity: item.quantity - 1 }
				} else {
				  return item
				}
			  })
			}
		})
	}

	const handleQuantityProduct = rowData => {
		return (
			<div className='flex items-center'>
				<Button
					icon='pi pi-plus'
					className='p-button-rounded p-button-success'
					onClick={() => handleAddQuantityProduct(rowData)}
				/>
				<span className='font-bold text-xl mx-2'>{rowData.quantity}</span>
				<Button
					icon='pi pi-minus'
					className='p-button-rounded p-button-danger'
					onClick={() => handleRemoveQuantityProduct(rowData)}
				/>
			</div>
		);
	};

	return {
		visibleModalProducts,
		handleOpenModalProducts,
		handleHideModalProducts,
		selectedProducts,
		handleAddSelectedProducts,
		globalFilter,
		setGlobalFilter,
		removeProduct,
		handleQuantityProduct
	};
};

export default useProductsModal;
