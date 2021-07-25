import React, { useState } from 'react'
import { View, Button, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import Federation from '../Federation'

const FormIn = () => {
    return (
        <Formik
            initialValues={{ phoneNumber: '', email: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <Federation />
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={handleChange('phoneNumber')}
                        onBlur={handleBlur('phoneNumber')}
                        value={values.phoneNumber}
                    />
                    <Text style={styles.label}>Password</Text>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>Login</Text>
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
        color: '#a9a9a9'
      }
})

export default FormIn