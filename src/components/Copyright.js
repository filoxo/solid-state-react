import React from 'react'
import './Copyright.css'

type Props = {
  children: React.Node,
}

const Copyright = ({ children }: Props) => {
  return <small className="Copyright">{children}</small>
}

export default Copyright
