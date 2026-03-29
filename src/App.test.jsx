// src/App.test.jsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom/vitest'

describe('App', () => {
  it('renders the main headline', () => {
    render(<App />)
    // Use getByText from React Testing Library to find elements by text content
    expect(screen.getByText('Get started')).toBeInTheDocument()
  })
})
