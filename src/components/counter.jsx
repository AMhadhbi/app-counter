import React, { Component } from 'react';
class Counter extends Component {
    render() { 
        return ( 
            <div className="row">
                <div className="col-1">
                    <h3>
                        <span className={this.getBadgetClass(this.props.value)}>{this.getValueFormat(this.props.value)}</span> 
                    </h3>
                </div>
                <div className="col">
                    <button className="btn btn-secondary btn-sm" onClick ={(e) => this.props.onIncrement(this.props.id)}>
                        <i className="fa fa-plus" aria-hidden="true">
                    </i>
                    </button>
                    <button className="btn btn-secondary btn-sm mr-2 ml-2" 
                            onClick = {(e) => this.props.onDecrement(this.props.id)}
                            disabled ={!(this.props.value)? true : false}>
                                <i className="fa fa-minus" aria-hidden="true"></i></button>
                    <button className="btn btn-danger btn-sm" onClick= { (e) => this.props}><i className="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            </div>
         );
    }
    getBadgetClass(value){
        return (value) ? "badge badge-primary" : "badge badge-warning";
    }
    getValueFormat(value){
        return (value) ? value : "Zero";
    }
}
 
export default Counter;