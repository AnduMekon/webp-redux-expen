import React from 'react';
import ReactDOM from 'react-dom';

import 'normalize.css/normalize.css';
import './styles/styles.scss';



class Car extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0


        };
    }
    handleAdd = () => {
        this.setState((pre) => {
            return {
                count: pre.count + 1
            }
        });
      }
    render () {
        return (
            <div>
            <p>count: {this.state.count}</p>
          
            <button
                type="button"
                onClick={this.handleAdd}>
                Add
            </button>
            </div>
        )
    }
}
ReactDOM.render(<Car />, document.getElementById('app'));