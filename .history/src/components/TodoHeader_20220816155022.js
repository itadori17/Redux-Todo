import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TodoHeader = () => {
    return (
        <View>
            <Text style={{
                fontSize: 25,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 50,
            }} 
            >
             TodoHeader
                </Text>
        </View>
    )
}

export default TodoHeader;

const styles = StyleSheet.create({});