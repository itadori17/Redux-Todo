import { FlatList, StyleSheet, Text, View } from 'react-native'
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

const TodoList = () => {
  return (
    <View>
      <Text>TodoList</Text>
      <FlatList 
      data={data}
      renderItem={({item}) => <Text>{item.title}</Text>}
      keyExtractor={{item}}
      />

    </View>
  )
}

export default TodoList

const styles = StyleSheet.create({})