import React, { Component } from "react";
import ButtonCard from "./ButtonCard";
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
        <div className={this.props.hiddenCard}>
          <div className="w-80 h-80 rounded-lg border-2 border-blueReact shadow-md shadow-blueReact scale-animation">
            <h1 className="text-center mt-24 text-md font-mono font-semibold text-md tracking-tight">
              {this.props.questionCard}
            </h1>
            <div className="mt-20 flex justify-center space-x-4 h-14">
              <ButtonCard
                colorBtn={this.buttonProp.colorBtn.start}
                nameBtn={this.buttonProp.nameBtn.trueAnswer}
                onChooseAnswer={this.props.trueAnswer}
              />
              <ButtonCard
                colorBtn={this.buttonProp.colorBtn.start}
                nameBtn={this.buttonProp.nameBtn.wrongAnswer}
                onChooseAnswer={this.props.wrongAnswer}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CardQuestion;
