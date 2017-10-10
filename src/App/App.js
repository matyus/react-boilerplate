import app from "./App.css"

import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import classNames from "classnames"

const mapStateToProps = (state, ownProps) => {
  const { foo } = state

  return {
    foo
  }
}

class App extends Component {
  static propTypes = {
    foo: PropTypes.array
  }

  static defaultProps = {
    foo: []
  }

  render() {
    return (
      <div className={classNames(app.root, "foo")}>
        Hello world!
      </div>
    )
  }
}

export default App = connect(mapStateToProps)(App)
