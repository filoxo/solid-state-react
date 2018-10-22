import React from 'react'
import {
  render,
  fireEvent,
  cleanup,
  waitForElement,
} from 'react-testing-library'
import Card from './Card'

afterEach(cleanup)

describe('<Card/>', () => {
  test('displays basic card', () => {
    const { getByText } = render(
      <Card
        title={'Test title'}
        desc={'Test description'}
        to={'https://github.com/filoxo'}
      />
    )
    expect(getByText('Test title')).toBeTruthy()
    expect(getByText('Test description')).toBeTruthy()
    expect(getByText('Learn more')).toBeTruthy()
  })

  test('displays image card', () => {
    const { getByText, getByAltText } = render(
      <Card
        imgSrc={'https://picsum.photos/200/300/?random'}
        imgAlt={'A test image'}
        to={'https://github.com/filoxo'}
      />
    )
    expect(getByAltText('A test image')).toBeTruthy()
    expect(getByText('Learn more')).toBeTruthy()
    // Someday explore how to better find an anchor wrapped around an img
  })
})
