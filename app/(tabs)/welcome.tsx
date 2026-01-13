import { Platform, StyleSheet } from 'react-native';

import { View, Text, Image, ScrollView } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {
    return (
        <View style={{ flex: 1, top: '50%', left: '50%', transform: [{ translateX: -50 }, { translateY: -50 }] }}>
            <Text>Hola Mundo</Text>
            <Text>Mamaguevo</Text>
            <Text>Pupupuup</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
