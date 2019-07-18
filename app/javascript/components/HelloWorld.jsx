import React from "react"
import PropTypes from "prop-types"
class HelloWorld extends React.Component {
  render () {
    return (
      <div>
        Greeting: {this.props.name}
      </div>
    );
  }
}

export default HelloWorld
