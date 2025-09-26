import { useState } from 'react'

export function NameChangingDefaultValue () {
	function slowFunction() {
		//This is function take time to execute
		
		//REMOVE ME
		console.log('Execute slowFunction')
		
		return "Default name"
	}

	// const [name, setName] = useState(slowFunction()); //slowFucntion will trigger every time of rerendering

	const [name, setName] = useState(slowFunction); //slowFucntion will trigger one time despite of rerendering

	// or
	// const [name, setName] = useState(() => { //slowFucntion will trigger one time despite of rerendering
	// 	//This is function take time to execute
		
	// 	//REMOVE ME
	// 	console.log('Execute slowFunction')
		
	// 	return "Default name"
	// });


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
