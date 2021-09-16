import React from 'react';
import { TaskContext } from '../TaskContext';
import TaskCounter from '../TaskCounter';
import TaskSearch from '../TaskSearch';
import TaskList from '../TaskList';
import TaskItem from '../TaskItem';
import CreateTaskButton from '../CreateTaskButton';
import Modal from '../Modal';
import TaskForm from '../TaskForm';
import Footer from '../Footer';
import './App.css';

function AppUI() {
	const {
		error,
		loading,
		searchedTasks,
		completeTask,
		deleteTask,
		openModal,
		setOpenModal,
	} = React.useContext(TaskContext);

	return (
		<React.Fragment>
			<TaskCounter />
			<TaskSearch />
			<TaskList>
				{error && <p>ERROR</p>}
				{loading && (
					<div className='load'>
						<div className='loading'></div>
					</div>
				)}
				{!loading && !searchedTasks.length && <p>WRITE YOUR FIRST TASK</p>}
				{searchedTasks.map((task, index) => (
					<TaskItem
						id={index}
						key={index}
						text={task.text}
						completed={task.completed}
						onComplete={() => completeTask(task.id)}
						onDelete={() => deleteTask(task.id)}
					/>
				))}
			</TaskList>
			{!!openModal && (
				<Modal>
					<TaskForm />
				</Modal>
			)}

			<CreateTaskButton setOpenModal={setOpenModal} />
			<Footer />
		</React.Fragment>
	);
}

export default AppUI;
