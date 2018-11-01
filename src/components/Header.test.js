import React from 'react'
import { render, wait } from 'react-testing-library'
import Header from './Header'

describe('<Header />', () => {
  test('it does show header when the page is scrolled up', () => {
    //async () => {
    document.documentElement.scrollTop = 50
    const { rerender, asFragment } = render(
      <Header children={<button>Menu</button>} />
    )
    document.documentElement.scrollTop = 100
    // await wait(() =>
    //   expect(document.documentElement.scrollTop).toEqual(100)
    // )
    console.log(asFragment().querySelector('header').className)
    rerender(<Header children={<button>Menu</button>} />)

    expect(asFragment().querySelector('header').className).toEqual('Header')
  })
})
