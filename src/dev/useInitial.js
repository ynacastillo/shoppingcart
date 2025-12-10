import {useState, useEffect} from 'react'

export const useInitial = () => {
    const [status, setStatus] = useState({
        loading: false,
        error: false
    })
    
    // Example implementation: simulate an async operation
    useEffect(() => {
        setStatus({ loading: true, error: false })
        // Perform async operation here
        setTimeout(() => {
            setStatus({ loading: false, error: false })
        }, 1000)
    }, [])
    
    return status
}
