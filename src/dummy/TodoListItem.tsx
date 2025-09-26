export function TodoListItem (props) { //  (props) <=> ({children, isComplete}) destructuring
	const { children, isComplete } = props

	return (
		<>
			<input type="checkbox" checked={isComplete} />
			<label>{children}</label>
		</>
	)
}
