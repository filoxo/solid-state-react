import React from 'react'
import Modal from 'react-modal'

import './Menu.css'

Modal.setAppElement('#root')

const Menu = ({ showMenu, closePortal, children }) => (
  <Modal
    isOpen={showMenu}
    onRequestClose={closePortal}
    className="Modal"
    overlayClassName="backdrop"
    bodyOpenClassName="blur"
  >
    <nav className="menu">
      {children}
      <button className="close" type="button" onClick={closePortal}>
        Close
      </button>
    </nav>
  </Modal>
)

const MenuTrigger = ({ onClick }) => (
  <button className="menuBtn" type="button" onClick={onClick}>
    Menu
  </button>
)

export default Menu
export { Menu, MenuTrigger }
