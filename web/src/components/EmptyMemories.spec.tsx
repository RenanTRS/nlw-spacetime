import { render, screen } from '@testing-library/react'
import { EmptyMemories } from './EmptyMemories'
import '@testing-library/jest-dom'

describe('EmptyMemories component', () => {
  it('should be able rendering the EmptyMemories component', () => {
    render(<EmptyMemories />)
    expect.assertions(2)

    const text = screen.getByText(
      /You haven't registered any memories yet, start/i,
    )
    const link = screen.getByRole('link', { name: 'creating now' })

    expect(text).toBeVisible()
    expect(link).toBeVisible()
  })
})
