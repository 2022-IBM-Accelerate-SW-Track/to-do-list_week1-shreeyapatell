import React, { Component } from 'react';
import './About.css'
  
export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
            className="profile_image"
            src = {require('../images/shreeyaimage.png').default}
            alt="Profile Pic"
            ></img>
        </div>
      </div>
      <div className="split right">
        <div className="centered">
          <div className="name_title">Shreeya Patel</div>
          <div className="brief_description">
          Hello, I am a rising sophomore studying Computer Science at Columbia University. I am from Northern Canada and my interests include hiking, reading, and watching Star Wars.
          </div>
        </div>
      </div>
    </div>
    )
  }
}