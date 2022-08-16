import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//importing Todo 
import TodoHeader from './src/components/TodoHeader';

export default function App() {

  const RootApp = () => {
    return (
      <View>
        <TodoHeader/>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <RootApp/>
    </View>
  );
}


