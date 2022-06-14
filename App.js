import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from './screens/AboutScreen'
import SearchScreen from "./screens/SearchScreen";
import MainScreen from "./screens/MainScreen";
import SenderScreen from "./screens/SenderScreen";

const Stack = createStackNavigator();
export default class App extends React.Component{
  render() {
      return (
          <NavigationContainer>
              <Stack.Navigator initialRouteName='Main'>
                  <Stack.Screen
                      name="Main"
                      component={MainScreen}
                      options={{title:'lexical minimum'}}
                  />
                  <Stack.Screen
                      name="Send"
                      component={SenderScreen}
                  />
                  <Stack.Screen
                      name="Search"
                      component={SearchScreen}
                      option={({route}) =>({title: route.title.params.name})}
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
