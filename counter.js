class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : this.props.counter //Counter state. 
    }
    this.defaultCounter = 0; //Value at Reset.
  }
    toIncr = () => { //Method to increment the counter by 1.
      if (this.state.counter < 50){ //Maximum check. 
      this.setState({counter : this.state.counter + 1})
      }
    }
  
    toDecr = () => { //Method to decrement the counter by 1.
      if (this.state.counter > -50){ //Minimum check. 
        this.setState({counter : this.state.counter - 1})
      }
    }
 
  toRnd = () => {//Method for randomizing the counter.
    let randomNumber = Math.floor(Math.random() * 101) - 50;  //Get a random number from -50 to 50.
    this.setState({
      counter : randomNumber
    })
  }
  
  toReset = () => { //Method to reset the counter.
    this.setState({
      counter : this.defaultCounter
    })
  }
  
  render() {
    return (
      <div class="app">
        <div class="counter">{this.state.counter}</div>
        <div class="controls">
          <button onClick={this.toIncr}>INC</button>
          <button onClick={this.toDecr}>DEC</button>
          <button onClick={this.toRnd}>RND</button>
          <button onClick={this.toReset}>RESET</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App counter={0}/>, document.getElementById('app'));