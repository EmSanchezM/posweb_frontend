import { Button } from 'primereact/button';

const FooterSelectProducts = ({ handleHideModalProducts }) => {
	return (
		<div>
			<Button
				label='Cerrar'
				icon='pi pi-times'
				onClick={() => handleHideModalProducts()}
				className='p-button-text'
			/>
			<Button
				label='Aceptar'
				icon='pi pi-check'
				onClick={() => handleHideModalProducts()}
				autoFocus
			/>
		</div>
	);
};

export default FooterSelectProducts;
