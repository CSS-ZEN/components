import React from 'react'
import {render} from '@testing-library/react'
import {InlineQuote} from './quote.composition'

it('should render with the correct text', () => {
    const {getByText} = render(<InlineQuote />)
    const rendered = getByText('hello from Quote')
    expect(rendered).toBeTruthy()
})
