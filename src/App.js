import React, { Component } from "react";
import SearchBar from "./Components/SearchBar";
import ReactLogo from "./Components/ReactLogo";
import ButtonStart from "./Components/ButtonStart";
import CheckSvg from "./Components/CheckSvg";
import WrongSvg from "./Components/WrongSvg";
import ButtonNext from "./Components/ButtonNext";
import SocialMediaBar from "./Components/SocialMediaBar";
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
      svgCheck: null,
      hiddenClass: "hidden",
      hiddenBar: "hidden",
      hiddenCard: "block",
      disabled: "opacity: .4",
    };
    /*--------------- */
    //Card
    this.cardProp = {
      questions: [
        {
          id: 0,
          question: "React is considered a framework",
          active: true,
          answer: false,
        },
      ],
    };
  }
  //FUNZIONI
  startQuiz = () => {
    this.setState((prevState) => ({
      startPress: (prevState.startPress = true),
    }));
  };
  /*------------------------*/
  trueChoose = () => {
    let choose = true;
    if (this.cardProp.answer == choose) {
      this.setState({
        svgCheck: (this.state.svgCheck = true),
        hiddenClass: (this.state.hiddenClass = "block"),
        hiddenCard: (this.state.hiddenCard = "hidden"),
      });
    } else {
      this.setState({
        svgCheck: (this.state.svgCheck = false),
        hiddenClass: (this.state.hiddenClass = "block"),
        hiddenCard: (this.state.hiddenCard = "hidden"),
      });
    }
  };
  /*------------------------*/
  wrongChoose = () => {
    let choose = false;
    if (this.cardProp.answer == choose) {
      this.setState({
        svgCheck: (this.state.svgCheck = false),
        hiddenClass: (this.state.hiddenClass = "block"),
        hiddenCard: (this.state.hiddenCard = "hidden"),
      });
    } else {
      this.setState({
        svgCheck: (this.state.svgCheck = true),
        hiddenClass: (this.state.hiddenClass = "block"),
        hiddenCard: (this.state.hiddenCard = "hidden"),
      });
    }
  };
  /*-------------------------*/
  nextQuestion = () => {
    this.setState({
      hiddenClass: (this.state.hiddenClass = "hidden"),
      hiddenBar: (this.state.hiddenBar = "block"),
    });
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
          if (this.state.svgCheck) {
            section = (
              <>
                <CardQuestion
                  wrongAnswer={this.wrongChoose}
                  trueAnswer={this.trueChoose}
                  questionCard={filter.question}
                  hiddenCard={this.state.hiddenCard}
                />
                <br />
                <div id="container-check" className={this.state.hiddenClass}>
                  <CheckSvg />
                  <ButtonNext nextQuestion={this.nextQuestion} />
                </div>
                <SocialMediaBar hiddenBar={this.state.hiddenBar} />
              </>
            );
          } else {
            section = (
              <>
                <CardQuestion
                  wrongAnswer={this.wrongChoose}
                  trueAnswer={this.trueChoose}
                  questionCard={filter.question}
                  hiddenCard={this.state.hiddenCard}
                />
                <br />
                <div id="container-wrong" className={this.state.hiddenClass}>
                  <WrongSvg />
                  <ButtonNext nextQuestion={this.nextQuestion} />
                </div>
                <SocialMediaBar hiddenBar={this.state.hiddenBar} />
              </>
            );
          }
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
