import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            age: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({name: 'Geeks', age: 15})
    }

    render() {
        return (
            <div>
                <p>Имя:{this.state.name}, возраст:{this.state.age}</p>
                <button onClick={this.handleClick}>Нажми на меня</button>
            </div>
        )
    }
}



export default App;