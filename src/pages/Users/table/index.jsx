import { Button } from 'primereact/button';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';
import { useRef, useState } from 'react';
import ConfirmDelete from './ConfirmDelete';
import HeaderTable from './HeaderTable';
import { ToolbarTemplate } from './ToolBar';

const UserTable = () => {
	const [isUserDelete, setIsUserDelete] = useState(false);
	const [user, setUser] = useState(null);
	const [globalFilter, setGlobalFilter] = useState('');
	const toast = useRef(null);

	const confirmDeleteUser = user => {
		console.log(user);

		setUser(user);
		setIsUserDelete(true);
	};

	const users = [
		{
			code: 'qwea123',
			name: 'Elvin Sanchez',
			rol: 'Admin',
			gender: 'Masculino',
			phone1: '+50498451230'
		},
		{
			code: 'qwea124',
			name: 'Melisa Valladares',
			rol: 'Admin',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Paola Ferrari',
			rol: 'Mesero',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Raquel Pineda',
			rol: 'Cajero',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Daniela Midence',
			rol: 'Mesero',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Mariela Zelaya',
			rol: 'Cajero',
			gender: 'Femenino',
			phone1: '+50495751233'
		},
		{
			code: 'qwea124',
			name: 'Lidia Barahona',
			rol: 'Admin',
			gender: 'Femenino',
			phone1: '+50495751233'
		}
	];

	const actions = rowData => {
		return (
			<>
				<Button
					icon='pi pi-pencil'
					className='p-button-rounded p-button-warning mr-2'
					onClick={() => null}
				/>
				<Button
					icon='pi pi-trash'
					className='p-button-rounded p-button-danger'
					onClick={() => confirmDeleteUser(rowData)}
				/>
			</>
		);
	};

	return (
		<>
			<Toast ref={toast} />
			<ToolbarTemplate />
			<ConfirmDelete
				isUserDelete={isUserDelete}
				setIsUserDelete={setIsUserDelete}
				user={user}
			/>
			<DataTable
				value={users}
				paginator
				rows={5}
				rowsPerPageOptions={[5, 10, 25]}
				responsiveLayout='scroll'
				globalFilter={globalFilter}
				header={<HeaderTable setGlobalFilter={setGlobalFilter} />}
			>
				<Column field='code' header='Código' sortable />
				<Column field='name' header='Nombre' sortable />
				<Column field='rol' header='Rol' sortable />
				<Column field='gender' header='Genero' />
				<Column field='phone1' header='Telefono' />
				<Column body={actions} header='Acciones' />
			</DataTable>
		</>
	);
};

export default UserTable;
