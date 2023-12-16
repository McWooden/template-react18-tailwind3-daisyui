import { ErrorBoundary } from "react-error-boundary";

export default function MyErrorBoundary({children}) {
    return <ErrorBoundary FallbackComponent={ErrorFallbackComponent}>
        {children}
    </ErrorBoundary>
}

function ErrorFallbackComponent({error}) {
    return <div>
        <h1>Something went wrong :(</h1>
        <p>Message {error.message}</p>
        {error.code && <p>Code: {error.code}</p>}
        <p className="mt-2">{error.stack}</p>
    </div>
}