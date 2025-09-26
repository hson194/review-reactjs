import { useState } from 'react';

export function AgeChanging () {

	//REMOVE ME
	console.log('Render');

	const [age, setAge] = useState(30)

	function increaseAge() {
		// setAge(age + 1)

		// setAge(age + 1)

		// setAge(age + 1)

		// //After click, age = 31 despite of multiple setAge
		
		// To fix
		setAge(prev => prev + 1)
		setAge(prev => prev + 1)
		setAge(prev => prev + 1)
		// => Result age = 33
	}

	return (
		<>
			<div>
				My age: {age}
			</div>
			<button onClick={increaseAge}>Increase age</button>
		</>
	);
}
