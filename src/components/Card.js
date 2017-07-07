import React, { Component } from 'react';

export default class Card extends Component {
  render() {
  	const {imgSrc, imgAlt, title, desc, to} = this.props
	  let img = null;
	  if(imgSrc !== undefined) {
		  img = <img src={imgSrc} alt={imgAlt} />
		  if(to !== undefined) {
			  img = <a href={to} className="image">{img}</a>
		  } else {
				img = <div className="image">{img}</div>
		  }
	  }

    return (
	    <article>
		    { img }
		    {
		    	title !== undefined &&
			    <h3 className="major">{title}</h3>
		    }
		    {
		    	desc !== undefined &&
			    <p>{desc}</p>
		    }
		    {
		    	to !== undefined &&
			    <a href={to} className="special">Learn more</a>
		    }
	    </article>
    );
  }
}