import React, { Component } from 'react';
import './MenuNav.css';

class MenuNav extends Component {
	constructor(props) {
		super(props);
		this.state = {showMenu: false}
		this.toggleMenu = this.toggleMenu.bind(this)
	}
	toggleMenu(state) {
		const showMenu = state || false;
		console.log('showMenu', showMenu)
		this.setState({showMenu})
	}
  render() {
    return (
    	<span className="menuNav">
		    <button className="menuTrigger" type="button" onClick={() => this.toggleMenu(true)}>Menu</button>
		    <nav className={"menu" + (this.state.showMenu ? " visible" : "")}>
			    <div className="inner">
				    <h2>Menu</h2>
				    <ul className="links">
					    <li><a href="index.html">Home</a></li>
					    <li><a href="generic.html">Generic</a></li>
					    <li><a href="elements.html">Elements</a></li>
					    <li><a href="#">Log In</a></li>
					    <li><a href="#">Sign Up</a></li>
				    </ul>
				    <button className="close" type="button" onClick={() => this.toggleMenu(false)}>Close</button>
			    </div>
		    </nav>
	    </span>
    );
  }
}

export default MenuNav;
