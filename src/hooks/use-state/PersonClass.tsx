import React from 'react';

export default class PersonClass extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Son',
			age: 30
		}
	}

	render() {

		const {
			name,
			age
		} = this.state;

		const updatePersonInfo = () => {
			this.setState({name: 'New name'}) //Just update name into state -> different to useState in Function component
		}

		return (
			<>
				<div>Name: {name}</div>
				<div>Age: {age}</div>
				<button onClick={updatePersonInfo}>
					Update person info
				</button>
			</>
		);
	};

};
