import { StyleSheet, View, Text, TextInput, Pressable, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import {useUser} from '../../hooks/useUser';
import { Link } from 'expo-router';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const {login} = useUser()

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    setLoading(true);
    
    try {
      console.log("Attempting login...", {email});
      
      const userData = await login(email, password);
      
      console.log("Login successful, user data:", userData);
      
      // Remove manual redirect - let GuestOnly handle it
      
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert('Login Failed', error.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
        <LinearGradient
          style={styles.container}
          colors={[ "#f8f0dcff", "#F5E7C4", "#F5E7C4", "#e8c3a3ff"]}
        >
          <SafeAreaView style={styles.content} edges={['left', 'right', 'bottom']}>
            
            {/* Centered Container */}
            <View style={styles.centeredContainer}>
              
              {/* Logo */}
              <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Uni^2</Text>
              </View>

              {/* White Card */}
              <View style={styles.whiteCard}>
                <Text style={styles.title}>Login</Text>
                
                <Text style={styles.subtitle}>
                  Don't have an account? <Link href="/(auth)/signUp" style={styles.link}>Sign Up</Link>
                </Text>

                <Text style={styles.label}>Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={setEmail}
                  value={email}
                  editable={!loading}
                />

                <Text style={styles.label}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  secureTextEntry
                  onChangeText={setPassword}
                  value={password}
                  editable={!loading}
                />

                <View style={styles.row}>
                  <Text style={styles.link}>Forgot Password?</Text>
                </View>

                <Pressable 
                  onPress={handleSubmit}
                  style={({pressed}) => [
                    styles.loginButton, 
                    pressed && styles.btnPressed,
                    loading && styles.btnDisabled
                  ]}
                  disabled={loading}
                >
                  <Text style={styles.loginButtonText}>
                    {loading ? 'Logging in...' : 'Login'}
                  </Text>
                </Pressable>
              </View>

            </View>

          </SafeAreaView>
        </LinearGradient>
      </View>
    </TouchableWithoutFeedback>
  );
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 40,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#8b5e3c',
  },
  whiteCard: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 24,
  },
  link: {
    color: '#a87955ff',
    fontWeight: '600',
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginBottom: 8,
    marginTop: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    marginBottom: 24,
  },
  loginButton: {
    backgroundColor: '#8b5e3c',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  btnPressed: {
    opacity: 0.75
  },
  btnDisabled: {
    opacity: 0.5
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Login;