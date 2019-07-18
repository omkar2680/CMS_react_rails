import React from "react"
class HelloWorld extends React.Component {
  render () {
    return (
      <div>
        Greeting : {this.props.greeting}
      </div>
    );
  }
}

export default HelloWorld
