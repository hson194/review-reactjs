import { useState } from 'react';

export function InputEvent () {
	const [text, setTextValue] = useState("Hello world");

	return (
		<>
			{/*Controlled Input = Input + onChange*/}
			<input type="text" value={text} onChange={e => setTextValue(e.target.value)}/> 

			{/*Uncontrolled Input*/}
			<input type="text" defaultValue={text} />
		</>
	);
};
