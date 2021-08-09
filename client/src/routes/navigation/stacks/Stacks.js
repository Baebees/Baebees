import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
// import { colors } from 'theme'
import Home from '../../../scenes/Home'
import Chat from '../../../scenes/Chat'
import Profile from '../../../scenes/Profile'
import Post from '../../../scenes/Post'
import Search from '../../../scenes/Search'
import UserProfile from '../../../scenes/UserProfile'
import Media from '../../../scenes/Media'
import Conversation from '../../../scenes/Conversation'
// import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import HeaderBackward from './HeaderBackward'
// import Home Signature
import Signature from '../../../../assets/Signature'

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
      headerShown: true

    }}
    initialRouteName="Home"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Home"
      component={Home}
      options={({ navigation }) => ({
        title: '',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerRight: () => <Signature icon={'bell'} />,
      })}
    />
  </Stack.Navigator>
)

export const SearchNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: true
    }}
  >
    <Stack.Screen
      name="Search"
      component={Search}
    // options={({ navigation }) => ({
    //   title: 'Search',
    //   headerLeft: () => <HeaderLeft navigation={navigation} />,
    //   headerTitle: () => <HeaderTitle />,
    // })}
    />
    <Stack.Screen
      name="UserProfile"
      component={UserProfile}
      options={({ navigation }) => ({
        title: 'UserProfile',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Search" />,
      })}
    />
    <Stack.Screen
      name="Media"
      component={Media}
      options={({ navigation }) => ({
        title: 'Media',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="User" />,
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
      headerShown: true
    }}
  >
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={({ navigation }) => ({
        // title: 'Chat',
        // headerLeft: () => <HeaderLeft navigation={navigation} />,
        // headerTitle: () => <HeaderTitle />,
      })}
    />
    <Stack.Screen
      name="Conversation"
      component={Conversation}
      options={({ navigation }) => ({
        title: '',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerRight: () => <Signature icon={'ellipsis-v'} />,
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
    screenOptions={{
      headerShown: true

    }}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: '',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
      })}
    />
    <Stack.Screen
      name="Media"
      component={Media}
      options={({ navigation }) => ({
        title: 'Media',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Profile" />,
      })}
    />
  </Stack.Navigator>
)