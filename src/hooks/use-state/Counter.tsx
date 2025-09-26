import { useState } from 'react';

export function Counter () {
	const [counter, setCounter] = useState(0)

	function increaseCounter() {
		setCounter(prev => prev + 1)
	}

	return (
		<>
			<h1>Counter: {counter}</h1>
			<button onClick={increaseCounter}>Increase</button>
		</>
	);
}