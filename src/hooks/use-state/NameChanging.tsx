import { useState } from 'react'

export function NameChanging () {
	// const nameStates = useState("Default name");
	// const name = nameStates[0];
	// const setName = nameStates[1];

	const [name, setName] = useState("Default name");

	function changeName() {
		setName("New name")
	}

	return (
		<>
			<h1>Hi</h1> <span>{name}</span>
			<button onClick={changeName}>Change name</button>
		</>
	);
}
