import React from 'react'
import {render} from '@testing-library/react'
import {BasicOcticoncheck} from './octiconcheck.composition'

it('should render with the correct text', () => {
    const {getByText} = render(<BasicOcticoncheck />)
    const rendered = getByText('hello from Octiconcheck')
    expect(rendered).toBeTruthy()
})
