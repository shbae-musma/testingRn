import React, { useState } from 'react'
import { View, Text} from 'react-native'
import CustomButton from './CustomButton.js'

const User = ({name, id}) => {
    const [msg, setMsg] = useState("Who a u?")

    return (
        <View>
            <Text>
                메시지가 표시 됩니다. : {msg}
            </Text>
            <Text>
                아이디가 표시 됩니다 : {id}
            </Text>
            <Text>
                이름이 표시 됩니다 : {name}
            </Text>
            <CustomButton label="버튼입니다." onPress={() => setMsg("버튼을 눌렀습니다.")} />
        </View>
    )
}

export default User 