import React, { Component } from "react";

class ReactLogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoPath:
        "https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png",
      logoDim: 180,
    };
  }
  render() {
    return (
      <>
        <div className="flex justify-center">
          <img
            height={this.state.logoDim}
            width={this.state.logoDim}
            src={this.state.logoPath}
            loading="lazy"
            className="animate-spin-slow"
          />
        </div>
        <div className="text-center mx-auto py-10">
          <p className="font-mono font-semibold text-md tracking-tight">
            Hey you!
            <br />I have a question for you
          </p>
        </div>
      </>
    );
  }
}

export default ReactLogo;
