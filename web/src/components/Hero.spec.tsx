import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import '@testing-library/jest-dom'

describe('Hero component', () => {
  it('should be able rendering the img in the hero', () => {
    render(<Hero />)
    expect.assertions(1)

    const logoImg = screen.getByRole('img', { name: /NLW Spacetime/i })
    expect(logoImg).toBeVisible()
  })
  it('should be able rendering the tile', () => {
    render(<Hero />)
    expect.assertions(1)

    const title = screen.getByText(/Your time capsule/i)
    expect(title).toBeVisible()
  })
  it('should be able rendering the text', () => {
    render(<Hero />)
    expect.assertions(1)

    const text = screen.getByText(
      'Collect the memorable moments of your journey and share (if you like) with the world!',
    )
    expect(text).toBeVisible()
  })
  it('should be able rendering the link', () => {
    render(<Hero />)
    expect.assertions(1)

    const link = screen.getByRole('link', { name: 'Register your memory' })
    expect(link).toBeVisible()
  })
})
