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

// const LoginScreen = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   // Validation handler
//   const handleSignUp = () => {
//     if (!email) {
//       Alert.alert("Validation Error", "Please enter your email or username.");
//     } else if (!password) {
//       Alert.alert("Validation Error", "Please enter your password.");
//     } else {
//       Alert.alert("Success", "You have signed up successfully!");
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {/* Language Dropdown */}
//       <Text style={styles.language}>English ▼</Text>

//       <View style={styles.centerView}>
//         {/* Logo */}
//         <Image source={require("../../assets/game.png")} style={styles.logo} />

//         {/* Title */}
//         <Text style={styles.title}>Gameon</Text>
//         <Text style={styles.subtitle}>Your ultimate gaming hub</Text>

//         {/* Input Fields */}
//         <TextInput
//           style={styles.input}
//           placeholder="Phone number, email or username"
//           placeholderTextColor="#888"
//           value={email}
//           onChangeText={setEmail}
//         />
//         <TextInput
//           style={styles.input}
//           placeholder="Password"
//           placeholderTextColor="#888"
//           secureTextEntry
//           value={password}
//           onChangeText={setPassword}
//         />

//         {/* Sign Up Button */}
//         <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
//           <Text style={styles.signUpButtonText}>Sign Up</Text>
//         </TouchableOpacity>

//         {/* Sign In Option */}
//         <Text style={styles.signInText}>
//           Already have an account?{" "}
//           <Text
//             style={styles.signInLink}
//             onPress={() => Alert.alert("Sign In")}
//           >
//             Sign in.
//           </Text>
//         </Text>

//         {/* Divider */}
//         <View style={styles.dividerContainer}>
//           <View style={styles.divider} />
//           <Text style={styles.dividerText}>OR</Text>
//           <View style={styles.divider} />
//         </View>

//         {/* Google Sign Up Button */}
//         <TouchableOpacity
//           style={styles.googleButton}
//           onPress={() => Alert.alert("Google Sign Up")}
//         >
//           <Text style={styles.googleButtonText}>Sign Up with Google</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 20,
//     justifyContent: "flex-start",
//   },
//   language: {
//     fontSize: 17,
//     color: "#868686",
//     textAlign: "center",
//     position: "absolute",
//     top: 20,
//     left: 0,
//     right: 0,
//   },
//   centerView: {
//     flex: 1,
//     justifyContent: "center", // Center vertically
//     alignItems: "center", // Center horizontally
//   },
//   logo: {
//     width: 100,
//     height: 100,
//     marginBottom: 10,
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#000",
//     fontFamily: "Arial", // Replace with the exact font family
//     marginTop: -20,
//   },
//   subtitle: {
//     fontSize: 16,
//     color: "#555",
//     marginBottom: 20,
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
//     fontFamily: "Arial", // Replace with your font family
//   },
//   signUpButton: {
//     width: "100%",
//     height: 50,
//     backgroundColor: "#007bff",
//     borderRadius: 8,
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: 15,
//   },
//   signUpButtonText: {
//     fontSize: 16,
//     color: "#fff",
//     fontWeight: "bold",
//   },
//   signInText: {
//     fontSize: 14,
//     color: "#444",
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
import InputField from "../../components";

const LoginScreen = ({ navigation }:any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!email || !password)  return Alert.alert("Validation Error", "Please fill in all fields.");
   
     navigation.navigate('SignUp')
   
  };

  return (
    <View style={styles.container}>
      <Text style={styles.language}>English ▼</Text>
      <View style={styles.centerView}>
        <Image source={require("../../assets/game.png")} style={styles.logo} />
        <Text style={styles.title}>Gameon</Text>
      <Text style={styles.subtitle}>Your ultimate gaming hub</Text>
      <InputField
        placeholder="Email"
        placeholderTextColor="#888"
        value={email}
        onChangeText={(text)=>setEmail(text.trim())}
      />
       <InputField
         placeholder="Password"
        placeholderTextColor="#888"
        value={password}
        onChangeText={(text)=>setPassword(text.trim())}
      />

        {/* <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={(text)=>setEmail(text.trim())}
        /> */}
        {/* <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={(text)=>setPassword(text.trim())}
        /> */}
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
    textAlign: "center", // Aligns text horizontally
    position: "absolute",
    left: 0, // Reset left to 0
    right: 0,
    top:-4, // Add right to allow centering
   // Maintains vertical position
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
    fontFamily: "Arial", // Replace with the exact font family
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
