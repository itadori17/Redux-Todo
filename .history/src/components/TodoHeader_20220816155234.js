import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';

const TodoHeader = () => {
    return (
        <View>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 45,
            }} 
            >
             TodoHeader
                </Text>
                <TextInput 
                    style={{
                        borderColor: 'grey',
                        borderWidth: 1,
                        padding: 10,
                        margin: 10,
                        width: 
                    }}
                />
        </View>
    )
}

export default TodoHeader;

const styles = StyleSheet.create({});