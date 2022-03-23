import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import Button from '..'

describe('@Test button component', () => {
  it('should render the button component', () => {
    const testId = 'button-test-component'

    render(<Button dataTestid={testId} />)

    expect(screen.getByTestId(testId)).toBeInTheDocument()
  })
})
