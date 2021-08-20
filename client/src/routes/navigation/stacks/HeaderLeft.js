import React from 'react'
import PropTypes from 'prop-types'
import { StyleSheet, TouchableOpacity } from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { FontAwesome5 } from '@expo/vector-icons';

const styles = StyleSheet.create({
  icon: {
    fontSize: 20,
    padding: 20,
  }
})

const HeaderLeft = ({ navigation }) => (
  <TouchableOpacity>
    <FontAwesome5
      style={styles.icon}
      name="bars"
      onPress={() => {
        navigation.openDrawer()
      }}
      size={25}
      backgroundColor="transparent"
    />
  </TouchableOpacity>
)

HeaderLeft.propTypes = {
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func,
  }),
}

HeaderLeft.defaultProps = {
  navigation: { openDrawer: () => null },
}

export default HeaderLeft