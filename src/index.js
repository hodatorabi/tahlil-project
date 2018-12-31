import React, {Component} from 'react'
import MainNavigator from 'src/navigators'
import NavigationService from 'src/utils/navigationService'
import {createAppContainer} from 'react-navigation'


const AppContainer = createAppContainer(MainNavigator)

type Props = {}
export default class Main extends Component<Props> {

  render() {
    return (
      <AppContainer screenProps={{...this.props}}
                    ref={navigatorRef => {
                      NavigationService.setTopLevelNavigator(navigatorRef)
                    }}
      />

    )
  }
}

