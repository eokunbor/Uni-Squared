import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Stack } from 'expo-router'
import { Colors } from '../constants/colors'
import { StatusBar } from 'react-native'

const RootLayout = () => {
    const colorscheme= useColorScheme()
    const theme= Colors[colorscheme] ?? Colors.light 

  return (

    <>

        <StatusBar value="auto"/>

        <Stack screenOptions={{ 

            headerStyle: { backgroundColor: theme.navBackground},
            headerTintColor: theme.title,

        }}>

            <Stack.Screen name="index" options={{ title: 'Home'}}/>
            <Stack.Screen name="about" options={{ title: 'About'}}/>
            <Stack.Screen name="contact" options={{ title: 'Contact'}}/>



        </Stack>

    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})