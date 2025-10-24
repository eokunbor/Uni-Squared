import { useRouter } from 'expo-router'
import { useUser } from '../../hooks/useUser'
import { useEffect } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'

const UserOnly = ({children}) => {
    const { user, loading } = useUser()
    const router = useRouter();

    useEffect(() => {
        // Redirect if done loading AND no user (not authenticated)
        if (!loading && user === null) {
            console.log("No user found, redirecting to login");
            router.replace('/(auth)/login')
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

    // If not loading but no user, show loading briefly while redirect happens
    if (!user) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <ActivityIndicator size="large" color="#0066FF" />
                <Text>Redirecting to login...</Text>
            </View>
        )
    }

    // User is authenticated, show protected content
    return children
}

export default UserOnly;