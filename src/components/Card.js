// @flow
import * as React from 'react'
import './Card.css'

type Props = {
  imgSrc: string,
  imgAlt: string,
  title: string,
  desc: string,
  to: string,
}
type State = {}

export default class Card extends React.Component<Props, State> {
  render() {
    const { imgSrc, imgAlt, title, desc, to } = this.props
    let img = null
    if (imgSrc !== undefined) {
      img = <img src={imgSrc} alt={imgAlt} />
      if (to !== undefined) {
        img = (
          <a href={to} className="image">
            {img}
          </a>
        )
      } else {
        img = <div className="image">{img}</div>
      }
    }

    return (
      <article className="Card">
        {img}
        <div className="CardContent">
          {title !== undefined && <h3 className="major">{title}</h3>}
          {desc !== undefined && <p>{desc}</p>}
          {to !== undefined && (
            <a href={to} className="special">
              Learn more
            </a>
          )}
        </div>
      </article>
    )
  }
}
