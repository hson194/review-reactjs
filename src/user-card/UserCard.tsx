//4. Create a `UserCard` function component that takes in `name`, `phoneNumber`, `age`, and `address` props and has the same HTML as the `user.html` file.

import React from 'react';

import './user.css';
import user from './user.json';

function UserCardFuncComp ({name, phoneNumber, age, address}) {
	return (
		<div className="card">
    <h2 className="name">{name}</h2>
    <div className="body">
      <div className="label">Age:</div>
      <div>{age}</div>
      <div className="label">Phone:</div>
      <div>{phoneNumber}</div>
      <div className="label">Address:</div>
      <div>{address}</div>
    </div>
  </div>
	);
}

class UserCardClassComp extends React.Component {
	render () {
		const {
			name,
			age,
			phoneNumber,
			address
		} = this.props;

		return (
			<div className="card">
		    <h2 className="name">{name}</h2>
		    <div className="body">
		      <div className="label">Age:</div>
		      <div>{age}</div>
		      <div className="label">Phone:</div>
		      <div>{phoneNumber}</div>
		      <div className="label">Address:</div>
		      <div>{address}</div>
		    </div>
		  </div>
		);
	}
}

export function UserCard () {
	const {
		name,
		age,
		phoneNumber,
		address
	} = user;

	return (
		<>
			<UserCardFuncComp name={name} age={age} phoneNumber={phoneNumber} address={address} />

			<UserCardClassComp name={name} age={age} phoneNumber={phoneNumber} address={address} />
		</>
	)
}
