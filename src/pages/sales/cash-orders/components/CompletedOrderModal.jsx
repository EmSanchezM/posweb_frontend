import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import {
	InputCurrency,
	InputSelect
} from '../../../../components/commons/forms';

const CompletedOrderModal = ({
	visibleCompletedOrder,
	handleHideCompletedOrder,
	control,
	errors,
	handleSubmit
}) => {
	return (
		<Dialog
			header='Completar pago'
			visible={visibleCompletedOrder}
			onHide={handleHideCompletedOrder}
		>
			<div className='grid grid-cols-2 gap-2'>
				<div>
					<div className='grid grid-cols-6 gap-6'>
						<div className='col-span-12 sm:col-span-3'>
							<InputCurrency
								control={control}
								errors={errors}
								name='cash'
								label='Efectivo'
								placeholder='Ingresa efectivo'
							/>
						</div>
					</div>
				</div>
				<div>
					<div className='grid grid-cols-6 gap-6'>
						<div className='col-span-12 sm:col-span-3'>
							<InputSelect
								control={control}
								errors={errors}
								name='impresora'
								options={[
									{ code: 'impresora01', name: 'Epson 01' },
									{ code: 'impresora02', name: 'HP 01' }
								]}
								label='Impresora'
								placeholder='Seleccione impresora'
							/>
						</div>
					</div>
					<div className='grid grid-cols-6 gap-6'>
						<div className='col-span-12 sm:col-span-3'>
							<InputSelect
								control={control}
								errors={errors}
								name='customer'
								options={[
									{ code: 'impresora01', name: 'Epson 01' },
									{ code: 'impresora02', name: 'HP 01' }
								]}
								label='Cliente'
								placeholder='Seleccione cliente'
							/>
						</div>
					</div>
					<section className='mt-4 md:col-span-2 mb-4'>
						<div className='grid grid-cols-6 gap-6'>
							<Button
								type='submit'
								className='mx-auto col-span-6 sm:col-span-3 bg-purple-600 hover:bg-purple-700 text-white font-bold px-2 py-3 rounded shadow-lg hover:shadow-xl transition duration-200'
							>
								Guardar e Imprimir
							</Button>
						</div>
					</section>
				</div>
			</div>
		</Dialog>
	);
};

export default CompletedOrderModal;
