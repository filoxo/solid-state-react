import React, { Component } from 'react';
import Portal from 'react-portal-minimal';
import FocusTrap from 'react-focus-trap';
import './MenuNav.css';

class Modal extends Component {
	componentDidMount() {
		document.body.classList.add('blur');
	}
	componentWillUnmount() {
		document.body.classList.remove('blur');
	}
	render() {
		return (
			<FocusTrap>
				<div className="backdrop">
					<nav>
						<div className="menu">
							{this.props.children}
							<button className="close" type="button" onClick={this.props.closePortal}>Close</button>
						</div>
					</nav>
				</div>
			</FocusTrap>
		);
	}
}

class MenuNav extends Component {
	constructor(props) {
		super(props);
		this.state = {showMenu: false}
		this.toggleMenu = this.toggleMenu.bind(this)
	}
	toggleMenu(state) {
		const showMenu = state || false;
		this.setState({showMenu})
	}
  render() {
    return (
    	<span className="menuNav">
		    <button className="menuTrigger" type="button" onClick={() => this.toggleMenu(true)}>Menu</button>
		    {this.state.showMenu &&
		    <Portal>
			    <Modal closePortal={() => this.toggleMenu(false)}>
				    <h2>Menu</h2>
				    <ul className="links" autoFocus>
					    <li><a href="index.html">Home</a></li>
					    <li><a href="generic.html">Generic</a></li>
					    <li><a href="elements.html">Elements</a></li>
					    <li><a href="#">Log In</a></li>
					    <li><a href="#">Sign Up</a></li>
				    </ul>
			    </Modal>
		    </Portal>
		    }
	    </span>
    );
  }
}

export default MenuNav;
