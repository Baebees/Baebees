import React from 'react'
import { StyleSheet, Text } from 'react-native'
// import { images } from 'theme'

const styles = StyleSheet.create({
  logo: {
    width: 32,
    height: 32,
  },
})

const HeaderTitle = ({ title }) => <Text>{title}</Text>

HeaderTitle.propTypes = {}
HeaderTitle.defaultProps = {}

export default HeaderTitle