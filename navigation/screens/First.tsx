import * as React from 'react';
import { View, Text } from 'react-native';

export default function FirstScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text
                onPress={() => navigation.navigate('메인')}
                style={{ fontSize: 26, fontWeight: 'bold' }}>Click</Text>
        </View>
    );
}