import React, { Component } from "react";

class ButtonStart extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <button
          type="button"
          className={`px-4 h-14 py-3 bg-blueReact rounded-md outline-none shadow-lg transform active:scale-75 transition-transform`}
        >
          {this.props.nameBtn}
        </button>
      </>
    );
  }
}

export default ButtonStart;
