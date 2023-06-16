import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import Dashboard from './Screens/dashboard';

export default function App() {
  return (
    <View style={styles.container}>
      <Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    height: '100%',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 8,
  },
});
