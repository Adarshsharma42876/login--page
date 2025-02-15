import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LoginPage from "./src/screens/Auth/LoginScreen";

const App = () => {
    return (
        <SafeAreaView style={styles.container}>
            <LoginPage />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
