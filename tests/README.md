# Testing

This project uses [Vitest](https://vitest.dev/) for unit and integration testing.

## Setup

Install testing dependencies:

```bash
pnpm add -D vitest @vitejs/plugin-react @testing-library/react @testing-library/jest-dom jsdom
```

## Running Tests

```bash
# Run tests in watch mode
pnpm test

# Run tests once
pnpm test --run

# Run tests with UI
pnpm test:ui

# Run tests with coverage
pnpm test:coverage
```

## Writing Tests

Tests are located in the `tests/` directory. Example test structure:

```typescript
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

describe('ComponentName', () => {
  it('should render correctly', () => {
    render(<ComponentName />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

## Test Coverage

Currently, tests focus on:

- Utility functions (`components/lib/utils.ts`)
- Component rendering (when added)
- Integration tests for blog routing and draft filtering (when added)
