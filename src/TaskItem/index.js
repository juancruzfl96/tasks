import React from 'react';
import './TaskItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faCheck } from '@fortawesome/free-solid-svg-icons';

function TaskItem(props) {
	return (
		<li className='TaskItem'>
			<span
				className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
				onClick={props.onComplete}>
				<FontAwesomeIcon className='check' icon={faCheck} />
			</span>
			<p className={`TaskItem-p ${props.completed && 'TaskItem-p--complete'}`}>
				{props.text}
			</p>
			<span className='Icon Icon-delete' onClick={props.onDelete}>
				<FontAwesomeIcon icon={faTrashAlt} />
			</span>
		</li>
	);
}

export default TaskItem;
