import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TodoHeader = () => {
    return (
        <View>
            <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 30,
            }} 
            >
             TodoHeader
                </Text>
        </View>
    )
}

export default TodoHeader;

const styles = StyleSheet.create({});