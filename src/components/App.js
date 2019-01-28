import React from "react";
import ToolBar from "./ToolBar";
import SideBar from "./SideBar";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faBars, faTimes);

class App extends React.Component {
  state = {
    isSideBarVisible: false
  };

  onHamBurgerClick = () => {
    this.setState(prev => {
      return {
        isSideBarVisible: !prev.isSideBarVisible
      };
    });
  };

  onCloseButtonClick = () => {
    this.setState({
      isSideBarVisible: false
    });
  };
  render() {
    return (
      <div>
        <ToolBar onHamClick={this.onHamBurgerClick} />
        <SideBar
          show={this.state.isSideBarVisible}
          onCloseButtonClick={this.onCloseButtonClick}
        />
      </div>
    );
  }
}

export default App;