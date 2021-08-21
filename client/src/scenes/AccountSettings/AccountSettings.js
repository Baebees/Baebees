import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../theme/colors'
import TopMargin from '../../components/TopMargin'
const { width } = Dimensions.get("window")

const AccountSettings = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TopMargin />
            <View style={{width: width}}>
                <ListItem bottomDivider
                onPress={()=> navigation.navigate("ProfileInformations")}
                >
                    <View style={{ width: 25 }}>
                        <FontIcon
                            name="user-circle"
                            color={colors.lightBlack}
                            backgroundColor="transparent"
                            size={20}
                        />
                    </View>
                    <ListItem.Content>
                        <ListItem.Title >Account</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider
                onPress={()=> navigation.navigate('ChangeNotificationsSettings')}
                >
                    <View style={{ width: 25 }}>
                        <FontIcon
                            name="bell"
                            color={colors.lightBlack}
                            backgroundColor="transparent"
                            size={20}
                        />
                    </View>
                    <ListItem.Content>
                        <ListItem.Title>Notification</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider
                onPress={()=> navigation.navigate('ChangeAdsSettings')}
                >
                    <View style={{ width: 25 }}>
                        <FontIcon
                            name="ad"
                            color={colors.lightBlack}
                            backgroundColor="transparent"
                            size={20}
                        />
                    </View>
                    <ListItem.Content>
                        <ListItem.Title >Ads</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider
                onPress={()=> navigation.navigate('Help')}
                >
                    <View style={{ width: 25 }}>
                        <FontIcon
                            name="question-circle"
                            color={colors.lightBlack}
                            backgroundColor="transparent"
                            size={20}
                        />
                    </View>
                    <ListItem.Content>
                        <ListItem.Title >Help</ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>
                <ListItem bottomDivider
                onPress={()=> navigation.navigate('About')}
                >
                    <View style={{ width: 25 }}>
                        <FontIcon
                            name="info-circle"
                            color={colors.lightBlack}
                            backgroundColor="transparent"
                            size={20}
                        />
                    </View>
                    <ListItem.Content>
                        <ListItem.Title >About</ListItem.Title>
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

export default AccountSettings