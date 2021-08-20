import React from 'react'
import { Button } from 'react-native'
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

const Subscription = ({ navigation }) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.description}>
                <Image
                    style={{ height: height * 0.2, width: height * 0.2 }}
                    source={require('../../../assets/icons/cat.png')}
                />
            </View>
            <View style={styles.confirmation}>
                <Text style={styles.reminder}>
                    Reminder
                </Text>
                <View>
                <Text style={styles.txt}>
                    By choosing confirm, you are accepting to subscribe for the offer given by Baebees.{"\n"}We are responsible for:{"\n"}
                </Text>
                <Text style={styles.txt}>
                ●&nbsp;saving your Pet name along with an identifier with the owner phone number{"\n"}
                </Text>
                <Text style={styles.txt}>
                ●&nbsp;providing the owner with the demanded informations{"\n"}
                </Text>
                <Text style={styles.txt}>
                ●&nbsp;not to share your personal informations{"\n"}
                </Text>
                <Text style={styles.txt}>
                ●&nbsp;contribute in the process of finding your missing Pet{"\n"}
                </Text>
                </View>
                <View style={styles.button}>
                <Button
                    title="Confirm"
                    accessibilityLabel="Learn more about this subscription"
                    onPress={()=> navigation.navigate('Payment')}
                />
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    description: {
        alignItems: 'center'
    },
    confirmation: {
        height: height * 0.7,
        width: width * 0.8,
        alignItems: "center",
        justifyContent: 'space-evenly'
    },
    button: {
        width: width * 0.6,
        height: 30,
    },
    reminder: {
        fontSize: 25,
        fontWeight: '600'
    },
    txt: {
        fontSize: 15,
        fontWeight: '500',
        lineHeight: 25,
    }
})

export default Subscription