import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import { Formik } from 'formik'
import Federation from '../Federation'
const { height, width } = Dimensions.get('screen')

const Register = () => {
    return (
        <Formik
            initialValues={{ phoneNumber: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <View style={styles.switch}>
                        <Text style={styles.question}>Have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.singin}>&nbsp;sign in</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.federation}>
                    <Federation />
                    <View style={styles.orLabel}>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                width: '45%',
                                flex: 1
                            }}
                        />
                        <Text style={{margin: 5}}>Or</Text>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                width: '45%'
                            }}
                        />
                    </View>
                    </View>
                    <Text style={styles.label}>Phone Number</Text>
                    <View style={styles.form}>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        value={values.phoneNumber}
                        keyboardType= 'numeric'
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        height: height * 0.5,
        justifyContent: 'space-evenly'
    },
    inputs: {
        marginRight: 10,
        marginLeft: 10,
        height: 48,
        borderWidth: 1,
        borderColor: "#a9a9a9",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 15
    },
    button: {
        alignItems: "center",
        backgroundColor: "#6495ed",
        padding: 10,
        height: 48,
        marginTop: 10,
        marginBottom: 50,
        marginRight: 10,
        marginLeft: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white'
    },
    label: {
        marginLeft: 10,
        color: '#a9a9a9'
    },
    switch: {
        flexDirection: "row",
        justifyContent: 'center',
    },
    question: {
        fontWeight: '500'
    },
    singin: {
        fontWeight: 'bold'
    },
    orLabel: {
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    federation: {
        height: height * 0.15,
        justifyContent: 'space-evenly'
    },
    form: {
        height: height * 0.3,
        justifyContent: 'space-evenly'
    }
})

export default Register