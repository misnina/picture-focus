import React, { Component } from 'react';

function Nav(props) {
  return(<div class="nav-link" id={props.name}>
      <a href="#!">{props.name}</a>
    </div>);
}

class Navigation extends Component {
  render() {
    return(<div id="navigation-container">
        <Nav name="home"/>
        <Nav name="archive"/>
        <Nav name="shop"/>
        <Nav name="contact"/>
      </div>);
  }
}

export default Navigation