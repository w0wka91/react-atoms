import React from 'react'
import 'jest-dom/extend-expect'
import { render, cleanup } from 'react-testing-library'
import Normalize from './Normalize'

afterEach(cleanup)

it('should render', () => {
  render(<Normalize />)
})