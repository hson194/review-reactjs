import React from 'react';

export default class CounterClass extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counter: 0
		}
	}

	render () {
		const increaseCounter = () => {
			this.setState(prev => {
				return ({
					counter: prev.counter + 1
				});
			})
		}

		return (
			<>
				<h1>Counter: {this.state.counter}</h1>
				<button onClick={increaseCounter}>Increase</button>
			</>
		);
	}
}
