import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch, StyleSheet } from 'react-native';

export enum ActionType {
    BUTTON = 'button',
    TOGGLE = 'toggle'
}

interface ConfigCardProps {
    actionType?: ActionType;
    text: string;
    onPressed?: () => void;
}

export default function ConfigCard({
    actionType = ActionType.BUTTON,
    text,
    onPressed
}: ConfigCardProps) {
    const [isToggle, setIsToggle] = useState<boolean>(false);

    const renderAction = () => {
        if (actionType === ActionType.BUTTON) {
            return (
                <TouchableOpacity
                    style={styles.button}
                    onPress={onPressed}
                    activeOpacity={0.7}
                >
                    <Text style={styles.buttonText}>Mamia</Text>
                </TouchableOpacity>
            );
        } else {
            return (
                <Switch
                    value={isToggle}
                    onValueChange={setIsToggle}
                    trackColor={{ false: '#767577', true: '#81C784' }}
                    thumbColor={isToggle ? '#ffffff' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                />
            );
        }
    };

    return (
        <View style={styles.card}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <View style={styles.row}>
                        <View style={styles.textContainer}>
                            <Text style={styles.text}>{text}</Text>
                        </View>
                        {renderAction()}
                        <View style={styles.spacing} />
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#F8F9FE',
        borderRadius: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 4,
    },
    container: {
        borderRadius: 16,
    },
    content: {
        padding: 12,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        paddingLeft: 8,
    },
    text: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000DE',
    },
    button: {
        borderWidth: 2,
        borderColor: '#2196F3',
        borderRadius: 12,
        paddingHorizontal: 20,
        paddingVertical: 12,
    },
    buttonText: {
        color: '#2196F3',
        fontSize: 14,
        fontWeight: '500',
    },
    spacing: {
        width: 8,
    },
});

