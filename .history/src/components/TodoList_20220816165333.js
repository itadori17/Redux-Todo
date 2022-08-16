import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const data = [
    {
        id: 1,
        title: "Learn More",
    },
    {
        id: 2,
        title: "Learn Redux",
    },

]

const renderItem = ({ item } )=> {
    return (
        <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <TouchableOpacity 
             style={styles.deleteButton}
             onPress={() => {
                deleteItem
             }
            >
            <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
            
        </View>
    )
}

const TodoList = () => {
  return (
    <View>
      
      <FlatList 
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      />

    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FCEDAD',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 34,
    },
    delete: {
        fontSize: 24,
        color: 'red',
    }
})