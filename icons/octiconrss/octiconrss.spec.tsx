import React from 'react'
import {render} from '@testing-library/react'
import {BasicOcticonrss} from './octiconrss.composition'

it('should render with the correct text', () => {
    const {getByText} = render(<BasicOcticonrss />)
    const rendered = getByText('hello from Octiconrss')
    expect(rendered).toBeTruthy()
})
