import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class IndestionAPP extends React.Component {
    
    render() {
            const title = 'Indecision';
            const subtitle = 'Put your life in the hand of a computer';
            
        return (
            <div>
                <Header title = {title} subtitle = {subtitle} />
                <Action />
                <Options />
                <Option />
                <AddOption />
                

            
            </div>
        )
    }
}
class Header extends React.Component {
    render() {

        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
             
            </div>
        )
    }
}
class Action extends React.Component {

    render() {

        return (
            <button> What should I do?</button>
        )
    }
}

class Options extends React.Component {

    render() {
    return (

         <div>
            this is Options component 
            <Option />
         </div>
    )
    }
}
class Option extends React.Component{
    render() {
        return (
            <div>
            this is Option!
            </div>
        )

    }

}
class AddOption extends React.Component {
    render() {
        return (
            <div>
                This is AddOption

            </div>
        )
    }
}

ReactDOM.render(<IndestionAPP />, document.getElementById('app'));
