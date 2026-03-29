import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// Automatically unmount components after each test
afterEach(() => {
  cleanup()
})
