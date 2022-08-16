import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

//importing Todo 
import TodoHeader from './src/components/TodoHeader';

export default function App() {

  const RootApp = () => {
    return (
      <SafeAreaView>
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


