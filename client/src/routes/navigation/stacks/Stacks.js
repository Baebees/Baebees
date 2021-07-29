import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import { colors } from 'theme'
import Home from '../../../scenes/Home'
import Chat from '../../../scenes/Chat'
import Profile from '../../../scenes/Profile'
import Post from '../../../scenes/Post'
import Search from '../../../scenes/Search'
// import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  // headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: 'Home',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const SearchNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen
      name="Search"
      component={Search}
      options={({ navigation }) => ({
        title: 'Search',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>
)

export const PostNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
  >
    <Stack.Screen
      name="Post"
      component={Post}
      options={({ navigation }) => ({
        title: 'Post',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
  </Stack.Navigator>

)

export const ChatNavigator = () => (
  <Stack.Navigator
  screenOptions={{
    headerShown: false
  }}
>
  <Stack.Screen
    name="Chat"
    component={Chat}
    options={({ navigation }) => ({
      title: 'Chat',
      headerLeft: () => <HeaderLeft navigation={navigation} />,
      headerTitle: () => <HeaderTitle />,
    })}
  />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: () => <HeaderTitle />,
      })}
    />
    {/* <Stack.Screen
      name="Details"
      component={Details}
      options={{
        title: 'Details',
      }}
    /> */}
  </Stack.Navigator>
)