import { useState } from 'react';

function ChildComp() {
	const [text, setText] = useState('abc');

	return (
		<>
			<div>Hey, this is child component</div>
			<input name="input text" value={text} onChange={(e) => setText(e.target.value)} />
		</>
	);
}

function ParentComp() {
	const [counter, setCounter] = useState(0);
	return(
		<>
			<div>Hi, this is parent component</div>
			<div>{counter}</div>
			<button onClick={() => setCounter(prev => prev + 1)}>Counter</button>

			<div style={{marginTop: '10px', padding: '10px', border:'solid 1px'}}>
				<ChildComp />
			</div>
		</>
	);
}

export function VirtualDOMExplaination() {
	return (
		<>
			<ParentComp />
		</>
	);
}
