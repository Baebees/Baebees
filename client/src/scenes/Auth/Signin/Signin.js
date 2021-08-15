import React from 'react'
import { Formik } from 'formik'
import { Button, TextInput, View } from 'react-native';
import FormIn from '../../../components/Form'

const Singin = (props) => {
    return (
        <View>
            <FormIn {...props}/>
        </View>
    )
}

export default Singin