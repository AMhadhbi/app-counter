import React, { Component } from 'react';
import Counter from "./counter";
class Counters extends Component {
    render() { 
        return ( 
            <div>
                <button className='btn btn-info mb-2' onClick={this.props.onReset}>Reset</button>
                {this.props.counters.map((item) => (
                <Counter 
                key={item.id} 
                value={item.value}
                id={item.id}
                onIncrement={this.props.onIncrement}
                onDecrement={this.props.onDecrement}
                onDelete={this.props.onDelete}
                />)
                )}
            </div>
         );
    }
}
 
export default Counters;