import * as React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from '../screens/Home'
import Events from '../screens/Events'
import BoxOpen from '../screens/BoxOpen';
import ListActions from '../screens/ListActions';



const Tab = createBottomTabNavigator();

export default function App() {
  return (

    <NavigationContainer >
      <Tab.Navigator 
       
        screenOptions={({ route }) => {
        return ({

          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'ALCANCIA') {
              iconName = focused ? 'ios-home' : 'ios-home';
            }
            if (route.name === 'EVENTOS') {
              iconName = focused ? 'ios-calendar' : 'ios-calendar';
            }
            if (route.name === 'ACTIVIDAD') {
              iconName = focused ? 'ios-list' : 'ios-list';
            }
            if (route.name === 'CAJA FUERTE') {
              iconName = focused ? 'ios-lock-open-outline' : 'ios-lock-closed-sharp';
            }
            const color2 = focused ? '#FBCAE6' : 'black';
            color = color2;
            // You can return any component that you like here!
            return <Ionicons name={iconName != undefined ? iconName : 'ios-list-box'} size={size} color={color2} />;
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
          tabBarBackground: () => {
            return (
              <Text style={[StyleSheet.absoluteFill, {backgroundColor: 'white', color: 'black' }]} />
            );
          },
        });
      }
      
    }

      >
            
        {/*headerShown: true*/}
        <Tab.Screen name="ALCANCIA" component={Home}  options={{headerTintColor: 'black',  headerShown:true, headerTitleAlign: 'left', headerStyle: { backgroundColor: '#ffff', borderBottomColor: '#DEDEDE', borderBottomWidth: 2 }}}/>
        <Tab.Screen name="ACTIVIDAD" component={ListActions} options={{ tabBarBadge: 0, headerTintColor: 'black',  headerShown:true, headerTitleAlign: 'left', headerStyle: { backgroundColor: '#ffff', borderBottomColor: '#DEDEDE', borderBottomWidth: 2 } }} />
        <Tab.Screen name="EVENTOS" component={Events} options={{ tabBarBadge: 0, headerTintColor: 'white',  headerShown:true, headerTitleAlign: 'left', headerStyle: { backgroundColor: '#4942E4' } }} />
        <Tab.Screen name="CAJA FUERTE" component={BoxOpen}  options={{ headerTintColor: 'white',  headerShown:true, headerTitleAlign: 'left', headerStyle: { backgroundColor: '#4942E4' } }} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
