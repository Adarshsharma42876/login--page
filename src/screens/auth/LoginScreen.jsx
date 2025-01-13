import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

import {
  GoogleSignin,
  isErrorWithCode,
  isSuccessResponse,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/fireBase.config';

GoogleSignin.configure({
  webClientId:
    '799230321610-dt3nrnjh1emo8ibrv5j2vmp08hd5s284.apps.googleusercontent.com', // client ID of type WEB for your server. Required to get the `idToken` on the user object, and for offline access.
});

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const validateEmail = email => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = password => {
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{7}$/;
    return regex.test(password);
  };

  const handleEmailChange = text => {
    setEmail(text);
    if (!validateEmail(text)) {
      setEmailError('Enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = text => {
    if (text.length > 10) return; // Restrict password length to exactly 7 characters
    setPassword(text);
    if (text.length < 0) {
      setPasswordError('Password must be exactly 7 characters.');
      // } else if (!validatePassword(text)) {
      //   setPasswordError(
      //     'Password must include an uppercase letter, a number, and a special character.',
      //   );
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = async () => {
    try {
      if (!email || !password)
        return Alert.alert('Validation Error', 'Please fill in all fields.');
      console.log(password, 'email', email);
      const res = await signInWithEmailAndPassword(auth, email, password);
      // console.log('res', res);
    } catch (error) {
      console.log(error);
      Alert.alert('Error', 'Failed to login.');
    }
    // navigation.navigate('SignUp');
  };

  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const response = await GoogleSignin.signIn();
      if (isSuccessResponse(response)) {
        console.log('Google signed in', response.data.idToken);

        // setState({ userInfo: response.data })
      } else {
        // sign in was cancelled by user
      }
    } catch (error) {
      console.log('erro', error);

      if (isErrorWithCode(error)) {
        switch (error.code) {
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // Android only, play services not available or outdated
            break;
          default:
          // some other error happened
        }
      } else {
        // an error that's not related to google sign in occurred
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.centerView}>
        <Image source={require('../../assets/game.png')} style={styles.logo} />
        <Text style={styles.title}>Gameon</Text>
        <Text style={styles.subtitle}>Your ultimate gaming hub</Text>
        {/* Email Input */}
        <TextInput
          style={[styles.input, emailError && styles.errorInput]}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={handleEmailChange}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}

        {/* Password Input */}
        <TextInput
          style={[styles.input, passwordError && styles.errorInput]}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
        />
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

        {/* Login Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={handleLogin}>
          <Text style={styles.signUpButtonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Alert.alert('Forgot Password Placeholder')}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Text style={styles.signInText}>
          Don't have an account?{' '}
          <Text
            style={styles.signInLink}
            onPress={() => navigation.navigate('SignUp')}>
            Sign up.
          </Text>
        </Text>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>
      <TouchableOpacity style={styles.googleButton} onPress={signIn}>
        <Text style={styles.googleButtonText}>Sign In With Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    paddingBottom: 40,
  },
  language: {
    fontSize: 18,
    color: '#868686',
    textAlign: 'center',
    position: 'absolute',
    left: 0,
    right: 0,
    top: -4,
  },
  centerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
    fontFamily: 'Arial',
  },
  subtitle: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 20,
    fontFamily: 'Oswald',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 14,
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    alignSelf: 'flex-start',
    marginBottom: 10,
  },
  signUpButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  signUpButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#007bff',
    marginTop: 10,
    textAlign: 'center',
  },
  signInText: {
    fontSize: 14,
    color: '#444',
    marginTop: 10,
  },
  signInLink: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 10,
    color: '#888',
  },
  googleButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4285F4',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  googleButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
