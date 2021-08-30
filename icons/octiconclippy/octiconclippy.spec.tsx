import React from 'react'
import {render} from '@testing-library/react'
import {BasicOcticonclippy} from './octiconclippy.composition'

it('should render with the correct text', () => {
    const {getByText} = render(<BasicOcticonclippy />)
    const rendered = getByText('hello from Octiconclippy')
    expect(rendered).toBeTruthy()
})
