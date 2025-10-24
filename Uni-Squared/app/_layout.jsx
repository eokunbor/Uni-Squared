import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { UserProvider } from '../contexts/userContext';
import { Stack } from 'expo-router'
import { Colors } from '../constants/colors'
import { StatusBar } from 'react-native'

const RootLayout = () => {
    const colorscheme= useColorScheme()
    const theme= Colors[colorscheme] ?? Colors.light 

  return (

    <UserProvider>

        <StatusBar value="auto"/>

        <Stack screenOptions={{ 

            headerStyle: { backgroundColor: theme.navBackground},
            headerTintColor: theme.title,

        }}> 

          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(dashboard)" options={{ headerShown: false }} />
          <Stack.Screen name="index" options={{ title: 'Loading Screen', headerShown: false }}/>
          <Stack.Screen name="about" options={{ title: 'About'}}/>
          <Stack.Screen name="contact" options={{ title: 'Contact'}}/>



        </Stack>

    </UserProvider>
  )
}

export default RootLayout

const styles = StyleSheet.create({})