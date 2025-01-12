// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
// } from "react-native";
// import InputField from "../../components";

// const LoginScreen = ({ navigation }:any) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = () => {
//     if (!email || !password)  return Alert.alert("Validation Error", "Please fill in all fields.");
   
//      navigation.navigate('SignUp')
   
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.language}>English ▼</Text>
//       <View style={styles.centerView}>
//         <Image source={require("../../assets/game.png")} style={styles.logo} />
//         <Text style={styles.title}>Gameon</Text>
//       <Text style={styles.subtitle}>Your ultimate gaming hub</Text>
//       <InputField
//         placeholder="Email"
//         placeholderTextColor="#888"
//         value={email}
//         onChangeText={(text)=>setEmail(text.trim())}
//       />
//        <InputField
//          placeholder="Password"
//         placeholderTextColor="#888"
//         value={password}
//         onChangeText={(text)=>setPassword(text.trim())}
//       />

//         {/* <TextInput
//           style={styles.input}
//           placeholder="Email"
//           placeholderTextColor="#888"
//           value={email}
//           onChangeText={(text)=>setEmail(text.trim())}
//         /> */}
//         {/* <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#888"
//           secureTextEntry
//           value={password}
//           onChangeText={(text)=>setPassword(text.trim())}
//         /> */}
//         <TouchableOpacity style={styles.signUpButton} onPress={handleLogin}>
//           <Text style={styles.signUpButtonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => Alert.alert("Forgot Password Placeholder")}>
//           <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
//         </TouchableOpacity>
//         <Text style={styles.signInText}>
//           Don't have an account?{" "}
//           <Text
//             style={styles.signInLink}
//             onPress={() => navigation.navigate("SignUp")}
//           >
//             Sign up.
//           </Text>
//         </Text>
        
//       </View>
//       <View style={styles.dividerContainer}>
//         <View style={styles.divider} />
//         <Text style={styles.dividerText}>OR</Text>
//         <View style={styles.divider} />
//       </View>
//       <TouchableOpacity
//         style={styles.googleButton}
//         onPress={() => Alert.alert("Google Sign Up")}
//       >
//         <Text style={styles.googleButtonText}>Sign Up with Google</Text>
//       </TouchableOpacity>
//     </View>
    
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//   },
//   language: {
//     fontSize: 18,
//     color: "#868686",
//     textAlign: "center", // Aligns text horizontally
//     position: "absolute",
//     left: 0, // Reset left to 0
//     right: 0,
//     top:-4, // Add right to allow centering
//    // Maintains vertical position
//   },
  
//   centerView: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 20,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#000",
//     marginBottom: 5,
//     fontFamily: "Arial", // Replace with the exact font family
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#000000",
//     marginBottom: 20,
//     fontFamily: "Oswald",
//     fontWeight: "bold",
//   },
//   input: {
//     width: "100%",
//     height: 50,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     marginBottom: 15,
//     backgroundColor: "#f9f9f9",
//     fontSize: 14,
//   },
//   signUpButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#007bff",
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 10,
//   },
//   signUpButtonText: {
//     fontSize: 16,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   forgotPasswordText: {
//     fontSize: 14,
//     color: "#007bff",
//     marginTop: 10,
//     textAlign: "center",
//   },
//   signInText: {
//     fontSize: 14,
//     color: "#444",
//     marginTop: 10,
//   },
//   signInLink: {
//     color: "#007bff",
//     fontWeight: "bold",
//   },
//   dividerContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//     width: "100%",
//     marginVertical: 20,
//   },
//   divider: {
//     flex: 1,
//     height: 1,
//     backgroundColor: "#ddd",
//   },
//   dividerText: {
//     marginHorizontal: 10,
//     color: "#888",
//   },
//   googleButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#4285F4",
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   googleButtonText: {
//     fontSize: 16,
//     color: "#fff",
//     fontWeight: "bold",
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

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password: string) => {
    const regex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{7}$/;
    return regex.test(password);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
    if (!validateEmail(text)) {
      setEmailError("Enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (text: string) => {
    if (text.length > 7) return; // Restrict password length to exactly 7 characters
    setPassword(text);
    if (text.length < 7) {
      setPasswordError("Password must be exactly 7 characters.");
    } else if (!validatePassword(text)) {
      setPasswordError(
        "Password must include an uppercase letter, a number, and a special character."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleLogin = () => {
    if (!email) {
      setEmailError("Email is required.");
    }
    if (!password) {
      setPasswordError("Password is required.");
    }

    if (!emailError && !passwordError && email && password) {
      Alert.alert("Login Successful!");
      navigation.navigate("SignUp");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.language}>English ▼</Text>
      <View style={styles.centerView}>
        <Image source={require("../../assets/game.png")} style={styles.logo} />
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

        <TouchableOpacity onPress={() => Alert.alert("Forgot Password Placeholder")}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <Text style={styles.signInText}>
          Don't have an account?{" "}
          <Text
            style={styles.signInLink}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign up.
          </Text>
        </Text>
      </View>

      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.dividerText}>OR</Text>
        <View style={styles.divider} />
      </View>

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
  },
  language: {
    fontSize: 18,
    color: "#868686",
    textAlign: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: -4,
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 5,
    fontFamily: "Arial",
  },
  subtitle: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 20,
    fontFamily: "Oswald",
    fontWeight: "bold",
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
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  signUpButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#007bff",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  signUpButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: "#007bff",
    marginTop: 10,
    textAlign: "center",
  },
  signInText: {
    fontSize: 14,
    color: "#444",
    marginTop: 10,
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
