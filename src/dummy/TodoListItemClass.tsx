import React from 'react'

class TodoListItemClass extends React.Component {
	render() {
		const { isComplete, children } = this.props;

		return (
			<>
				<input type="checkbox" checked={isComplete} />
				<label>{children}</label>
			</>
		)
	}
}

export default TodoListItemClass;
