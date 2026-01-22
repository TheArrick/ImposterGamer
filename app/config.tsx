import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { router } from 'expo-router';
import ConfigCard, { ActionType } from '@/components/ui/config_card';

export default function HomeScreen() {
    const handleBack = () => {
        router.back();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={handleBack}>
                <Text style={styles.backButtonText}>← Volver</Text>
            </TouchableOpacity>

            <View style={styles.cardsContainer}>
                <ConfigCard
                    actionType={ActionType.BUTTON}
                    text="Jugadores"
                />
                <ConfigCard
                    actionType={ActionType.BUTTON}
                    text="Impostores"
                />
                <ConfigCard
                    actionType={ActionType.TOGGLE}
                    text="Categorias"
                />
                <ConfigCard
                    actionType={ActionType.TOGGLE}
                    text="Timer"
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 10,
        padding: 10,
    },
    backButtonText: {
        fontSize: 18,
        color: '#007AFF',
        fontWeight: '600',
    },
    cardsContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
});
