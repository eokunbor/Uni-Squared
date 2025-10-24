import { useRouter } from 'expo-router'
import { useUser } from '../../hooks/useUser'
import { useEffect } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

const GuestOnly = ({children}) => {
    const { user, loading } = useUser()
    const router = useRouter();

    useEffect(() => {
        // Only redirect if we're done loading AND user EXISTS (authenticated)
        if (!loading && user !== null) {
            console.log("User is authenticated, redirecting to main profile");
            router.replace('/(user)/mainProfile')
        }
    }, [user, loading])

    // Show loading while checking authentication status
    if (loading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0066FF" />
                <Text>Checking authentication...</Text>
            </View>
        )
    }

    // If not loading and user exists, show loading briefly while redirect happens
    if (user) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0066FF" />
                <Text>Redirecting...</Text>
            </View>
        )
    }

    // User is NOT authenticated (guest), show auth screens
    return children
}

export default GuestOnly;