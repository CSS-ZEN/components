import React from 'react'
import {render} from '@testing-library/react'
import {BasicOcticonlink} from './octiconlink.composition'

it('should render with the correct text', () => {
    const {getByText} = render(<BasicOcticonlink />)
    const rendered = getByText('hello from Octiconlink')
    expect(rendered).toBeTruthy()
})
