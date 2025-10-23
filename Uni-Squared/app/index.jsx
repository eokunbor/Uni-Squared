
import { StyleSheet, Text, View, Image, Animated } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Logo from '../assets/logos/logo1.png'
import ThemedView from '../components/ThemedView'
import OnboardingScreen from '../components/OnboardingScreen'

const SplashScreen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const scaleAnim = useRef(new Animated.Value(0.8)).current
  const router = useRouter()
  const [showOnboarding, setShowOnboarding] = useState(false)


  useEffect(() => {
    showSplash()
  }, [])

  const showSplash= () => {

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue:1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start()


    setTimeout(() => {
      setShowOnboarding(true)
    }, 2500)
  }


  const handleOnboardingComplete = () => {
   router.replace('/home')
    } 
  if (showOnboarding) {
    return <OnboardingScreen onComplete={handleOnboardingComplete} />
  }

  return (
    <ThemedView style={styles.container}>
      <Animated.View
        style={[
          styles.logoContainer,
          {
            opacity: fadeAnim,
            transform: [{ scale: scaleAnim }],
          },
        ]}
      >
        <Image source={Logo} style={styles.img} />
        <Text style={styles.title}>Uni²</Text>
        <Text style={styles.subtitle}>Reading list app</Text>
      </Animated.View>
    </ThemedView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5e7c4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
  },
  img: {
    marginBottom: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
})