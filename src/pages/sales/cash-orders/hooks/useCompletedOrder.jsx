import { useState } from 'react';
import { useForm } from 'react-hook-form';

const useCompletedOrder = () => {
	const [visibleCompletedOrder, setVisibleCompletedOrder] = useState(false);

	const handleOpenCompletedOrder = () => setVisibleCompletedOrder(true);

	const handleHideCompletedOrder = () => setVisibleCompletedOrder(false);

	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: { name: ' ' }
	});

	return {
		visibleCompletedOrder,
		handleOpenCompletedOrder,
		handleHideCompletedOrder,
		control,
		errors,
		handleSubmit
	};
};

export default useCompletedOrder;
