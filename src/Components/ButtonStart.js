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
          className={`px-4 h-14 py-3 bg-[${this.props.colorBtn}] rounded-md text-white outline-none shadow-lg transform active:scale-75 transition-transform`}
        >
          {this.props.nameBtn}
        </button>
      </>
    );
  }
} /* 61DBFB bg-[${this.props.colorBtn}] bg-[#61DBFB]*/

export default ButtonStart;
