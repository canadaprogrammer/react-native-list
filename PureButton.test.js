/* eslint-disable */

import React from 'react'
import renderer from 'react-test-renderer'
import PureButton from './PureButton'

describe('PureButton', () => {
    it('renders', () => {
        const button = renderer.create(<PureButton />).toJSON()
        expect(button).toMatchSnapshot()
    })

    it('correctly overrides default color', () => {
        const color = 'red'
        const button = renderer.create(<PureButton color={color}/>).root
        expect(button.props.color).toBe(color)
    })
})