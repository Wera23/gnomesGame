import React from "react";
import Toolbar from "../components/Toolbar/Toolbar";

class App extends React.Component {
  render() {
    return (
      <>
        <Toolbar />
        {this.props.children}
      </>
    );
  }
}

export default App;
