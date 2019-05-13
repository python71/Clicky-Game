import React, {Component} from "react"
import Employees from "../../api/characters"
import FriendCard from "../friendcard/friendcard"

import "./main.css";



class Main extends Component {
    state = {
        chars: [],
        // guessed: 0
    }
    
    componentWillMount(){
        this.setState({chars: Employees})
    }

    handleCardClick() {
        console.log("Ya Got Meh");
    }

    render() {
        return (
        <div className="container">
            <h1>Home</h1>
            {this.state.chars.map((person, i) =>(
                <FriendCard img={person.img} key={i} handleClick={this.handleCardClick}></FriendCard>
                // <p>{person.name}</p>
            ))}
  
        
        </div>
        
         ) }
    }


export default Main;