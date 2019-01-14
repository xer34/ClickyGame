import React from "react";
import "./style.css";
import Wrapper from "../Wrapper/index";
import Card from "../Card/index";
import imageData from "../../imageData";

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      highScore: 0,
      clicked: []
    };
    this.handleClick = this.handleClick.bind(this);
  }


  // Fisher Yates Shuffle --------- //
  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  // ------------------------------ //
    
  resetGame() {
    this.shuffle(imageData)
    this.setState({
      score: 0,
      clicked: []
    });
  }

    // ------------------------------ //

  handleClick(id) {
    if (this.state.clicked.indexOf(id) === -1) {
      this.shuffle(imageData)
      this.setState(prevState => {
        return {
          score: prevState.score + 1,
          highScore: prevState.score + 1,
          clicked: this.state.clicked.concat(id)
        };
      });
    } else {
      alert("Sorry, you lose!")
      this.resetGame();
      this.setState(() => {
        return {
          score: 0,
          highScore: this.state.score,
          clicked: []
        };
      });
    }
  }

    // ------------------------------ //

  render() {
    const imageDataArray = imageData.map(imageData => (
      <Card
        key={imageData.id}
        url={imageData.url}
        onClick={this.handleClick}
        id={imageData.id}
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
