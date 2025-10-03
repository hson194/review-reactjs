import { useState } from 'react';

const INIT_ARRAY = ['A', 'B', 'C'];

export function ArrayState () {
	const [ alphabetList, setList ] = useState(INIT_ARRAY);
	const [inputElement, setInputElement] = useState('');

	function removeFirstElement() {
		let newList = alphabetList.slice(1);
		setList(newList);
	}

	function addNewElementToEndArray(el) {
		//====Failed to update state====
		// alphabetList.push(el); //Despite of changing state, component won't rerender
		// setList(alphabetList);

		//====Clone to new Array to fix====
		// let newAlphabetList = alphabetList.slice(0);
		// newAlphabetList.push(el)
		//or
		let newAlphabetList = [...alphabetList, el];
		setList(newAlphabetList);
	}

	function remmoveSpecifyElement(el) {
		let newAlphabetList = alphabetList.filter(value => value !== el);
		setList(newAlphabetList);
	}

	function addNewElementToStartArray(el) {
		let newAlphabetList = [el, ...alphabetList];
		setList(newAlphabetList);
	}

	function clearArray() {
		setList([]);
	}

	function resetArray() {
		setList(INIT_ARRAY);
	}

	return (
		<>
			<div>Array:</div>
			<div>{alphabetList.join(',')}</div>

			<button onClick={removeFirstElement}>Remove first element</button>

			<div style={{padding: '10px', margin: '10px 0', border: 'solid 1px', borderRadius: 10}}>
				<div style={{marginBottom: '10px'}}>
					<input value={inputElement} type="text" onChange={(e) => setInputElement(e.target.value)} />
				</div>

				<button onClick={() => remmoveSpecifyElement(inputElement)}>Remove element</button>

				<button onClick={() => addNewElementToEndArray(inputElement)}>New element to end of Array</button>

				<button onClick={() => addNewElementToStartArray(inputElement)}>New element to start of Array</button>
			</div>

			<div>
				<button onClick={clearArray}>Clear Array</button>
			</div>

			<div onClick={resetArray}>
				<button>Reset Array</button>
			</div>
		</>
	);
}
