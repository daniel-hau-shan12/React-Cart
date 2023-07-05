import './Help.css';
import React from 'react'

const Help = () => {
  return (
    <div class="form">
      <div class="center">
      <h1>Our Newsletter</h1>
      <form>
        <div class="inputbox">
          <input type="text" required="required" />
          <span>Email</span>
        </div>
        <div class="inputbox">
          <input type="text" required="required" />
          <span>Password</span>
        </div>
        <div class="inputbox">
          <input type="button" value="submit" />
        </div>
      </form>
    </div>
    </div>
  )
}

export default Help;
