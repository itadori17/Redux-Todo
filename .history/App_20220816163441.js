import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

//importing Todo 
import TodoHeader from './src/components/TodoHeader';
//importing Todolist
import Todo
export default function App() {

  const RootApp = () => {
    return (
      <SafeAreaView>
        <TodoHeader/>
      </SafeAreaView>
    );
  };

  return (
    <View>
      <RootApp/>
    </View>
  );
}


