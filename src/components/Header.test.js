import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import { MenuTrigger } from './Menu'
import Header from './Header'

describe('<Header />', () => {
  test('it shows a menu', () => {
    const { getByText } = render(
      <Header
        children={<MenuTrigger onClick={() => this.toggleMenu(true)} />}
      />
    )

    expect(getByText('Menu')).toBeTruthy()
  })

  test('it does not shows header while the page is not scrolled', () => {
    const { container } = render(
      <Header
        children={<MenuTrigger onClick={() => this.toggleMenu(true)} />}
      />
    )
    expect(container.querySelector('header').className).toEqual('Header alt')
  })
})
