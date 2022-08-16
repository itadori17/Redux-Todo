import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState} from 'react';

const TodoHeader = () => {

    const [todo, setTodo] = useState('');

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
                <View 
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                <TextInput 
                    style={{
                        borderColor: '#DE603A',
                        borderWidth: 1,
                        padding: 10,
                        margin: 10,
                        width: '80%',
                        borderRadius: 10,
                    }}
                    placeholder="Add a task..."
                    onChangeText={(text) => setTodo(text)}
                    value={todo}
                />
                <TouchableOpacity
                style={{
                    backgroundColor: '#04F585',
                    padding: 10,
                    margin: 10,
                    width: '60%',
                    borderRadius: 10,
                    alignItems: 'center',

                }}
                onPress={() => {
                    setTodo('');
                }}
                >
                    <Text style={{ color: 'white' }} >Add</Text>
                </TouchableOpacity>
                </View>
        </View>
    );
};

export default TodoHeader;

const styles = StyleSheet.create({
    
});