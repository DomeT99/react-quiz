import React, { Component } from "react";

class ReactLogo extends Component {
  state = {
    logoPath:
      "https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png",
    logoDim: 180,
  };
  render() {
    return (
      <>
        <img
          height={this.state.logoDim}
          width={this.state.logoDim}
          src={this.state.logoPath}
          loading="lazy"
          className="animate-bounce"
        />
        <div className="text-center mx-auto py-10">
          <p className="font-mono font-semibold text-sm tracking-tight">
            Are you ready?
          </p>
        </div>
      </>
    );
  }
}

export default ReactLogo;
