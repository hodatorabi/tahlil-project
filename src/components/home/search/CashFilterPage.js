import React from 'react'
import {ScrollView, StyleSheet, TextInput, View} from 'react-native'
import {messages} from 'src/utils/messages'
import CommonHeader from 'src/components/common/CommonHeader'
import Label from 'src/components/common/Label'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import CustomButton from 'src/components/common/Buttons/CustomButton'
import {COLOR_WHITE} from 'src/assets/styles/colors'

class CashFilterPage extends React.Component<Props, State> {

  constructor(props) {
    super(props)

    this.onSubmitFilters = this.onSubmitFilters.bind(this)
  }

  state = {
    minTarget: null,
    maxTarget: null,
    filters: {},
  }

  onSubmitFilters() {

    const filters = {
      minTarget: this.state.minTarget,
      maxTarget: this.state.maxTarget,
    }
    const {routeName, key} = this.props.navigation.getParam('returnToRoute')
    this.setState({filters: filters}, () => this.props.navigation.navigate({
      routeName,
      key,
      params: {cashFilters: this.state.filters},
    }))
  }


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1, alignItems: 'center'}}>
        <CommonHeader title={messages.ADD_FILTER} hasBack={true}
                      onPress={() => {
                        const {routeName, key} = this.props.navigation.getParam('returnToRoute')
                        this.props.navigation.navigate({routeName, key, params: {test: true}})
                      }}/>

        <ScrollView showsVerticalScrollIndicator={false}
                    contentContainerStyle={{paddingTop: 20, alignItems: 'center', paddingBottom: 20}}>

          <View style={style.itemContainerStyle}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 5}}
                   text={messages.NEEDED_AMOUNT}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Label text={' تومان'}/>
              <TextInput style={style.itemTextStyle} onChangeText={(text) => this.setState({maxTarget: text})}
                         maxLength={8} keyboardType={'number-pad'}/>
              <Label text={' تومان تا '}/>
              <TextInput style={style.itemTextStyle} onChangeText={(text) => this.setState({minTarget: text})}
                         maxLength={8} keyboardType={'number-pad'}/>
              <Label text={'از '}/>
            </View>
          </View>


          <CustomButton style={{width: 0.8 * SCREEN_WIDTH, height: 50}}
                        label={messages.ADD_FILTER}
                        labelStyle={{fontSize: 20}}
                        onPress={this.onSubmitFilters}
          />

        </ScrollView>
      </View>
    )
  }
}

export default CashFilterPage

const style = StyleSheet.create({
  itemContainerStyle: {
    paddingHorizontal: 30,
    paddingTop: 30,
    paddingBottom: 40,
    borderRadius: 10,
    width: SCREEN_WIDTH * 0.95,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: COLOR_WHITE,
    elevation: 1,
  },
  itemTextStyle: {
    width: 80,
    fontSize: 16,
    borderBottomWidth: 1,
    fontFamily: 'IRANSansMobile',
    textAlign: 'left',
  },
})