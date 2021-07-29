import React from 'react'
import {render} from '@testing-library/react'
import {ResponsiveFlex} from './flexrx.composition'

it('should render with the correct text', () => {
    const {getByText} = render(<ResponsiveFlex />)
    const rendered = getByText('Shrink')
    expect(rendered).toBeTruthy()
})
