import React from 'react'
import {render} from '@testing-library/react'
import {BasicFof} from './fof.composition'

it('should render with the correct text', () => {
    const {getByText} = render(<BasicFof />)
    const rendered = getByText('404')
    expect(rendered).toBeTruthy()
})
