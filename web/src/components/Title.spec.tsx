import { render, screen } from '@testing-library/react'
import { Title } from './Title'
import '@testing-library/jest-dom'

describe('Title component', () => {
  it('should be able rendering the title', () => {
    render(<Title>Some text here</Title>)
    expect.assertions(1)

    const text = screen.getByText('Some text here')

    expect(text).toBeVisible()
  })
})
