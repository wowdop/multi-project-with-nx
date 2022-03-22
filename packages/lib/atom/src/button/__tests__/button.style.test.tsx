import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import 'jest-styled-components'

import { Button } from '../button.style'

describe('@Test button component', () => {
  it('should render the button component', () => {
    const testId = 'button-test-component'

    render(<Button dataTestid={testId} />)

    expect(screen.getByTestId(testId)).toHaveStyleRule('border-width', '2px')
  })
})
