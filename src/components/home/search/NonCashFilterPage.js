import React from 'react'
import {Picker, StyleSheet, TextInput, View} from 'react-native'
import {messages} from 'src/utils/messages'
import CommonHeader from 'src/components/common/CommonHeader'
import Label from 'src/components/common/Label'
import {COLOR_BLUE_DEFAULT, COLOR_BLUE_TRANSPARENT, COLOR_WHITE} from 'src/assets/styles/colors'
import {SCREEN_WIDTH} from 'src/assets/styles/style'
import CustomButton from 'src/components/common/Buttons/CustomButton'

class NonCashFilterPage extends React.Component<Props, State> {

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
                   text={messages.VOLUNTEER_AGE}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TextInput style={{
                width: 40,
                height: 40,
                borderRadius: 5,
                backgroundColor: COLOR_BLUE_TRANSPARENT,
                fontFamily: 'IRANSansMobile',
                textAlign: 'center',
              }}/>
              <Label text={' تا '}/>
              <TextInput style={{
                width: 40,
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
                   text={messages.VOLUNTEER_GENDER}/>
            <Picker
              selectedValue={this.state.selectedGender}
              style={{height: 50, width: '50%', borderWidth: 1, borderColor: COLOR_BLUE_DEFAULT}}
              onValueChange={(itemValue, itemIndex) => this.setState({selectedGender: itemValue})}
              itemStyle={{fontFamily: 'IRANSansMobile', fontSize: 25}}>
              <Picker.Item label=' هر دو' value='هردو'/>
              <Picker.Item label=' زن' value='زن'/>
              <Picker.Item label=' مرد' value='مرد'/>
            </Picker>
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
                   text={messages.PROJECT_LOCATION}/>
            <TextInput style={{
              width: 150,
              height: 40,
              borderRadius: 5,
              backgroundColor: COLOR_BLUE_TRANSPARENT,
              fontFamily: 'IRANSansMobile',
              textAlign: 'right',
            }}/>
          </View>

        </View>

        <CustomButton label={messages.ADD_FILTER}/>

      </View>
    )
  }
}

export default NonCashFilterPage

const style = StyleSheet.create({})