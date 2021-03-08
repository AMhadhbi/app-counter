
import React, { Component } from 'react';
import Navbar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
  state ={
    counters : [
      {id :1, value:4},
      {id :2, value:0},
      {id :3, value:0},
      {id :4, value:2},
    ]
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
        c.value = 0;
        return c;
    });
    //this.setState({ counters: counters})
    this.setState({counters});
  };
  handleIncrement = (id) => {
    const counters = [...this.state.counters];
    counters[id-1].value++;
    this.setState({counters});
  };
  handleDecrement = (id) => {
    const counters = [...this.state.counters];
    counters[id-1].value--;
    this.setState({counters});
  };
  handleDelete = (id) => {
    const counters = this.state.counters.filter((item) => item.id !== id)
    this.setState({counters});
  };
  handleTotal = () => {
   const result = this.state.counters.reduce((total, currentValue) => total = total + currentValue.value,0);
   return result;
   /* 
   
   const movies = [...this.state.counters];
   let tot = 0;
   for let movie of movies{
   tot += movie.value ;
   }
   return tot;
   
   */
  };
  render() { 
    return (
      <React.Fragment>
        <Navbar total={this.handleTotal()}/>
        <main className='container'>
          <Counters
            onReset={this.handleReset}
            counters={this.state.counters}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
