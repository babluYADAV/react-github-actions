import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'

import App from './App'

describe('App Component', () => {

  it('should render the h1 heading', () => {

    render(<App />)

    const heading = screen.getByRole('heading', {
      level: 1,
    })

    expect(heading).toBeInTheDocument()

    expect(heading).toHaveTextContent(
      'Learning github actions by youtube'
    )

  })

  it('should render the h2 heading', () => {

    render(<App />)

    const heading = screen.getByRole('headin', {
      level: 2,
    })

    expect(heading).toBeInTheDocument()

    expect(heading).toHaveTextContent(
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    )

  })

})