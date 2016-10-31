import React, { Component } from 'react';

export default class Layout extends Component {
  constructor() {
    super();

  }

  submitForm(e) {
    e.preventDefault();
  }

  render() {

    return (
      <div></div>
      // <div>
      //   <h1>AntGeek</h1>
      //   <form method="POST" action="api/upload">
      //     <input type="file" name="image"/>
      //     <button onClick={this.submitForm}>Upload</button>
      //   </form>
      // </div>
    )
  }
}
