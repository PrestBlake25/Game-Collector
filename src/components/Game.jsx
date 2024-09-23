import React from "react";

const Game = (props) => {
    return (
        <div>
            <img src={props.pic} alt="game cover" className="game-image"/>
            <h5>Title: {props.title}</h5>
            <h5>Genre: {props.genre}</h5>
            <a href={props.site}>
            <button>Buy Now!</button>
            </a>
        </div>
    );
}

export default Game;