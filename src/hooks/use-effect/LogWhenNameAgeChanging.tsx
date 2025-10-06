import { useState, useEffect } from 'react';

export function LogWhenNameAgeChanging() {
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);

	useEffect(() => {
		console.log('Name change', name);
		console.log('Age change', age);
	}, [name, age]);

	return (
		<>
			<div>
				<label htmlFor="name">Name</label>
				<input id="name" value={name} type="text" onChange={(e) => setName(e.target.value)} />
			</div>

			<div>
				<div>Age</div>
				<div style={{display: 'flex'}}>
					<button onClick={() => setAge(preAge => preAge - 1)}>Decrease</button>
					<div style={{margin: '10px'}}>{age}</div>
					<button onClick={() => setAge(preAge => preAge + 1)}>Increase</button>
				</div>
			</div>
		</>
	);
}
