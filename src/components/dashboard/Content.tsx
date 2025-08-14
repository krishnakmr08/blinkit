import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AdCarousel from './AdCarousel'
import { adData } from '@utils/dummyData'
import CustomText from '@components/ui/CustomText'
import { Fonts } from '@utils/Constants'

const Content = () => {
  return (
    <View style={styles.container}>
      <AdCarousel adData={adData} />
      <CustomText variant='h5' fontFamily={Fonts.SemiBold}>Grocery & Kitchen</CustomText>
    </View>
  )
}

export default Content

const styles = StyleSheet.create({
  container : {
    paddingHorizontal : 20
  }
})