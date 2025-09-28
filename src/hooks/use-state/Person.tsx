import { useState } from 'react';

export function Person () {
	const [person, setPersonInfo] = useState({name: 'Son', age: 30});

	function updatePersonInfo() {
		// setPersonInfo({name: 'New name'}); // Result: Age was undefined

		//To fix
		setPersonInfo(prevPerson => ({...prevPerson, name: 'New name'}));
	}

	const { name, age } = person;

	return (
		<>
			<div>Name: {name}</div>
			<div>Age: {age}</div>
			<button onClick={updatePersonInfo}>
				Update person info
			</button>
		</>
	);
}
