import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props){
        super(props)

        this.state = { term: "" };
    }
    render(){
        return (
       
           <div className="search-bar">
                <input onChange={event => this.onInputChange(event.target.value)} />
                <p>Value : {this.state.term}</p>
           </div>
        );
    }
    onInputChange(term){
        // console.log(term.target.value);
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
};

export default SearchBar