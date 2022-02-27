import React, { Component } from "react";
import ButtonStart from "./ButtonStart";
import _ from "lodash";

class CardQuestion extends Component {
  constructor(props) {
    super(props);
    this.buttonProp = {
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
      <>
        <div className="w-96 h-80 rounded-lg border-2 border-blueReact shadow-md shadow-blueReact scale-animation">
          <h1 className="text-center mt-24 text-lg font-mono font-semibold text-md tracking-tight">
            {this.props.questionCard}
          </h1>
          <div className="mt-20 flex justify-center space-x-4 h-14">
            <ButtonStart
              colorBtn={this.buttonProp.colorBtn.start}
              nameBtn={this.buttonProp.nameBtn.trueAnswer}
            />
            <ButtonStart
              colorBtn={this.buttonProp.colorBtn.start}
              nameBtn={this.buttonProp.nameBtn.wrongAnswer}
            />
          </div>
        </div>
      </>
    );
  }
}

export default CardQuestion;
