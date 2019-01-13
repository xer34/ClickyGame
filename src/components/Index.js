import React from "react";
import "./style.css";
import Wrapper from "./Wrapper/index";
import Card from "./Card/index";
import imageData from "../imageData";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      highScore: 0,
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // alert(this.state.clicked)
    this.setState(prevState => {
      if (!this.state.clicked) {
        return {
          score: prevState.score + 1,
          highScore: prevState.highScore + 1,
          clicked: true
        };
      } else
        return {
          score: 0,
          highScore: this.state.score
        };
    });
  }

  render() {
    const imageDataArray = imageData.map(imageData => (
      <Card
        id={imageData.id}
        url={imageData.url}
        onClick={this.handleClick}
        isClicked={imageData.clicked}
      />
    ));

    return (
      <div className="container">
        <nav className="navbar navbar-dark ">
          <h1>ClickyGame!</h1>
          <h4 className="score">Current Score: {this.state.score}</h4>
          <h4 className="score">High Score: {this.state.highScore}</h4>
          <h3>Click an Image to Begin!</h3>
        </nav>
        <br />
        <div className="jumbotron">
          <h2 className="jumboText">Click on an image to earn points</h2>
          <h3 className="jumboText"> but don't click on any more than once!</h3>
        </div>
        <Wrapper>{imageDataArray}</Wrapper>
      </div>
    );
  }
}

export default Index;
