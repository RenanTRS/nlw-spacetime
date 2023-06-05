import { render, screen } from '@testing-library/react'
import { SingIn } from './SingIn'
import '@testing-library/jest-dom'

describe('SingIn component', () => {
  it('should be able rendering the SingIn component', () => {
    render(<SingIn />)

    const singIn = screen.getByRole('link', {
      name: 'Create your account and record your memories!',
    })
    expect(singIn).toBeVisible()
  })
})
