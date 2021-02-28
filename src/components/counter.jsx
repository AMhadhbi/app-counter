import React, { Component } from 'react';
class Counter extends Component {
    render() { 
        return ( 
            <div className="row">
                <div className="col-1">
                    <h3>
                        <span className="badge badge-warning ">Zero</span> 
                    </h3>
                </div>
                <div className="col">
                    <button className="btn btn-secondary"><i className="fa fa-plus" aria-hidden="true"></i></button>
                    <button className="btn btn-secondary mr-2 ml-2"><i className="fa fa-minus" aria-hidden="true"></i></button>
                    <button className="btn btn-danger"><i className="fa fa-trash" aria-hidden="true"></i></button>
                </div>
            </div>
         );
    }
}
 
export default Counter;