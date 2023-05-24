import { render, screen } from '@testing-library/react'
import { Copyright } from './Copyright'
import '@testing-library/jest-dom'

describe('Copyright component', () => {
  it('should be able rendering the copyright', () => {
    render(<Copyright />)
    expect.assertions(3)

    const textCopy = screen.getByText(/Made with 💜 in the/i)
    const linkCopy = screen.getByRole('link', { name: /Rocketseat's/i })
    const secondTextCopy = screen.getByText(/NLW/i)

    expect(textCopy).toBeVisible()
    expect(linkCopy).toBeVisible()
    expect(secondTextCopy).toBeVisible()
  })
})
