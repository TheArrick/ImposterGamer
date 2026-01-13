import React from 'react';

import { TouchableOpacity, Text, ViewStyle, StyleSheet } from 'react-native';

interface ActionButtonProps {
    title: string;
    onPress: () => void;
    variant: 'primary' | 'secondary';
    style?: ViewStyle;
    disabled?: boolean;
}

export default function ActionButton({
    title,
    onPress,
    variant,
    style,
    disabled
}: ActionButtonProps) {

    return (
        <TouchableOpacity
            style={[styles.button, variant === 'primary' ? styles.primary : styles.secondary, disabled && styles.disabled, style]}
            onPress={onPress}
            disabled={disabled}
        >
            <Text
                style={[
                    styles.text,
                    variant === 'primary' ? styles.primaryText : styles.secondaryText,
                    disabled && styles.disabledText
                ]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 12,
    },
    primary: {
        backgroundColor: '#007AFF',
    },
    secondary: {
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#007AFF',
    },
    disabled: {
        opacity: 0.5,
    },
    text: {
        fontSize: 18,
        fontWeight: '600',
    },
    primaryText: {
        color: '#fff',
    },
    secondaryText: {
        color: '#007AFF',
    },
    disabledText: {
        color: '#999',
    },
})
