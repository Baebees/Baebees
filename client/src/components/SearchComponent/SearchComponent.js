import React, { useState } from 'react'
import { View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import { SearchBar } from 'react-native-elements'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme/colors'

const Search = (props) => {

  const [search, setSearch] = useState('')
  const updateSearch = (query) => {
    setSearch(query)
  }

  return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        platform='android'
        searchIcon={<SearchIcon query={search} />}
        style={{
          borderWidth: 1,
          borderRadius: 10,
          borderColor: colors.lightBlack,
          padding: 5
        }}
      />
  )
}

const SearchIcon = ({ query }) => {
  const searchQuery = () => {
    console.log(query)
  }

  return (
    <TouchableOpacity
      style={{
        paddingLeft: 5
      }}
    >
      <FontIcon
        name="search"
        onPress={() => {
          searchQuery()
        }}
        size={20}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
})

export default Search