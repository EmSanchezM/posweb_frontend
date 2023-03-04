import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
    
    const navigate = useNavigate()

    return (
        <article className='bg-gray-100 h-screen flex items-center justify-center mx-4'>
			<section className='mt-24 flex flex-col items-center'>
				<img
					className='w-2/3 h-2/3 object-cover'
					src='https://img.freepik.com/vector-gratis/ups-error-404-ilustracion-concepto-robot-roto_114360-5529.jpg'
					alt='404'
				/>
				<section className='tracking-widest mt-4 text-center'>
					<h2 className='text-gray-500 text-6xl block'>404</h2>
					<span className='text-gray-500 text-xl'>
						Lo sentimos, ¡No pudimos encontrar lo que buscas!
					</span>
				</section>
				<section className='mt-6'>
					<button
						onClick={() => navigate(-1)}
						className='text-gray-500 text-center font-mono text-xl bg-gray-200 p-3 rounded-md hd:shadow-md'
					>
						Regresar
					</button>
				</section>
			</section>
		</article>
    )
}