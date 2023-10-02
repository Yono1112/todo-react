import React from "react";

const style = {
	backgroundColor: '#c1ffff',
	width: '400px',
	height: '30px',
	padding: '8px', /*上下左右の余白*/
	margin: '8px', /*外側に対する余白*/
	borderRadius: '8px', /*角を丸くする*/
}

export const InputTodo = (props) => {
	const { todoText, onChangeTodoText, onClickTodoText, isDisabled} = props;
	return (
		<div style={style}>
			<input disabled={isDisabled} placeholder="TODO" value={todoText} onChange={onChangeTodoText}/>
			<button disabled={isDisabled} onClick={onClickTodoText}>add</button>
		</div>
	);
};