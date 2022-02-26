import React, { Component } from "react";

class ButtonStart extends Component {
  render(props) {
    return (
      <div className="flex justify-center py-5">
        <button
          type="button"
          className={`px-4 py-3 bg-[${this.props.colorBtn}] rounded-md text-white outline-none shadow-lg transform active:scale-75 transition-transform`}
        >
          {this.props.nameBtn}
        </button>
      </div>
    );
  }
} /* 61DBFB bg-[${this.props.colorBtn}] bg-[#61DBFB]*/

export default ButtonStart;
