import React, { useState, setState } from "react";

export default class SearchBar extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            searchedWord : '',
            data: [],
            filtered: []
        }
        this.manageSearch = this.manageSearch.bind(this);
        fetch('http://localhost:8000/api/names').then((r)=>r.json()).then((json)=>{
            this.state.data = json;
        })
    }

    manageSearch(event) {
        this.setState({searchedWord: event.target.value}, ()=>{
            this.setState({filtered: this.state.data.filter((el)=> el.toLowerCase().startsWith(this.state.searchedWord.toLowerCase()))})
            if(this.state.searchedWord == '') this.setState({filtered: []});
        })
    }

    getSuggestionFormat(text, index){
        return <p key={index}><span style={{fontWeight: 'bold'}}>{text.substring(0, this.state.searchedWord.length)}</span>{text.substring(this.state.searchedWord.length, text.length)}</p>
    }

    render() {
        return (
            <div className="box">
                <input placeholder="Search for a name" value={this.state.searchedWord} onChange={this.manageSearch}></input>
                {this.state.filtered.length > 0 && 
                <div className="suggestions"> 
                    {this.state.filtered.map((el, index) => this.getSuggestionFormat(el, index))}
                </div>}
            </div>
        );
      }
}
