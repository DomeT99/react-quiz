import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";
import ReactLogo from "./Components/ReactLogo";
import ButtonStart from "./Components/ButtonStart";
import { render } from "@testing-library/react";
import CardQuestion from "./Components/CardQuestion";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameBtn: {
        start: "Let's go!",
        trueAnswer: "True",
        wrongAnswer: "False",
      },
      colorBtn: {
        start: "#61DBFB",
      },
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <div className="flex justify-center grid py-10">
          <CardQuestion />
          <ReactLogo />
          <ButtonStart
            colorBtn={this.state.colorBtn.start}
            nameBtn={this.state.nameBtn.start}
          />
        </div>
      </div>
    );
  }
}

export default App;
