// import React, { useState } from 'react';
// import { View, TextInput, Button, StyleSheet, Text, Alert } from 'react-native';

// const LoginPage = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const handleLogin = () => {
//         if (email === '' || password === '') {
//             Alert.alert('Error', 'Please fill in both fields.');
//             return;
//         }
//         Alert.alert('Success', `Logged in   : ${email}`);
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Login</Text>

//             <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//             />

//             <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//             />

//             <Button title="Login" onPress={handleLogin} />
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f8f9fa',
//         padding: 16,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         marginBottom: 20,
//         color: '#333',
//     },
//     input: {
//         width: '80%',
//         height: 50,
//         borderColor: '#ccc',
//         borderWidth: 1,
//         borderRadius: 8,
//         marginBottom: 15,
//         paddingHorizontal: 10,
//         backgroundColor: '#fff',
//     },
// });

// export default LoginPage;
// import React from 'react';
// import {
//   StyleSheet,
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
 
// } from 'react-native';

// const LoginScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.language}>English ▼</Text>
//       <Image
//         source={require("../../assets/game.png")} style={styles.logo} 
        
//       />
//       <Text style={styles.title}>Gameon</Text>
//       <Text style={styles.subtitle}>Your ultimate gaming hub</Text>
//       <TextInput
//         style={styles.input}
//         placeholder="Phone number, email or username"
//         placeholderTextColor="#888"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Password"
//         placeholderTextColor="#888"
//         secureTextEntry
//       />
//       <TouchableOpacity style={styles.button}>
//         <Text style={styles.buttonText}>Sign Up</Text>
//       </TouchableOpacity>
//       <TouchableOpacity>
//         <Text style={styles.signInText}>
//           Already have an account? <Text style={styles.signInLink}>Sign in.</Text>
//         </Text>
//       </TouchableOpacity>
//       <Text style={styles.or}>OR</Text>
//       <TouchableOpacity style={styles.googleButton}>
//         <Text style={styles.googleButtonText}>Sign Up with Google</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingHorizontal: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#fff',
//   },
//   language: {
    
    
//     top: 20,

   
//     fontSize: 16,
   
   
//     position: 'absolute',
//    Color: "#868686",


    
//   },
//   logo: {
//     width: 80,
//     height: 80,
    
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#000000',
//     fontVariant:'orbitron',
   
//   },
//   subtitle: {
//     fontSize: 14,
//     color: '#666',
//     marginBottom: 20,
//   },
//   input: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//   },
//   button: {
//     width: '100%',
//     height: 50,
//     backgroundColor: '#007bff',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 10,
//   },
//   buttonText: {
//     color: '#fff',
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   signInText: {
//     color: '#888',
//     fontSize: 14,
//     marginBottom: 10,
//   },
//   signInLink: {
//     color: '#007bff',
//     fontWeight: 'bold',
//   },
//   or: {
//     color: '#888',
//     fontSize: 14,
//     marginVertical: 10,
//   },
//   googleButton: {
//     width: '100%',
//     height: 50,
//     borderWidth: 1,
//     borderColor: '#ddd',
//     borderRadius: 8,
//     justifyContent: 'center',
//     alignItems: 'center',
//     flexDirection: 'row',
//   },
//   googleButtonText: {
//     color: '#000',
//     fontSize: 16,
//     marginLeft: 10,
//   },
// });

// export default LoginScreen;

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Validation handler
  const handleSignUp = () => {
    if (!email) {
      Alert.alert("Validation Error", "Please enter your email or username.");
    } else if (!password) {
      Alert.alert("Validation Error", "Please enter your password.");
    } else {
      Alert.alert("Success", "You have signed up successfully!");
    }
  };

  return (
    <View style={styles.container}>
      {/* Language Dropdown */}
      <Text style={styles.language}>English ▼</Text>

      {/* Logo */}
      <Image
       source={require("../../assets/game.png")} style={styles.logo} 
        
       />

      {/* Title */}
      <Text style={styles.title}>Gameon</Text>
      <Text style={styles.subtitle}>Your ultimate gaming hub</Text>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Phone number, email or username"
        placeholderTextColor="#888"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Sign In Option */}
      <Text style={styles.signInText}>
        Already have an account?{" "}
        <Text style={styles.signInLink} onPress={() => Alert.alert("Sign In")}>
          Sign in.
        </Text>
      </Text>

      {/* Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Google Sign Up Button */}
      <TouchableOpacity
        style={styles.googleButton}
        onPress={() => Alert.alert("Google Sign Up")}
      >
        <Text style={styles.googleButtonText}>Sign Up with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  language: {
    

    position: "absolute",
  top: 10, // Distance from the top
  
  fontSize: 17,
  color: "#868686",
  textAlign: "center", 
  
   








 },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    fontFamily: "Arial", // Replace with the exact font family
  },
  subtitle: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    fontSize: 14,
    fontFamily: "Arial", // Replace with your font family
  },
  signUpButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  signUpButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  signInText: {
    fontSize: 14,
    color: "#444",
  },
  signInLink: {
    color: "#007bff",
    fontWeight: "bold",
  },
  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ddd",
  },
  dividerText: {
    marginHorizontal: 10,
    color: "#888",
  },
  googleButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#4285F4",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  googleButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});

export default LoginScreen;
