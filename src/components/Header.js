import React, { Component } from 'react';

class Header extends Component {
	constructor(props) {
		super(props)
		this.state = {showHeader: false}
		this.handleScroll = this.handleScroll.bind(this)
	}
	handleScroll = this.debounce((event) => {
		let { scrollTop } = event.srcElement.body
		this.setState({showHeader: scrollTop > 50})
	}, 50)
	debounce(callback, wait, context = this) {
		let timeout = null
		let callbackArgs = null
		const later = () => callback.apply(context, callbackArgs)
		return function() {
			callbackArgs = arguments
			clearTimeout(timeout)
			timeout = setTimeout(later, wait)
		}
	}
	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
  render() {
    return (
	    <header id="header" className={this.state.showHeader ? '' : 'alt'}>
		    {this.props.children}
	    </header>
    );
  }
}

export default Header;
