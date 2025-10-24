import { useContext } from 'react'
import { UserContext } from '../contexts/userContext'

export function useUser() {
    // Access the UserContext to get authentication state and functions
    const context = useContext(UserContext)
    
    if (!context) {
        throw new Error('useUser must be used within a UserProvider')
    }
    
    // Return all authentication functions and user state from context
    return context
}