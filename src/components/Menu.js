import React, { Component } from 'react';
import Portal from 'react-portal-minimal';
import FocusTrap from 'react-focus-trap';
import './Menu.css';

class Menu extends Component {
	componentDidMount() {
		document.body.classList.add('blur');
	}
	componentWillUnmount() {
		document.body.classList.remove('blur');
	}
	render() {
		const { closePortal, children } = this.props;
		return (
			<Portal closePortal={closePortal}>
				<div className="backdrop">
					<nav>
						<FocusTrap>
							<div className="menu">
								{children}
								<button className="close" type="button" onClick={closePortal}>Close</button>
							</div>
						</FocusTrap>
					</nav>
				</div>
			</Portal>
		);
	}
}

const MenuTrigger = ({onClick}) => <button className="menuBtn" type="button" onClick={onClick}>Menu</button>;

export default Menu;
export {Menu, MenuTrigger};
