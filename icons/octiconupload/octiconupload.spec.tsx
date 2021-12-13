import React from 'react'
import {render} from '@testing-library/react'
import {BasicOcticonupload} from './octiconupload.composition'

it('should render with the correct text', () => {
    const {getByText} = render(<BasicOcticonupload />)
    const rendered = getByText('hello from Octiconupload')
    expect(rendered).toBeTruthy()
})
