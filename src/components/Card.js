// @flow
import * as React from 'react'
import './Card.css'

type Props = {
  imgSrc: ?string,
  imgAlt: ?string,
  title: ?string,
  desc: ?string,
  to: ?string,
}
type State = {}

export default class Card extends React.Component<Props, State> {
  render() {
    const { imgSrc, imgAlt, title, desc, to } = this.props
    let img = null
    if (imgSrc) {
      if (!imgAlt)
        console.warn(
          '<Card/>: Provide an imgAlt prop in addition to imgSrc for improved accessibility.'
        )
      const imgEl = <img src={imgSrc} alt={imgAlt} />
      img = to ? (
        <a href={to} className="image">
          {imgEl}
        </a>
      ) : (
        <div className="image">{imgEl}</div>
      )
    }

    return (
      <article className="Card">
        {img}
        <div className="CardContent">
          {title && <h3 className="major">{title}</h3>}
          {desc && <p>{desc}</p>}
          {to && (
            <a href={to} className="special">
              Learn more
            </a>
          )}
        </div>
      </article>
    )
  }
}
