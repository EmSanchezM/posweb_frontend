import { useRouteError, isRouteErrorResponse } from 'react-router-dom'

import { NotAvailable } from './NotAvailable'
import { NotFound } from './NotFound'
import { Unauthorized } from './Unauthorized'

export const ErrorBoundary = () => {
    const error = useRouteError()

    if (isRouteErrorResponse(error)) {
        if (error.status === 404) return <NotFound />

        if(error.status === 401) return <Unauthorized />

        if(error.status === 503) return <NotAvailable />
    }
    
    return (
        <div>
            <h1>Something went wrong</h1>
        </div>
    )
}