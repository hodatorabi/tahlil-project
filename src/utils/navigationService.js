import {NavigationActions, StackActions} from 'react-navigation'


let _navigator

function setTopLevelNavigator(navigatorRef: any): any {
  _navigator = navigatorRef
}

function navigate(routeName: string, params: any): void {
  const navigateAction = NavigationActions.navigate({
    routeName,
    params,
  })
  _navigator.dispatch(navigateAction)
}

function reset(routeNames: Array<string>): void {
  let actions = null
  for (let i = routeNames.length - 1; i >= 0; i--) {
    let params: any = {routeName: routeNames[i]}
    if (i !== routeNames.length - 1)
      params.action = actions
    actions = NavigationActions.navigate(params)
  }

  const resetAction = StackActions.reset({
    index: 0,
    key: null,
    actions: [actions],
  })
  _navigator.dispatch(resetAction)
}

export default {
  navigate,
  reset,
  setTopLevelNavigator,
}
