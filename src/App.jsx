// jsxファイルはreact専用のコンポーネントファイルとして使うことができる
import React, { useState } from "react"
import "./styles.css"

export const App = () => {
	const [todoText, setTodoText] = useState('');
	const [incompleteTodos, setIncompleteTodos] = useState([
	])
	const [completeTodos, setcompleteTodos] = useState([
	]);

	const onChangeTodoText = (event) => setTodoText(event.target.value);

	const onClickTodoText = () => {
		if (todoText !== "")
		{
			const newTodos = [...incompleteTodos, todoText];
			setIncompleteTodos(newTodos);
			setTodoText("");
		}
	}

	const onClickDelete = (index) => {
		const newTodos = [...incompleteTodos];
		newTodos.splice(index, 1);
		setIncompleteTodos(newTodos);
	}

	const onClickComplete = (index) => {
		const newIncompleteTodos = [...incompleteTodos];
		newIncompleteTodos.splice(index, 1);

		const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
		setIncompleteTodos(newIncompleteTodos);
		setcompleteTodos(newCompleteTodos);
	}

	const onClickReturn = (index) => {
		const newCompleteTodos = [...completeTodos];
		newCompleteTodos.splice(index, 1);

		const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
		setIncompleteTodos(newIncompleteTodos);
		setcompleteTodos(newCompleteTodos);
	}

	return (
		<>
			<div className="input-area">
				<input placeholder="TODO" value={todoText} onChange={onChangeTodoText}/>
				<button onClick={onClickTodoText}>add</button>
			</div>
			<div className="incomplete-area">
				<p className="title">incomplete TODO</p>
				<ul>
					{incompleteTodos.map((todo, index) => {
						return (
						<div key={todo} className="list-row">
							<li>{todo}</li>
							<button onClick={() => onClickComplete(index)}>finish</button>
							<button onClick={() => onClickDelete(index)}>delete</button>
						</div>
						)
					})}
				</ul>
			</div>
			<div className="complete-area">
				<p className="title">complete TODO</p>
				<ul>
					{completeTodos.map((todo, index) => {
						return (
						<div key={todo} className="list-row">
							<li>{todo}</li>
							<button onClick={() => onClickReturn(index)}>return</button>
						</div>
						)
					})}
				</ul>
			</div>
		</>
	);
};
