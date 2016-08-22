import React = require("react");
import Greeting from "./greeting";
export default class App extends React.Component<{},{}>{
  render() {
    return (
      <div>
        <Greeting />
      </div>
    );
  }
}
