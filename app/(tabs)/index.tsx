import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';
import ActionButton from '@/components/ui/ActionButton';

export default function WelcomeScreen() {
    const handleLogin = () => {
        // router.push('/login');
        console.log('Ir a Login');
    };

    const handleRegister = () => {
        router.push('/config');
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Impostor</Text>
                <Text style={styles.subtitle}>Encuentra al Impostor para ganar el juego</Text>
            </View>

            <View style={styles.buttonContainer}>
                <ActionButton
                    title="Como Jugar"
                    variant="primary"
                    onPress={handleRegister}
                />
                <ActionButton
                    title="Comenzar"
                    variant="primary"
                    onPress={handleRegister}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 20,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 48,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 20,
        color: '#666',
        textAlign: 'center',
    },
    buttonContainer: {
        width: '100%',
        paddingBottom: 40,
    },
    button: {
        width: '100%',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 12,
    },
    primaryButton: {
        backgroundColor: '#007AFF',
    },
    primaryButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
    secondaryButton: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#007AFF',
    },
    secondaryButtonText: {
        color: '#007AFF',
        fontSize: 18,
        fontWeight: '600',
    },
});
