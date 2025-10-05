import React from 'react';

export default class NameAndAgeClass extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			age: 0,
			name: ''
		};
	}

	render() {
		const {
			age,
			name
		} = this.state;

		return (
			<>
				<div>
					<label htmlFor="name">Name</label>
					<input id="name" value={name} type="text" onChange={(e) => this.setState({name: e.target.value})} />
				</div>

				<div>
					<div>Age</div>
					<div style={{display: 'flex'}}>
						<button onClick={() => this.setState(prev => {
							return {age: prev.age - 1};
						})}>-</button>
						<div>{age}</div>
						<button onClick={() => this.setState(prev => {
							return {age: prev.age + 1};
						})}>+</button>
					</div>
				</div>

				<div>
					My name is {name} and I am {age} years old
				</div>
			</>
		);
	}
}
