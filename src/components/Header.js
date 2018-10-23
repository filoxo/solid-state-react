// @flow
import * as React from 'react'
import throttle from 'lodash.throttle'
import './Header.css'

type Props = {
  children: React.Node,
}
type State = {
  showHeader: boolean,
}

class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { showHeader: false }
  }
  handleScroll = (): void => {
    const showHeader: boolean = document.scrollingElement
      ? document.scrollingElement.scrollTop > 50
      : true
    this.setState({ showHeader })
  }
  throttledScroll = throttle(this.handleScroll, 100)
  componentDidMount() {
    document.addEventListener('scroll', this.throttledScroll)
  }
  componentWillUnmount() {
    document.removeEventListener('scroll', this.throttledScroll)
  }
  render() {
    return (
      <header className={'Header' + (this.state.showHeader ? '' : ' alt')}>
        {this.props.children}
      </header>
    )
  }
}

export default Header
