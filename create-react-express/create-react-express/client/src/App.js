
import Header from "./components/header/header"
import React, { Component } from 'react';
import Main from './components/main/main';
import Footer from './components/footer/footer';
import Jumbotron from './components/jumbotron/jumbotron'
import './App.css';
import FriendCard from "./components/friendcard/friendcard";

class App extends Component {
  state = {
    clickedImage: [],
    score: 0,
    topScore: 0,
  };

  render() {
    return (
      <div className="App">
        <Header
          score={this.state.score}
          topScore={this.state.topScore} />
        <Jumbotron />
        <Main />
        <Footer />
       
      </div>
    );
  }
}

export default App;