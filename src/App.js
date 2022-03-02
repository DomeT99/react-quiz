import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";
import ReactLogo from "./Components/ReactLogo";
import ButtonStart from "./Components/ButtonStart";
import { render } from "@testing-library/react";
import CardQuestion from "./Components/CardQuestion";
import _ from "lodash";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //Button props
      nameBtn: {
        start: "Let's go!",
        trueAnswer: "True",
        wrongAnswer: "False",
      },
      startPress: false,
    };
    /*--------------- */

    //Card
    this.cardProp = {
      questions: [
        {
          id: _.uniqueId("id_"),
          question: "React is considered a framework",
          active: true,
        },
        {
          id: _.uniqueId("id_"),
          question: "React was developed by Facebook",
          active: false,
        },
        {
          id: _.uniqueId("id_"),
          question: "React uses the Virtual DOM",
          active: false,
        },
        {
          id: _.uniqueId("id_"),
          question: "React was born in 2016",
          active: false,
        },

        {
          id: _.uniqueId("id_"),
          question: "React is currently the most popular framework",
          active: false,
        },
      ],
    };
  }
  startQuiz = () => {
    this.setState((prevState) => ({
      startPress: (prevState.startPress = true),
    }));
  };

  render() {
    let section;

    if (this.state.startPress == false) {
      section = (
        <>
          <ReactLogo />
          <div className="flex justify-center py-5">
            <ButtonStart
              onStart={this.startQuiz}
              nameBtn={this.state.nameBtn.start}
            />
          </div>
        </>
      );
    } else {
      _.filter(this.cardProp.questions, (filter) => {
        if (filter.active) {
          section = (
            <>
              <CardQuestion questionCard={filter.question} />
            </>
          );
        }
      });
    }

    return (
      <div className="App">
        <SearchBar />
        <div className="flex justify-center grid py-10">{section}</div>
      </div>
    );
  }
}

export default App;
