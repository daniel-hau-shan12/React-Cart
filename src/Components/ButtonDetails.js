import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class ButtonDetails extends Component {
  render() {
    return (
      <>
        <Link to="/Produced">
          <button  class="btn btn-success">Purchase</button>
        </Link>
      </>
    )
  }
}

export default ButtonDetails

