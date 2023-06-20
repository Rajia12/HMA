import React, { useState } from 'react';
import {StyleSheet, View} from 'react-native';
import { Attendance } from './attendance';
import { Payment } from './payment';
import { MealOrder } from './mealOrders';
import { Profile } from './profile';
import {
  PaperProvider,
  IconButton,
  List,
  Divider,
  Menu,
} from 'react-native-paper';
import Constants from 'expo-constants';

export function Dashboard() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  return (
      <PaperProvider>
        <View style={styles.container}>
          <View style={styles.tabs}>
            <IconButton icon="home" size={26} onPress={() => {setSelectedTab(0)}}/>
            <IconButton icon="food" size={26} onPress={() => {setSelectedTab(1)}}/>
            <IconButton icon="cart" size={26} onPress={() => {setSelectedTab(2)}}/>
            <IconButton icon="account-group" size={26} onPress={() => {setSelectedTab(3)}}/>
            <Menu style={{ color: 'white' }} visible={visible} onDismiss={closeMenu} anchor={
              <IconButton icon="menu" size={26}  onPress={openMenu}/>
            }>
            <Menu.Item onPress={() => {setSelectedTab(0); setVisible(false)}} title="Your Profile" />
              <List.Accordion title="Records" right={props => <List.Icon {...props}/>}>
                <List.Item title="Attendance" onPress={() => {setSelectedTab(3); setVisible(false)}}/>
                <List.Item title="Meal orders" onPress={() => {setSelectedTab(1); setVisible(false)}}/>
                <List.Item title="Payments" onPress={() => {setSelectedTab(2); setVisible(false)}}/>
              </List.Accordion>
              <Divider />
              <Menu.Item onPress={() => {}} title="Log Out" />
            </Menu>
          </View>
          <View style={{ flex: 1 }}>
            {
              selectedTab == 0 ?
              <Profile />
              :
              selectedTab == 1 ?
              <MealOrder />
              :
              selectedTab == 2 ?
              <Payment />
              :
              <Attendance />
            }
          </View>
        </View>
      </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 0,
  },
  tabs: {
    display: 'flex',
    flexDirection : 'row',
    justifyContent: 'space-between',
  },
});