import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
    
/*
class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{}</div>
          <ol>{}</ol>
        </div>
      </div>
    );
  }
}*/

class Attribute {
  constructor(level, pointCost, description) {
    if(level < 1) {
       // throw exception
    }
    this.level = level;
    this.pointCost = pointCost;
    this.description = description;
  }

  get level() { return this.level};
  get pointCost() { return this.pointCost};
  get description() { return this.description};
}

class Attributes {
  constructor(st, dx, iq, ht) {
    this.strength = st;
    this.dexterity = dx;
    this.intelligence = iq;
    this.health = ht;
  }

  get speed() {
    return (this.health.level + this.dexterity.level) / 4.0;
  }
}

class Appearance {
  
}


// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
