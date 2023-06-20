import { View } from 'react-native';
import Constants from 'expo-constants';
import {Dashboard} from './components/dashboard';

export default function App() {
  return (
    <View style={{ paddingTop: Constants.statusBarHeight, flex: 1, display: 'flex' }}>
      <Dashboard />
    </View>
  );
}
