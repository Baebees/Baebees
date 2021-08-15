import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './drawer'

export default (props) => (
  <NavigationContainer >
    <DrawerNavigator {...props}/>
  </NavigationContainer>
)