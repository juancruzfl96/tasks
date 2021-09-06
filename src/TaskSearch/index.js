import React from 'react';
import { TaskContext } from '../TaskContext';
import './TaskSearch.css';

function TaskSearch() {
	const { searchValue, setSearchValue } = React.useContext(TaskContext);

	const onSearchValueChange = (event) => {
		console.log(event.target.value);
		setSearchValue(event.target.value);
	};

	return (
		<input
			className='TaskSearch'
			placeholder='SEARCH YOUR TASK'
			value={searchValue}
			onChange={onSearchValueChange}
		/>
	);
}

export default TaskSearch;
