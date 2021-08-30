import React from 'react'
import {render} from '@testing-library/react'
import {BasicCopy} from './copy.composition'

it('should render with the correct text', () => {
    const {getByText} = render(<BasicCopy />)
    const rendered = getByText('hello from Copy')
    expect(rendered).toBeTruthy()
})
