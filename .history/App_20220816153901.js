import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//importing Todo from '../../../../../../../
import TodoHeader from './src/components/TodoHeader';

export default function App() {

  const rootApp = () => {
    return (
      <View>
        <TodoHeader/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
