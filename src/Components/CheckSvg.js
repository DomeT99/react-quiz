import React, { Component } from "react";

class BannerAnswer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="flex justify-center scale-animation">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10"
            fill="#4ade80"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <div className="text-center">
          <p className="font-mono font-semibold text-md tracking-tight">
            CORRECT!
          </p>
        </div>
      </>
    );
  }
}

export default BannerAnswer;
