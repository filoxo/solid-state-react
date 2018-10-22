import React from 'react'
import { render, cleanup } from 'react-testing-library'
import Copyright from './Copyright'

afterEach(cleanup)

describe('<Copyright/>', () => {
  test('displays Copywrite content', () => {
    const { getByText } = render(<Copyright>Copyright 2018</Copyright>)
    expect(getByText('Copyright 2018')).toBeTruthy()
  })
})
