import React, { useState } from 'react'
import { View, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native'
import { SearchBar } from 'react-native-elements'
import FontIcon from 'react-native-vector-icons/FontAwesome5'

const Search = (props) => {

  const [search, setSearch] = useState('')
  const updateSearch = (query) => {
    setSearch(query)
  }

  return (
    <View>
      <SearchBar
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        platform='android'
        searchIcon={<SearchIcon query={search} />}
      />
    </View>
  )
}

const SearchIcon = ({ query }) => {
  const searchQuery = () => {
    console.log(query)
  }

  return (
    <TouchableOpacity>
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