import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthImg: 100,
    };
  }

  render() {
    return (
      <nav className="mx-auto flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow-xl">
        <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 pb-5 lg:pb-0">
          <div className="flex items-center flex-shrink-0 text-gray-800 mr-16">
            <span className="font-mono font-semibold text-2xl tracking-tight">
              React Poll
            </span>
          </div>
        </div>
      </nav>
    );
  }
}

export default SearchBar;
