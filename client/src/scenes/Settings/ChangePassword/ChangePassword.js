import React from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { Formik } from 'formik'

const ChangePassword = (props) => {
    return (
        <Formik
            initialValues={{ Password: '', PasswordConfirmation: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={styles.container}>
                    <Text style={styles.label}>Change Password</Text>
                    <TextInput
                        style={styles.inputs}
                        secureTextEntry={true}
                        onChangeText={handleChange('Password')}
                        onBlur={handleBlur('Password')}
                        value={values.Password}
                    />
                    <Text style={styles.label}>Confirm Password</Text>
                    <TextInput
                        style={styles.inputs}
                        secureTextEntry={true}
                        onChangeText={handleChange('PasswordConfirmation')}
                        onBlur={handleBlur('PasswordConfirmation')}
                        value={values.PasswordConfirmation}
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

export default ChangePassword