import React, { useState } from 'react'
import { View, Text, Image, Dimensions, StyleSheet } from 'react-native'
import SearchComponent from '../../components/SearchComponent'
import User from '../../components/User'
const { height } = Dimensions.get('screen')

const Search = (props) => {
    const [isEmpty, setEmpty] = useState(false)
    return (
        <View>
            <SearchComponent />
            {isEmpty ?
                <View style={styles.bowl}>
                    <Image
                        style={{ height: 100, width: 100 }}
                        source={require('../../../assets/icons/emptybowl.png')}
                    />
                </View> :
                <User {...props} path="UserProfile"/>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    bowl: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.7
    }
})

export default Search