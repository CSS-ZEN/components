import React from 'react'
import {render} from '@testing-library/react'
import {BasicThematicbreak} from './thematicbreak.composition'

it('should render with the correct text', () => {
    const {getByText} = render(<BasicThematicbreak />)
    const rendered = getByText('hello from Thematicbreak')
    expect(rendered).toBeTruthy()
})
