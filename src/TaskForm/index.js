import React from 'react';
import { v4 } from 'uuid';
import { TaskContext } from '../TaskContext';
import './Form.css';

function TaskForm() {
	const [newTaskValue, setNewTaskValue] = React.useState('');

	const { addTask, setOpenModal } = React.useContext(TaskContext);

	const onChange = (event) => {
		setNewTaskValue(event.target.value);
	};

	const onCancel = () => {
		setOpenModal(false);
	};

	const onSubmit = (event) => {
		event.preventDefault();
		addTask(newTaskValue, v4());
		setOpenModal(false);
	};

	return (
		<form className='Form' onSubmit={onSubmit}>
			<textarea
				value={newTaskValue}
				onChange={onChange}
				placeholder='Write your new task'
			/>
			<div className='Button'>
				<button className='Cancel' type='button' onClick={onCancel}>
					Cancel
				</button>
				<button className='Add' type='submit'>
					Add
				</button>
			</div>
		</form>
	);
}

export default TaskForm;
