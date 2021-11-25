import React from "react"
import { render, fireEvent} from '@testing-library/react-native'
import CustomButton from "../src/CustomButton"

describe('Custom Button test', () => {
    const onPressMockup = jest.fn()
    const props = {
        label: '라벨입니다.'
    }

    it('onPress test', () => {
        const rendering = render(<CustomButton {...props} />)
        var TEST_COUNT = 100
        for (let i = 0; i < TEST_COUNT; i++) {
            fireEvent.press(rendering.getByText('라벨입니다.'))
        }
        expect(onPressMockup).toBeCalledTimes(TEST_COUNT)

    })
})