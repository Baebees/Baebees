import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../../theme/colors'

// stack navigators
import { HomeNavigator, ProfileNavigator, ChatNavigator, SearchNavigator, PostNavigator } from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Home':
            return (
              <FontIcon
                name="home"
                color={focused ? colors.blue : colors.darkGray}
                size={20}
                solid
              />
            )
          case 'Search':
            return (
              <FontIcon
                name="search"
                color={focused ? colors.blue : colors.darkGray}
                size={20}
                solid
              />
            )
          case 'Post':
            return (
              <FontIcon
                name="camera"
                color={focused ? colors.blue : colors.darkGray}
                size={20}
                solid
              />
            )
          case 'Chat':
            return (
              <FontIcon
                name="comments"
                color={focused ? colors.blue : colors.darkGray}
                size={20}
                solid
              />
            )
          case 'Profile':
            return (
              <FontIcon
                name="user"
                color={focused ? colors.blue : colors.darkGray}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      // activeTintColor: colors.lightPurple,
      // inactiveTintColor: colors.gray,
      style: {
        // backgroundColor: 'white',
        // borderTopColor: 'gray',
        // borderTopWidth: 1,
        // paddingBottom: 5,
        // paddingTop: 5,
      },
    }}
    initialRouteName="Home"
    swipeEnabled={false}
  >
    <Tab.Screen name="Home" component={HomeNavigator} />
    <Tab.Screen name="Search" component={SearchNavigator} />
    <Tab.Screen name="Post" component={PostNavigator} />
    <Tab.Screen name="Chat" component={ChatNavigator} />
    <Tab.Screen name="Profile" component={ProfileNavigator} />
  </Tab.Navigator>
)

export default TabNavigator