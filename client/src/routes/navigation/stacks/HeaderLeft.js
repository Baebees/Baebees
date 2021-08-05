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
      name="exchange-alt"
      backgroundColor="transparent"
      onPress={() => {
        navigation.openDrawer()
      }}
      size={25}
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