import React from 'react'
import {StyleSheet, TextInput, View} from 'react-native'
import {messages} from 'src/utils/messages'
import CommonHeader from 'src/components/common/CommonHeader'
import Label from 'src/components/common/Label'
import {COLOR_BLUE_TRANSPARENT, COLOR_WHITE} from 'src/assets/styles/colors'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import CustomButton from 'src/components/common/Buttons/CustomButton'

class CashFilterPage extends React.Component<Props, State> {

  state = {
    selectedGender: 'هردو',
  }


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1, alignItems: 'center'}}>
        <CommonHeader title={messages.ADD_FILTER} hasBack={true}
                      onPress={() => this.props.navigation.goBack()}/>

        <View style={{
          paddingHorizontal: 30,
          paddingVertical: 20,
          width: SCREEN_WIDTH,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
          <View style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            width: SCREEN_WIDTH * 0.95,
            borderRadius: 20,
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 20,
            backgroundColor: COLOR_WHITE,
          }}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 10}}
                   text={messages.NEEDED_AMOUNT}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Label text={' تومان'}/>
              <TextInput style={{
                width: 80,
                height: 40,
                borderRadius: 5,
                backgroundColor: COLOR_BLUE_TRANSPARENT,
                fontFamily: 'IRANSansMobile',
                textAlign: 'center',
              }}/>
              <Label text={' تومان تا '}/>
              <TextInput style={{
                width: 80,
                height: 40,
                borderRadius: 5,
                backgroundColor: COLOR_BLUE_TRANSPARENT,
                fontFamily: 'IRANSansMobile',
                textAlign: 'center',
              }}/>
              <Label text={'از '}/>
            </View>
          </View>

          <View style={{
            paddingHorizontal: 30,
            paddingVertical: 10,
            width: SCREEN_WIDTH * 0.95,
            borderRadius: 20,
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 20,
            backgroundColor: COLOR_WHITE,
          }}>
            <Label textStyle={{fontSize: 16}} style={{alignSelf: 'flex-end', marginBottom: 10}}
                   text={messages.FUNDED_AMOUNT}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Label text={' تومان'}/>
              <TextInput style={{
                width: 80,
                height: 40,
                borderRadius: 5,
                backgroundColor: COLOR_BLUE_TRANSPARENT,
                fontFamily: 'IRANSansMobile',
                textAlign: 'center',
              }}/>
              <Label text={' تومان تا '}/>
              <TextInput style={{
                width: 80,
                height: 40,
                borderRadius: 5,
                backgroundColor: COLOR_BLUE_TRANSPARENT,
                fontFamily: 'IRANSansMobile',
                textAlign: 'center',
              }}/>
              <Label text={'از '}/>
            </View>
          </View>

        </View>

        <CustomButton label={messages.ADD_FILTER}/>

      </View>
    )
  }
}

export default CashFilterPage

const style = StyleSheet.create({})