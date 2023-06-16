import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { PaperProvider, Button, IconButton, List ,Divider, Menu, MD3Colors  } from 'react-native-paper';
import Constants from 'expo-constants';
import Payment from './payment';
import MealOrder from './mealOrders';
import Profile from './profile';
import Attendance from './attendance';

export default function Dashboard() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);
  const [expanded, setExpanded] = React.useState(true);
  return (
    <PaperProvider>
      <View style={styles.container}>
        <View style={styles.tabs}>
          <IconButton icon="home" size={26} iconColor={MD3Colors.tertiary99} onPress={() => {setSelectedTab(0)}}/>
          <IconButton icon="food" size={26} iconColor={MD3Colors.tertiary99} onPress={() => {setSelectedTab(1)}}/>
          <IconButton icon="cart" size={26} iconColor={MD3Colors.tertiary99} onPress={() => {setSelectedTab(2)}}/>
          <IconButton icon="account-group" size={26} iconColor={MD3Colors.tertiary99} onPress={() => {setSelectedTab(3)}}/>
          <Menu style={{ color: 'white' }} visible={visible} onDismiss={closeMenu} anchor={<IconButton icon="menu" size={26} iconColor={MD3Colors.tertiary99} onPress={openMenu}/>}>
          <Menu.Item onPress={() => {setSelectedTab(0); setVisible(false)}} title="Your Profile" />
          <List.Accordion title="Records" left={props => <List.Icon {...props}/>}>
            <List.Item title="Attendance" onPress={() => {setSelectedTab(3); setVisible(false)}}/>
            <List.Item title="Meal orders" onPress={() => {setSelectedTab(1); setVisible(false)}}/>
            <List.Item title="Payments" onPress={() => {setSelectedTab(2); setVisible(false)}}/>
          </List.Accordion>
          <Divider />
          <Menu.Item onPress={() => {}} title="Log Out" />
        </Menu>
          
        </View>
        <View>
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
    display: 'flex',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#000',
    padding: 0,
  },
  tabs: {
    display: 'flex',
    flexDirection : 'row',
    flex: 1,
    justifyContent: 'space-between',
  },
});