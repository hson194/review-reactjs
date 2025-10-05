import { useState } from 'react';

export function NameAndAge() {
	const [name, setName] = useState('');
	const [age, setAge] = useState(0);

	return (
		<>
			<div>
				<label htmlFor="name">Name</label>
				<input id="name" value={name} type="text" onChange={(e) => setName(e.target.value)} />
			</div>

			<div>
				<div>Age</div>
				<div style={{display: 'flex'}}>
					<button onClick={() => setAge(prevAge => prevAge - 1)}>-</button>
					<div>{age}</div>
					<button onClick={() => setAge(prevAge => prevAge + 1)}>+</button>
				</div>
			</div>

			<div>
				My name is {name} and I am {age} years old
			</div>
		</>
	);
}
