import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setEmailFocused] = useState(false);
  const [isPasswordFocused, setPasswordFocused] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    if (!validateEmail(text)) {
      setEmailError("Invalid email address.");
    }
      setEmailError("");
   
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
    if (text.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    }
      setPasswordError("");
    
  };

  const handleSignUp = () => {
    if (!email) {
      setEmailError("Email is required.");
      return;
    }
    if (!password) {
      setPasswordError("Password is required.");
      return;
    }
    if (!emailError && !passwordError) {
     navigation.navigate("Login")
    }
  };


  // const signup=async()=>{
  //   let body={
  //     name:'name',
  //     password:password,
  //     email:email
  //   }
  //   await axios.post('https://a1-games-backend.onrender.com/api/v1/auth/register',body).thne((res)=>{
  //   console.log(res)
  //   }).catch((err)=>{
  //   console.log(err)
  //   })
  //     }




  return (
    <View style={styles.container}>
      <Text style={styles.language}>English ▼</Text>
      <View style={styles.centerView}>
        <Image source={require("../../assets/game.png")} style={styles.logo} />
       <Text style={styles.title}>Gameon</Text>
             <Text style={styles.subtitle}>Your ultimate gaming hub</Text>
       
        <TextInput
          style={[
            styles.input,
            isEmailFocused && styles.inputFocused,
          ]}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={handleEmailChange}
          onFocus={() => setEmailFocused(true)}
          onBlur={() => setEmailFocused(false)}
        />
        {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
        <TextInput
          style={[
            styles.input,
            isPasswordFocused && styles.inputFocused,
          ]}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}
          onFocus={() => setPasswordFocused(true)}
          onBlur={() => setPasswordFocused(false)}
        />
        {passwordError ? (
          <Text style={styles.errorText}>{passwordError}</Text>
        ) : null}
        <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
          <Text style={styles.signUpButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.signInText}>
          Already have an account?{" "}
          <Text
            style={styles.signInLink}
            onPress={() => navigation.navigate("Login")}
          >
            Sign in.
          </Text>
        </Text>
      </View>
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
    fontSize: 17,
    color: "#868686",
    textAlign: "center",
    position: "absolute",
    top: 20,
    left: 0,
    right: 0,
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
    marginBottom: 5,
    backgroundColor: "#f9f9f9",
    fontSize: 14,
  },
  inputFocused: {
    borderColor: "#007bff",
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
    marginTop: 10,
  },
  signUpButtonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
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
});

export default SignUpScreen;