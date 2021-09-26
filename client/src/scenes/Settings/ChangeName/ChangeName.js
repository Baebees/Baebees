import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Formik } from 'formik'

const ChangeName = (props) => {
    return (
        <Formik
            initialValues={{ UserName: '', CurrentPassword: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <Text style={styles.label}>New First Name</Text>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={handleChange('FirstName')}
                        onBlur={handleBlur('FirstName')}
                        value={values.UserName}
                    />
                    <Text style={styles.label}>New Last Name</Text>
                    <TextInput
                        style={styles.inputs}
                        onChangeText={handleChange('LastName')}
                        onBlur={handleBlur('LastName')}
                        value={values.UserName}
                    />
                    <Text style={styles.label}>Your Password</Text>
                    <TextInput
                        style={styles.inputs}
                        secureTextEntry={true}
                        onChangeText={handleChange('CurrentPassword')}
                        onBlur={handleBlur('CurrentPassword')}
                        value={values.CurrentPassword}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleSubmit}
                    >
                        <Text style={styles.buttonText}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            )}
        </Formik>
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        flex: 1,
        padding: 10
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
    inputs: {
        marginRight: 10,
        marginLeft: 10,
        height: 48,
        borderWidth: 1,
        borderColor: "#a9a9a9",
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    label: {
        marginLeft: 10,
        color: '#a9a9a9'
    },
})

export default ChangeName