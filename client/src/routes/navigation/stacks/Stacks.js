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
import Bees from '../../../components/Bees'
import AccountSettings from '../../../scenes/AccountSettings'
import Confidentiality from '../../../scenes/Confidentiality'
import Track from '../../../scenes/Track'
import Subscription from '../../../scenes/Subscription'
import Contact from '../../../scenes/Contact'
import Payment from '../../../scenes/Payment'
import ProfileInformations from '../../../scenes/ProfileInformations'
import Notifications from '../../../scenes/Notifications'
import ChangeName from '../../../scenes/Settings/ChangeName'
import ChangePassword from '../../../scenes/Settings/ChangePassword'
import ChangePhoneNumber from '../../../scenes/Settings/ChangePhoneNumber'
import ChangeNotificationsSettings from '../../../scenes/Settings/ChangeNotificationsSettings'
import ChangeAdsSettings from '../../../scenes/Settings/ChangeAdsSettings'
import Help from '../../../scenes/Help'
import About from '../../../scenes/About'
// import Details from 'scenes/details'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'
import HeaderBackward from './HeaderBackward'
import HeaderRight from './HeaderRight'
// import Home Signature
import Signature from '../../../../assets/Signature'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: 'white',
  // headerStyle: { backgroundColor: "purple" },
  headerTitleStyle: {
    fontSize: 30,
    marginLeft: 50
  },
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
        headerRight: () => <Signature icon={'bell'} navigation={navigation} />,
      })}
    />
    <Stack.Screen
      name="Media"
      component={Media}
      options={({ navigation }) => ({
        title: '',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerRight: () => <HeaderRight icon={'ellipsis-v'} />,
      })}
    />
    <Stack.Screen
      name="UserProfile"
      component={UserProfile}
      options={({ navigation }) => ({
        title: 'UserProfile',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Home" />,
      })}
    />
    <Stack.Screen
      name="AccountSettings"
      component={AccountSettings}
      options={({ navigation }) => ({
        title: 'AccountSettings',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="Confidentiality"
      component={Confidentiality}
      options={({ navigation }) => ({
        title: 'Confidentiality',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="Track"
      component={Track}
      options={({ navigation }) => ({
        title: 'Track',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="Subscription"
      component={Subscription}
      options={({ navigation }) => ({
        title: 'Subscription',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="Contact"
      component={Contact}
      options={({ navigation }) => ({
        title: 'Contact',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="Payment"
      component={Payment}
      options={({ navigation }) => ({
        title: 'Payment',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="ProfileInformations"
      component={ProfileInformations}
      options={({ navigation }) => ({
        title: 'ProfileInformations',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="Notifications"
      component={Notifications}
      options={({ navigation }) => ({
        title: 'Notifications',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="ChangeName"
      component={ChangeName}
      options={({ navigation }) => ({
        title: 'ChangeName',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="ChangePassword"
      component={ChangePassword}
      options={({ navigation }) => ({
        title: 'ChangePassword',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="ChangePhoneNumber"
      component={ChangePhoneNumber}
      options={({ navigation }) => ({
        title: 'ChangePhoneNumber',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="ChangeNotificationsSettings"
      component={ChangeNotificationsSettings}
      options={({ navigation }) => ({
        title: 'ChangeNotificationsSettings',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="ChangeAdsSettings"
      component={ChangeAdsSettings}
      options={({ navigation }) => ({
        title: 'ChangeAdsSettings',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="Help"
      component={Help}
      options={({ navigation }) => ({
        title: 'Help',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
      })}
    />
    <Stack.Screen
      name="About"
      component={About}
      options={({ navigation }) => ({
        title: 'About',
        headerLeft: () => <HeaderBackward navigation={navigation} />,
        headerTitle: () => <HeaderTitle title="Go Back" />,
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
        headerRight: () => <HeaderRight icon={'ellipsis-v'} />,
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