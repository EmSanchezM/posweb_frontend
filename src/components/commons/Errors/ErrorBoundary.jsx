import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

import { NotAvailable } from './NotAvailable'
import { NotFound } from './NotFound'
import { Unauthorized } from './Unauthorized'

export const ErrorBoundary = () => {
    const error = useRouteError()
    console.log('captura error',error)

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) return <NotFound />

        if (error.status === 401) return <Unauthorized />

        if (error.status === 503) return <NotAvailable />
    }

    return (
        <article className='h-screen flex items-center justify-center mx-4'>
            <section className='tracking-widest mt-4 text-center'>
                <h2 className='text-gray-500 text-6xl block'>Algo salio mal!</h2>
                <span className='text-gray-500 text-xl'>
                    {error?.message}
                </span>
            </section>
        </article>
    )
}