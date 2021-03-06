import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup } from '@testing-library/react'
import { Breadcrumb } from './Breadcrumb'

afterEach(cleanup)

it('should append the passed className', () => {
  const { getByTestId } = render(
    <Breadcrumb data-testid="breadcrumb" className="customizedBreadcrumb">
      <Breadcrumb.Item>
        <Breadcrumb.Icon name="home" />
        <span>Dashboard</span>
      </Breadcrumb.Item>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>Apps</Breadcrumb.Item>
    </Breadcrumb>
  )
  expect(getByTestId('breadcrumb')).toHaveClass('customizedBreadcrumb')
})
