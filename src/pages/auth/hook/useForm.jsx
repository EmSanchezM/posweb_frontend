import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import axios from '../../../lib/api/Axios';
import useAuth from '../../../lib/hooks/auth/useAuth';
import { getAuthenticatedUser } from '../../../lib/services/auth';

const schemaValidation = Yup.object({
	username: Yup.string().trim().required('Nombre de usuario es requerido'),
	password: Yup.string().required('Contraseña es requerida')
});

const useFormLogin = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const dispatch = useDispatch();
	let from = location.state?.from?.pathname || '/admin';

	const [isLoading, setIsLoading] = useState(false);

	const [errorMessage, setErrorMessage] = useState({
		error: false,
		message: ''
	});

	const { setAuth } = useAuth();

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: { username: '', password: '' },
		resolver: yupResolver(schemaValidation)
	});

	const onSubmit = async ({ username, password }) => {
		setIsLoading(true);

		try {
			const { data } = await axios.post(
				'auth/login',
				{ username, password }
			);

			if (data.ok) {
				
				const { user, accessToken } = data;
				setAuth({
					user,
					accessToken
				});
				localStorage.setItem('jwt', accessToken);
				
				dispatch(getAuthenticatedUser());

				if (user.rol === 'Admin') {
					from = location.state?.from?.pathname || '/admin';
					navigate(from, { replace: true })
				};

				if (user.rol === 'Cajero') { 
					from = location.state?.from?.pathname || '/ventas/caja';
					navigate(from, { replace: true })
				}

				if (user.rol === 'Mesero') {
					from = location.state?.from?.pathname || '/ventas/pedidos-mesa';
					navigate(from, { replace: true });
				}
			}
		} catch (error) {
			let messageError;
			
			if(error.response) {
				switch (error.response.status) {
					case 500:
						messageError = 'Internal Server Error';
						break;
					case 401:
						messageError = 'Credenciales no validas';
						break;
					default:
						messageError = error.response.data.message;
				}
			} else {
				messageError = error.message
			}

			setIsLoading(false);
			setErrorMessage({
				error: true,
				message: messageError
			});
		}

		setIsLoading(false);
	};

	return {
		control,
		handleSubmit,
		errors,
		onSubmit,
		errorMessage,
		isLoading
	};
};

export default useFormLogin;
