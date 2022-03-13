import React, { Component } from "react";

class ButtonNext extends Component {
  render(props) {
    return (
      <div className="flex justify-center mt-4 scale-animation">
        <button onClick={this.props.nextQuestion} className={`px-4 h-12 py-3 bg-blueReact rounded-md outline-none shadow-lg transform active:scale-75 transition-transform`}>
          <span className="font-mono font-semibold text-md tracking-tight">
            NEXT
          </span>
        </button>
      </div>
    );
  }
}

export default ButtonNext;
