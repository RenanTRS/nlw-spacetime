import { render, screen } from '@testing-library/react'
import { Text } from './Text'
import '@testing-library/jest-dom'

describe('Text component', () => {
  it('should be able rendering the text', () => {
    render(<Text>Some text here</Text>)

    expect.assertions(1)

    const text = screen.getByText('Some text here')

    expect(text).toBeVisible()
  })
  it('should be able rendering the medium text', () => {
    render(<Text size={'md'}>Some text here</Text>)

    expect.assertions(2)

    const mediumText = screen.getByText('Some text here')

    expect(mediumText).toBeVisible()
    expect(mediumText).toHaveClass('text-base')
  })
  it('should be able rendering the small text', () => {
    render(<Text size={'sm'}>Some text here</Text>)

    expect.assertions(2)

    const smallText = screen.getByText('Some text here')

    expect(smallText).toBeVisible()
    expect(smallText).toHaveClass('text-sm')
  })
})
