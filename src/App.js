import React from 'react';

class myComponent extends React.Component {
  componentPlayers() {
    const apiUrl = 'http://localhost:8080/api/v1/players';
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => console.log('This is your data', data));
  }
  render() {
    return <h1>my Component has Mounted, Check the browser 'console' </h1>;
  }
}
export default myComponent;
