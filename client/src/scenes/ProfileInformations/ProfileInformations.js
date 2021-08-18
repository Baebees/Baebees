import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { ListItem } from 'react-native-elements'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme/colors'
import TopMargin from '../../components/TopMargin'
const { width } = Dimensions.get('window')

const ProfileInformations = (props) => {
    return (
        <View style={styles.container}>
            <TopMargin />
            <View style={{width: width}}>
                <ListItem bottomDivider>
                    <View style={{ width: 25 }}>
                        <FontIcon
                            name="signature"
                            color={colors.lightBlack}
                            backgroundColor="transparent"
                            size={20}
                        />
                    </View>
                    <ListItem.Content>
                        <ListItem.Title >Change Fullname</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider>
                    <View style={{ width: 25 }}>
                        <FontIcon
                            name="key"
                            color={colors.lightBlack}
                            backgroundColor="transparent"
                            size={20}
                        />
                    </View>
                    <ListItem.Content>
                        <ListItem.Title >Change Password</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider>
                    <View style={{ width: 25 }}>
                        <FontIcon
                            name="phone-alt"
                            color={colors.lightBlack}
                            backgroundColor="transparent"
                            size={20}
                        />
                    </View>
                    <ListItem.Content>
                        <ListItem.Title>Change Phone Number</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    }
})

export default ProfileInformations