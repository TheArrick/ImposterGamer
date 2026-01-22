import { Stack } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    return (
        <Stack
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right', // Efecto de barrido
                animationDuration: 300,
            }}>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Home',
                }}
            />
            <Stack.Screen
                name="explore"
                options={{
                    title: 'Explore',
                }}
            />
        </Stack>
    );
}
