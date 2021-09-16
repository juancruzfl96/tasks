import React from 'react';
import useLocalStorage from './useLocalStorage';

const TaskContext = React.createContext();

function TaskProvider(props) {
	const {
		item: tasks,
		saveItem: saveTasks,
		loading,
		error,
	} = useLocalStorage('TASKS_V1', []);
	const [searchValue, setSearchValue] = React.useState('');
	const [openModal, setOpenModal] = React.useState(false);

	const completedTasks = tasks.filter((task) => !!task.completed).length;
	const totalTasks = tasks.length;

	let searchedTasks = [];

	if (!searchValue.length >= 1) {
		searchedTasks = tasks;
	} else {
		searchedTasks = tasks.filter((task) => {
			const taskText = task.text.toLowerCase();
			const searchText = searchValue.toLowerCase();
			return taskText.includes(searchText);
		});
	}

	const addTask = (text, id) => {
		const newTasks = [...tasks];
		newTasks.push({
			completed: false,
			text,
			id,
		});
		saveTasks(newTasks);
	};

	const completeTask = (id) => {
		const taskIndex = tasks.findIndex((task) => task.id === id);
		const newTasks = [...tasks];
		if (newTasks[taskIndex]) {
			newTasks[taskIndex].completed = true;
		}
		saveTasks(newTasks);
	};

	const deleteTask = (id) => {
		const taskIndex = tasks.findIndex((task) => task.id === id);
		const newTasks = [...tasks];
		newTasks.splice(taskIndex, 1);
		saveTasks(newTasks);
	};

	return (
		<TaskContext.Provider
			value={{
				loading,
				error,
				totalTasks,
				completedTasks,
				searchValue,
				setSearchValue,
				searchedTasks,
				addTask,
				completeTask,
				deleteTask,
				openModal,
				setOpenModal,
			}}>
			{props.children}
		</TaskContext.Provider>
	);
}

export { TaskContext, TaskProvider };
