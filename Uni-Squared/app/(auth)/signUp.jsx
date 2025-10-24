import { StyleSheet, View, Text, TextInput, Pressable, StatusBar, Platform, TouchableWithoutFeedback, Keyboard, ScrollView, Alert} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import {useUser} from '../../hooks/useUser';
import { Link, router } from 'expo-router';

const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const {signUp} = useUser();

  const handleSubmit = async () => {
    if (!firstName || !lastName || !email || !password) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'Password must be at least 8 characters');
      return;
    }

    setLoading(true);
    
    try {
      console.log("Attempting sign up...", { firstName, lastName, email });
      
      await signUp(email, password);
      
      // Remove manual redirect - let GuestOnly handle it
      Alert.alert('Success', 'Account created successfully!');
      
    } catch (error) {
      console.error("Sign up error:", error);
      Alert.alert('Sign Up Failed', error.message || 'An error occurred during sign up');
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
          colors={["#f8f0dcff", "#F5E7C4", "#F5E7C4", "#e8c3a3ff"]}
        >
          <SafeAreaView style={styles.content} edges={['left', 'right', 'bottom']}>
            
            {/* Centered Container */}
            <View style={styles.centeredContainer}>
              
              {/* Logo */}
              <View style={styles.logoContainer}>
                <Text style={styles.logoText}>Uni^2</Text>
              </View>

              {/* White Card with ScrollView */}
              <ScrollView 
                style={styles.scrollView}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
              >
                <View style={styles.whiteCard}>
                  <Text style={styles.title}>Create an Account</Text>
                  
                  <Text style={styles.subtitle}>
                    Already have an account? <Link href="/(auth)/login" style={styles.link}>Login</Link>
                  </Text>

                  {/* Name Fields */}
                  <View style={styles.row}>
                    <View style={styles.halfContainer}>
                      <Text style={styles.label}>First Name</Text>
                      <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="First name"
                        autoCapitalize="words"
                        onChangeText={setFirstName}
                        value={firstName}
                        editable={!loading}
                      />
                    </View>
                    
                    <View style={styles.halfContainer}>
                      <Text style={styles.label}>Last Name</Text>
                      <TextInput
                        style={[styles.input, styles.halfInput]}
                        placeholder="Last name"
                        autoCapitalize="words"
                        onChangeText={setLastName}
                        value={lastName}
                        editable={!loading}
                      />
                    </View>
                  </View>

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
                    placeholder="Enter your password (min 8 characters)"
                    secureTextEntry
                    onChangeText={setPassword}
                    value={password}
                    editable={!loading}
                  />

                  <Pressable 
                    onPress={handleSubmit}
                    style={({pressed}) => [
                      styles.signUpButton, 
                      pressed && styles.btnPressed,
                      loading && styles.btnDisabled
                    ]}
                    disabled={loading}
                  >
                    <Text style={styles.signUpButtonText}>
                      {loading ? 'Creating Account...' : 'Sign Up'}
                    </Text>
                  </Pressable>

                  <Text style={styles.termsText}>
                    By signing up, you agree to our{'\n'}
                    <Text style={styles.link}>Terms of Service</Text> and <Text style={styles.link}>Privacy Policy</Text>
                  </Text>
                </View>
              </ScrollView>

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
  scrollView: {
    flexGrow: 0,
  },
  scrollContent: {
    flexGrow: 1,
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
    gap: 12,
  },
  halfContainer: {
    flex: 1,
  },
  halfInput: {
    width: '100%',
  },
  signUpButton: {
    backgroundColor: '#8b5e3c',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  btnPressed: {
    opacity: 0.75
  },
  btnDisabled: {
    opacity: 0.5
  },
  signUpButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  termsText: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginTop: 16,
    lineHeight: 18,
  }
});

export default SignUp;