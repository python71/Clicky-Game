import React, {Component} from "react"
import Employees from "../../api/characters"
import FriendCard from "../friendcard/friendcard"
import Header from "../header/header"
import Jumbotron from '../jumbotron/jumbotron'
import "./main.css";



class Main extends Component {
    state = {
        chars: [],
        score: 0,
        topScore: 0
    }
    
    handleGoodGuess = newData => {
        const {topScore, score } = this.state;
        const newScore =score + 1
        const newTopScore = Math.max(newScore, topScore);
        newData.clicked = true;
        console.log(score)
        this.setState({
            characters: this.shuffleData(newData),
            score: newScore,
            topScore: newTopScore
        })
    }

    handleWrongGuess = data => {
        this.setState({chars: this.resetChars(data),
        score:0
    })
    }

    resetChars = chars => {
        const resetChars = chars.map(item => ({ ...item, clicked: false}));
        return this.shuffleData(resetChars);
    }


    componentWillMount(){
        this.setState({chars: Employees})
    }

    shuffleData = data => {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    };

    handleCardClick = id => {
        let guessedCorrectly = false;
        const newData = this.state.chars.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessedCorrectly = true;
                }
            }
            // guessedCorrectly = true;
            console.log(newItem.clicked)
            return newItem;
        });
        guessedCorrectly ? this.handleGoodGuess(newData) : this.handleWrongGuess(newData);
        console.log(guessedCorrectly)
    }

    render() {
        return (
        <div>
        <Header
            score={this.state.score}
            topScore={this.state.topScore}
        />
        <Jumbotron />   
        <div className="container">
            <h1>Home</h1>
            {this.state.chars.map((person, i) =>(
                <FriendCard 
                    img={person.img} 
                    id={person.id}
                    key={i}
                    handleClick={this.handleCardClick}>
                </FriendCard>
            ))}
  
        
        </div>
        </div> 
         ) }
    }


export default Main;