import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

class IndestionAPP extends React.Component {
    render() {
  
        return (
            <div>
                <Header />
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
                <p> This is header</p>
            </div>
        )
    }
}
class Action extends React.Component {

    render() {

        return (
            <button> What should I do</button>
        )
    }
}

class Options extends React.Component {

    render() {
    return (

         <div>
            this is Options component 
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
