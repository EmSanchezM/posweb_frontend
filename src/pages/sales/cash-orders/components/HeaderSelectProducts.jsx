import { InputText } from 'primereact/inputtext';

const HeaderSelectProducts = ({ setGlobalFilter }) => {
	return (
		<div className='table-header'>
			<h5 className='mx-0 my-1'>Filtra tus Productos</h5>
			<span className='p-input-icon-left'>
				<i className='pi pi-search' />
				<InputText
					type='search'
					onInput={e => setGlobalFilter(e.target.value)}
					placeholder='Buscar...'
				/>
			</span>
		</div>
	);
};

export default HeaderSelectProducts;
