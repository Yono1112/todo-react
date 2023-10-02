import React from "react";

export const InputTodo = (props) => {
	const { todoText, onChangeTodoText, onClickTodoText} = props;
	return (
		<div className="input-area">
			<input placeholder="TODO" value={todoText} onChange={onChangeTodoText}/>
			<button onClick={onClickTodoText}>add</button>
		</div>
	);
};