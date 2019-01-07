import React from 'react'
import {Image, StyleSheet,} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'
import Requests from 'src/components/requests/Requests'
import Home from 'src/components/home/Home'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY, COLOR_MEDIUM_TURQUOISE, COLOR_WHITE,} from 'src/assets/styles/colors'
import {ICON_PROFILE, ICON_PROJECT_STATUS, ICON_SEARCH} from 'src/assets/styles/icons'
import Profile from 'src/components/profile/Profile'

const iconSize = 30
const iconContainerSize = 40
const bulletSize = 16

const MainTabNavigator = createBottomTabNavigator({
  ProfileNavigator: {screen: Profile},
  HomeNavigator: {screen: Home},
  RequestNavigator: {screen: Requests},

}, {
  initialRouteName: 'ProfileNavigator',
  swipeEnabled: false,
  animationEnabled: false,

  defaultNavigationOptions: ({navigation, screenProps}) => ({
    // tabBarLabel: ({focused}) => {
    //   const {routeName} = navigation.state
    //
    //   switch (routeName) {
    //     case 'ProjectNavigator':
    //       return <Label text={focused ? messages.TRANSACTIONS : ''}
    //                     textStyle={styles.activeTab}
    //                     style={styles.activeTabContainer}
    //       />
    //     case 'HomeNavigator':
    //       return <Label text={focused ? messages.PAYMENT : ''}
    //                     textStyle={styles.activeTab}
    //                     style={styles.activeTabContainer}
    //       />
    //     case 'ProfileNavigator':
    //       return <Label text={focused ? messages.PROFILE : ''}
    //                     textStyle={styles.activeTab}
    //                     style={styles.activeTabContainer}
    //       />
    //     default:
    //       return <Text style={styles.activeTab}/>
    //   }
    // },

    tabBarIcon: ({focused}) => {
      const {routeName} = navigation.state
      const iconStyle = focused ? styles.focused : styles.icon

      switch (routeName) {
        case 'RequestNavigator':
          return (
            <Image
              source={ICON_PROJECT_STATUS}
              style={iconStyle}
              testID="ProjectNavigator"
            />
          )
        case 'HomeNavigator':
          return (
            <Image
              source={ICON_SEARCH}
              style={iconStyle}
              testID="HomeNavigator"
            />
          )
        case 'ProfileNavigator':
          return (
            <Image
              source={ICON_PROFILE}
              style={iconStyle}
              testID="ProfileNavigator"
            />
          )
        default:
          return null
      }
    },
    gesturesEnabled: false,
  }),

  tabBarOptions: {
    iconStyle: {flexWrap: 'wrap', height: iconContainerSize, width: iconContainerSize},
    showLabel: false,
    style: {
      backgroundColor: COLOR_WHITE,
      height: 50,
      width: SCREEN_WIDTH,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderTopWidth: 0,
      paddingTop: 5,
      elevation: 30,
      shadowOffset: {width: 1, height: 1},
      shadowColor: COLOR_DARK_GRAY,
      shadowOpacity: 0.3,
      shadowRadius: 10,

    },
  },
})

export default MainTabNavigator

const styles = StyleSheet.create({
  icon: {
    height: iconSize, width: iconSize, resizeMode: 'contain',
  },
  focused: {
    height: iconSize, width: iconSize, resizeMode: 'contain', tintColor: COLOR_BLUE_DEFAULT,
  },
  profileIconContainer: {
    height: iconSize,
    width: iconSize,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTab: {
    color: COLOR_MEDIUM_TURQUOISE,
    fontSize: 14,
  },
  activeTabContainer: {
    flex: 1,
    height: 14,
    marginTop: -5,
  },
})
