import React from 'react'
import { TouchableOpacity, View, StyleSheet, ScrollView } from 'react-native'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import { colors } from '../../theme/colors'
const item = {src: "https://img.freepik.com/vecteurs-libre/homme-affaires-caractere-avatar-isole_24877-60111.jpg?size=338&ext=jpg"}
const Bees = ({ navigation }) => {
    return (
        <View style={styles.layer}>
        <ScrollView
            horizontal={true}
            style={styles.container}
            showsHorizontalScrollIndicator={false}
        >
            <TouchableOpacity style={styles.bee} 
            onPress={()=> navigation.navigate('Media', { from: 'Home', item })}
            >
                <Avatar
                    rounded
                    containerStyle={{ borderWidth: 3, borderColor: colors.gray, borderStyle:'solid' }}
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="medium"
                />

                <Badge
                    status="success"
                    containerStyle={styles.status}
                    textStyle={{ fontWeight: 40 }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bee}>
                <Avatar
                    rounded
                    containerStyle={{ borderWidth: 3, borderColor: colors.gray, borderStyle:'solid' }}
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="medium"
                />

                <Badge
                    status="success"
                    containerStyle={styles.status}
                    textStyle={{ fontWeight: 40 }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bee}>
                <Avatar
                    rounded
                    containerStyle={{ borderWidth: 3, borderColor: colors.gray, borderStyle:'solid' }}
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="medium"
                />

                <Badge
                    status="success"
                    containerStyle={styles.status}
                    textStyle={{ fontWeight: 40 }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bee}>
                <Avatar
                    rounded
                    containerStyle={{ borderWidth: 3, borderColor: colors.gray, borderStyle:'solid' }}
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="medium"
                />

                <Badge
                    status="success"
                    containerStyle={styles.status}
                    textStyle={{ fontWeight: 40 }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bee}>
                <Avatar
                    rounded
                    containerStyle={{ borderWidth: 3, borderColor: colors.gray, borderStyle:'solid' }}
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="medium"
                />

                <Badge
                    status="success"
                    containerStyle={styles.status}
                    textStyle={{ fontWeight: 40 }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bee}>
                <Avatar
                    rounded
                    containerStyle={{ borderWidth: 3, borderColor: colors.gray, borderStyle:'solid' }}
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="medium"
                />

                <Badge
                    status="success"
                    containerStyle={styles.status}
                />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bee}>
                <Avatar
                    rounded
                    containerStyle={{ borderWidth: 3, borderColor: colors.gray, borderStyle:'solid' }}
                    source={{
                        uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                    }}
                    size="medium"
                />

                <Badge
                    status="success"
                    containerStyle={styles.status}
                />
            </TouchableOpacity>
        </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: "#fff",
        borderBottomWidth: 0.5,
        borderColor: colors.darkGray
    },
    status: {
        position: "absolute",
    },
    bee: {
        margin: 5,
        backgroundColor: 'transparent',
    },
    layer: {
        height: 61
    }
})

export default Bees