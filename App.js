import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './screens/AboutScreen'
import MainScreen from "./screens/MainScreen";



const Stack = createStackNavigator();
export default class App extends React.Component{
  render() {
      return (
          <NavigationContainer>
              <Stack.Navigator initialRouteName="Search">
                  <Stack.Screen
                      name="Lexical minimum app"
                      component={MainScreen}
                      option={{title: 'Search'}}
                  />
                  <Stack.Screen
                      name="About"
                      component={AboutScreen}
                      option={({route}) => {
                          title: route.params.name
                      }}
                  />
              </Stack.Navigator>
          </NavigationContainer>
      );
  }
}
