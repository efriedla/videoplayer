import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = { term: "" };
    }
    render(){
        return (
       
           <div className="jumbotron">
                <input onChange={event => this.setState({ term: event.target.value})} />
                <p>Value : {this.state.term}</p>
           </div>
        );
    }
    // onInputChange(event){
    //     console.log(event.target.value);
    // }
};

export default SearchBar