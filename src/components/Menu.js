import React, { Component } from 'react'
import Modal from 'react-modal'

import FocusTrap from 'react-focus-trap'
import './Menu.css'

Modal.setAppElement('#root')

class Menu extends Component {
  componentDidUpdate() {
    if (this.props.showMenu) {
      document.body.classList.add('blur')
    } else {
      document.body.classList.remove('blur')
    }
  }
  render() {
    const { showMenu, closePortal, children } = this.props
    return (
      <Modal
        isOpen={showMenu}
        onRequestClose={this.closePortal}
        className="Modal"
        overlayClassName="backdrop"
      >
        <nav>
          <FocusTrap>
            <div className="menu">
              {children}
              <button className="close" type="button" onClick={closePortal}>
                Close
              </button>
            </div>
          </FocusTrap>
        </nav>
      </Modal>
    )
  }
}

const MenuTrigger = ({ onClick }) => (
  <button className="menuBtn" type="button" onClick={onClick}>
    Menu
  </button>
)

export default Menu
export { Menu, MenuTrigger }
