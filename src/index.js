import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class Square extends React.Component {
  //Vamos armazenar o valor atual do Square em this.state e alterá-lo quando o Square for clicado.
  constructor(props) {
    super(props); //sempre chama o super ao definir o constructor de uma classe
    this.state = {
      value: null,
    };
  }

  render() {
    return (
      <button 
	  	className="square" 
	  	onClick={() => this.setState({ value: 'X' })}/* apos atualizacao, o {this.state.value} sera X */>
        {this.state.value}
      </button>
    );
  }
}

class Board extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			squares: Array(9).fill(null) //Array(9).fill(null) retorna um array de 9 elementos, cada um com o valor null
		};
	}

  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = "Next player: X";

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
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
