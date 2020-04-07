
import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
class IndecisionApp extends React.Component {
    render() {
      const title = 'የምግብ ማኖ';
      const subtitle = 'የሚፈልጉትን አየነት ምግብ ይምረጡ!';
      const options = ['የመጀመሪያ ምርጫ', 'ሁለትኛ ምርጫ', 'ሶስተኛ ምርጫ'];
  
      return (
        <div>
          <Me />
          <Header title={title} subtitle={subtitle} />
          <Action />
          <Options options={options} />
          <AddOption />
          <Me />
          <Counter />
          <MyForm />
          
        </div>
      );
    }
  }
  class MyForm extends React.Component {
    render() {
      return (
        <form>
          <h1>Hello</h1>
          <p>Enter your name:</p>
          <input style={{backgroundColor: "lightblue"}}
            type="text"
          />
        </form>
      );
    }
  }
  class Me extends React.Component {
    render() {
      return (
        <div>
          <h1> this is me</h1>
          <h1 style={{backgroundColor: "lightblue"}}>የምግብ ማኖ!</h1>
        </div>
      );
    }
  }
  class Header extends React.Component {
    render() {
      return (
        <div>
          <h1>{this.props.title}</h1>
          <h2>{this.props.subtitle}</h2>
        </div>
      );
    }
  }
  
  class Action extends React.Component {
  handlePick() {
    alert ('እውይ ተጫኖኝ');
  }
  
    render() {
      return (
        <div>
          <button onClick={this.handlePick}>የቱን መምረጥ ይፈልጋሉ? test</button>
        </div>
      );
    }
  }
  
  class Options extends React.Component {
    handleRemoveAll(){
      alert('እርግጠኛ ኖዎት ማጥፋት ይፈልጋሉ? ')
    }
    render() {
      return (
        <div>
        <button onClick={this.handleRemoveAll}>ለማጥፋት</button>
          {
            this.props.options.map((option) => <Option key={option} optionText={option} />)
          }
        </div>
      );
    }
  }
  
  class Option extends React.Component {
    render() {
      return (
        <div>
        *  {this.props.optionText}
        </div>
      );
    }
  }
  
  class AddOption extends React.Component {
    render() {
      return (
        <div>
          AddOption component here
        </div>
      );
    }
  }

  class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.handleAddOne = this.handleAddOne.bind(this);
      this.handleMinusOne = this.handleMinusOne.bind(this);
      this.handleReset = this.handleReset.bind(this);
      this.state = {
        count: 0
      };
    }
    handleAddOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count + 1
        };
      });
    }
    handleMinusOne() {
      this.setState((prevState) => {
        return {
          count: prevState.count - 1
        };
      });
    }
    handleReset() {
      this.setState(() => {
        return {
          count: 0
        };
      });
    }
    render() {
      return (
        <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>reset</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Counter />, document.getElementById('app'));
  
  // let count = 0;
  // const addOne = () => {
  //   count++;
  //   renderCounterApp();
  // };
  // const minusOne = () => {
  //   count--;
  //   renderCounterApp();
  // };
  // const reset = () => {
  //   count = 0;
  //   renderCounterApp();
  // };
  
  // const appRoot = document.getElementById('app');
  
  // const renderCounterApp = () => {
  //   const templateTwo = (
  //     <div>
  //       <h1>Count: {count}</h1>
  //       <button onClick={addOne}>+1</button>
  //       <button onClick={minusOne}>-1</button>
  //       <button onClick={reset}>reset</button>
  //     </div>
  //   );
  
  //   ReactDOM.render(templateTwo, appRoot);
  // };
  
  // renderCounterApp();
  
  ReactDOM.render(<IndecisionApp />, document.getElementById('app'));