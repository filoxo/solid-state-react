import React, { Component } from 'react';
import 'font-awesome/css/font-awesome.css';
import './App.css';
import Page from './components/Page';

class App extends Component {
  render() {
    return (
	    <Page>
		    <header id="header" className="alt">
			    <h1>Solid State</h1>
			    <nav>
				    <a href="#menu">Menu</a>
			    </nav>
		    </header>
	    </Page>
    );
  }
}

export default App;
