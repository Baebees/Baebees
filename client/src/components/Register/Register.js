import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import Federation from '../Federation'

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
                    <Federation />
                    <View style={styles.orLabel}>
                        <View
                            style={{
                                borderBottomColor: 'black',
                                borderBottomWidth: 1,
                                width: '45%'
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
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        value={values.phoneNumber}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        flex: 1
    },
    inputs: {
        marginRight: 10,
        marginLeft: 10,
        height: '3rem',
        borderWidth: 1,
        borderColor: "#a9a9a9",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5
    },
    button: {
        alignItems: "center",
        backgroundColor: "#6495ed",
        padding: 10,
        height: '3rem',
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
        // marginTop: 50,
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
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    }
})

export default Register