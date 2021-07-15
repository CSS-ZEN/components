import React from 'react'
import {render} from '@testing-library/react'
import {BasicMarkdown} from './markdown.composition'

it('should render with the correct text', () => {
    const {getByText} = render(<BasicMarkdown />)
    const rendered = getByText('H1')
    expect(rendered).toBeTruthy()
})
