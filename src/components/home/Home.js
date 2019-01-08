import React from 'react'
import {ScrollView, StyleSheet, View} from 'react-native'
import ProjectOverview from 'src/components/home/project/ProjectOverview'
import {messages} from 'src/utils/messages'
import {PROJECT_SAMPLE_PIC4, PROJECT_SAMPLE_PIC5} from 'src/assets/styles/icons'
import HomeHeader from 'src/components/home/HomeHeader'

class Home extends React.Component<Props, State> {


  render() {
    return (
      <View style={{justifyContent: 'flex-start', flex: 1}}>
        <HomeHeader navigation={this.props.navigation}/>
        <ScrollView contentContainerStyle={{paddingTop: 20, alignItems: 'center'}}>
          <ProjectOverview projectPicture={PROJECT_SAMPLE_PIC4} type={messages.NON_CASH}
                           projectName={'غذارسانی حیوانات'}
                           charityName={'پناهگاه وفا'}
                           projectStartDate={'۱۲ مهر ۱۳۹۷'}
                           projectEndDate={'۱۲ آذر ۱۳۹۷'}/>
          <ProjectOverview projectPicture={PROJECT_SAMPLE_PIC5} type={messages.CASH}
                           projectName={'تامین کمک هزینه دانش‌آموزان'}
                           charityName={'خیریه حکمت'}
                           projectStartDate={'۱ مهر ۱۳۹۷'}
                           projectEndDate={'۱۰ مهر ۱۳۹۷'}/>
        </ScrollView>
      </View>
    )
  }
}

export default Home

const style = StyleSheet.create({})