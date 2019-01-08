import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import HeaderWithLogo from 'src/components/common/HeaderWithLogo'
import ProjectOverview from 'src/components/home/project/ProjectOverview'
import {messages} from 'src/utils/messages'
import {PROJECT_SAMPLE_PIC4} from 'src/assets/styles/icons'

class Home extends React.Component<Props, State> {


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <HeaderWithLogo/>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          <ProjectOverview projectPicture={PROJECT_SAMPLE_PIC4} type={messages.NON_CASH}
                           projectName={'غذارسانی حیوانات'}
                           charityName={'پناهگاه وفا'}
                           projectStartDate={'۱۲ مهر ۱۳۹۷'}
                           projectEndDate={'۱۲ آذر ۱۳۹۷'}/>
        </ScrollView>
      </View>
    )
  }
}

export default Home

const style = StyleSheet.create({})