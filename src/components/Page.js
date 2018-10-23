import React from 'react'

type Props = {
  children: React.Node,
}

const Page = ({ children }: Props) => <div id="page-wrapper">{children}</div>

export default Page
