import React from "react";
import ToolBar from "./ToolBar";
import SideBar from "./SideBar";
import Backdrop from "./Backdrop";
import Main from "./Main";
import Footer from "./Footer";
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
        {this.state.isSideBarVisible && (
          <Backdrop onclick={this.onCloseButtonClick} />
        )}

        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
