import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'
import '@testing-library/jest-dom'

describe('Button component', () => {
  it('should be able rendering the default button', () => {
    render(<Button>Some text here</Button>)
    expect.assertions(1)

    const buttonDefault = screen.getByRole('button', {
      name: /some text here/i,
    })

    expect(buttonDefault).toBeVisible()
  })
  it('should be able rendering the button polimorfic', () => {
    render(
      <Button asChild>
        <a href="">Some text here</a>
      </Button>,
    )
    expect.assertions(1)

    const buttonPolimorfic = screen.getByRole('link', {
      name: /some text here/i,
    })

    expect(buttonPolimorfic).toBeVisible()
  })
  it('should be able clicking the button', async () => {
    const fn = jest.fn()
    render(<Button onclick={fn}>Some text here</Button>)

    expect.assertions(2)

    const buttonDefault = screen.getByRole('button', {
      name: /some text here/i,
    })
    await userEvent.click(buttonDefault)

    expect(buttonDefault).toBeVisible()
    expect(fn).toHaveBeenCalledTimes(1)
  })
  it('should not be able click the button', async () => {
    const fn = jest.fn()
    render(
      <Button onclick={fn} disabled>
        Some text here
      </Button>,
    )
    expect.assertions(2)

    const buttonDefault = screen.getByRole('button', {
      name: /some text here/i,
    })

    await userEvent.click(buttonDefault)

    expect(buttonDefault).toBeVisible()
    expect(fn).not.toHaveBeenCalled()
  })
})
