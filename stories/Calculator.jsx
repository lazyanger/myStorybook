import React from 'react';

class Button extends React.Component {  
  handleClick = () => {
  	this.props.onClickFunction(this.props.increment)
  };
        
  render() {
  	return (<button onClick={this.handleClick}>
  	  +{this.props.increment}
  	</button>);
  }
}

const Result = (props) => {
	return (<div>{props.counter}</div>);
};

class Calculator extends React.Component {
	state = {counter: 0};

	clickFunction = (increment) => {
  	this.setState((prevState) => ({
    	counter: prevState.counter + increment
    }));
  };
  
	render() {
  	return (
    	<div>
    	  <Button increment={1} onClickFunction={this.clickFunction} />
        <Button increment={5} onClickFunction={this.clickFunction} />
        <Button increment={10} onClickFunction={this.clickFunction} />
        <Button increment={100} onClickFunction={this.clickFunction} />
        <Result counter={this.state.counter} />
    	</div>
    );
  }
}

export default Calculator;