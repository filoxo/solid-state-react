// @flow
import * as React from 'react'
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
    this.handleScroll = this.handleScroll.bind(this)
  }
  handleScroll = this.throttle(event => {
    let { scrollTop } = event.srcElement.body
    this.setState({ showHeader: scrollTop > 50 })
  }, 100)
  // TODO: find better typings for context, callbackArgs
  throttle(callback: Function, wait: number, context: any = this) {
    let timeout = null
    let callbackArgs: any = null
    const later = () => {
      callback.apply(context, callbackArgs)
      timeout = null
    }
    return function() {
      if (!timeout) {
        callbackArgs = arguments
        timeout = setTimeout(later, wait)
      }
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
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
