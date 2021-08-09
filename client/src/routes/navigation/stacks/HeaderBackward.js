import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    padding: 20,
  }
})

const HeaderLeft = ({ navigation }) => (
  <TouchableOpacity>
    <FontIcon
      style={styles.icon}
      name="arrow-left"
      backgroundColor="transparent"
      onPress={() => {
        navigation.goBack()
      }}
      size={25}
    />
  </TouchableOpacity>
)

export default HeaderLeft