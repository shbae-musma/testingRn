import React from 'react'
import { Button } from 'react-native'

const CustomButton = ({ label, onPress}) => {
    return <Button title={label} onPress={onPress} />
}

export default CustomButton