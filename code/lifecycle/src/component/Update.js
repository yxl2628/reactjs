import React from 'react';
import TextComponent from './TextComponent';

class Update extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: 0
        }
    }
    setNewNumber() {
        this.setState({
            data: this.state.data + 1
        })
    }
    render() {
        return (
            <div>
                <button onClick={this.setNewNumber.bind(this)}>点击计数</button>
                <TextComponent myNumber={this.state.data}/>
            </div>
        );
    }
}

export default Update;
