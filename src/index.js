import React, {Component} from 'react'
import MainNavigator from 'src/navigators'
import NavigationService from 'src/utils/navigationService'
import {createAppContainer} from 'react-navigation'
import {Provider} from 'react-redux'
import {Store} from 'src/store'


const AppContainer = createAppContainer(MainNavigator)

type Props = {}
export default class Main extends Component<Props> {

  render() {
    return (
        <Provider store={Store}>
            <AppContainer screenProps={{...this.props}}
                          ref={navigatorRef => {
                              NavigationService.setTopLevelNavigator(navigatorRef)
                          }}
            />
        </Provider>
    )
  }
}

