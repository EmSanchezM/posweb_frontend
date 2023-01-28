import { Button } from 'primereact/button';
import useCompletedOrder from '../hooks/useCompletedOrder';
import CompletedOrderModal from './CompletedOrderModal';

const TotalsOrder = () => {
	const {
		visibleCompletedOrder,
		handleOpenCompletedOrder,
		handleHideCompletedOrder,
		control,
		errors,
		handleSubmit
	} = useCompletedOrder();

	return (
		<>
			<CompletedOrderModal
				visibleCompletedOrder={visibleCompletedOrder}
				handleHideCompletedOrder={handleHideCompletedOrder}
				control={control}
				errors={errors}
				handleSubmit={handleSubmit}
			/>
			<div>
				<h4>TOTAL DE LA VENTA</h4>
				<hr />
				<div className='flex flex-col justify-between'>
					<div className='flex justify-between'>
						<span>Subtotal</span>
						<span>L. 250</span>
					</div>
					<div className='flex justify-between'>
						<span>Descuento</span>
						<span>L. 0</span>
					</div>
					<div className=''>
						<div className='flex justify-between'>
							<span>Total</span>
							<span>L. 250</span>
						</div>
						<div className='flex justify-between'>
							<Button className='w-full' onClick={handleOpenCompletedOrder}>
								PAGAR
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TotalsOrder;
