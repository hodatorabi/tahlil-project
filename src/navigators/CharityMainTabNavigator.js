import React from 'react'
import {Image, StyleSheet,} from 'react-native'
import {createBottomTabNavigator} from 'react-navigation'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import {COLOR_BLUE_DEFAULT, COLOR_DARK_GRAY, COLOR_MEDIUM_TURQUOISE, COLOR_WHITE,} from 'src/assets/styles/colors'
import {ICON_CHARITY, ICON_PROJECT_STATUS, ICON_SEARCH} from 'src/assets/styles/icons'
import CharityProfile from '../components/charity/profile/CharityProfile'
import CharityHome from '../components/charity/home/CharityHome'
import CharityRequests from '../components/charity/requests/CharityRequests'

const iconSize = 35
const iconContainerSize = 40
const bulletSize = 16

const CharityMainTabNavigator = createBottomTabNavigator({
  CharityProfileNavigator: {screen: CharityProfile},
  CharityHomeNavigator: {screen: CharityHome},
  CharityRequestNavigator: {screen: CharityRequests},

}, {
  initialRouteName: 'CharityHomeNavigator',
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
        case 'CharityRequestNavigator':
          return (
            <Image
              source={ICON_PROJECT_STATUS}
              style={[iconStyle]}
            />
          )
        case 'CharityHomeNavigator':
          return (
            <Image
              source={ICON_SEARCH}
              style={iconStyle}
            />
          )
        case 'CharityProfileNavigator':
          return (
            <Image
              source={ICON_CHARITY}
              style={iconStyle}
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

export default CharityMainTabNavigator

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
