import React, { Component } from 'react';


class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            getOlder: parseInt(this.props.age)
        }
    }
    getOlder = (e) => {
        console.log(this.props);
        this.setState({getOlder: this.state.getOlder + 1})
    }
    render() {
        return (
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.state.getOlder}</p>
                <p>Hair Color: {this.props.hairColor}</p>
                <button onClick={this.getOlder}>get older</button>
            </div>
        )
    }
}

export default PersonCard;