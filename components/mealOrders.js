import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import moment from 'moment';

export function MealOrder() {
  const _orderBreakFast = ()=> {}
  const _orderLunch = ()=> {}
  const _orderDinner = ()=> {}
  const items = ['Lunch', 'BreakFast', 'Dinner']
  return(
    <View style={styles.container}>
      {
        items.map((i) => {
          return(
          <TouchableOpacity style={styles.button} onPress={_orderBreakFast}>
            <Text style={styles.buttonText}>{i}</Text>
          </TouchableOpacity>
          )
        })
      }
      <View style={{height: 40}} />
      <Text style={styles.buttonText}>{moment().format('hh:mm a')}</Text>
      <Text style={styles.buttonText2}>Orders open till 30:00 AM</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000000',
    padding: 8,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: '#ffffff',
    margin: 12
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonText2: {
    color: '#cecece',
    fontSize: 14,
    fontWeight: 'medium',
    textAlign: 'center',
  },
});