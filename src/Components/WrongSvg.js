import React, { Component } from "react";

class WrongSvg extends Component {
  render() {
    return (
      <>
        <div className="flex justify-center scale-animation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-20 w-20"
            fill="#ef4444"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="text-center">
          <p className="font-mono font-semibold text-md tracking-tight">
            WRONG!
          </p>
        </div>
      </>
    );
  }
}

export default WrongSvg;
