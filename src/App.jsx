// jsxファイルはreact専用のコンポーネントファイルとして使うことができる
import React, { useState } from "react"
import "./styles.css"

export const App = () => {
	const [todoText, setTodoText] = useState('');
	const [incompleteTodos, setIncompleteTodos] = useState([
		'aaa',
		'bbbbb'
	])
	const [completeTodos, setcompleteTodos] = useState([
		'ccc'
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

	return (
		<>
			<div className="input-area">
				<input placeholder="TODO" value={todoText} onChange={onChangeTodoText}/>
				<button onClick={onClickTodoText}>add</button>
			</div>
			<div className="incomplete-area">
				<p className="title">incomplete TODO</p>
				<ul>
					{incompleteTodos.map((todo) => {
						return (
						<div key={todo} className="list-row">
							<li>{todo}</li>
							<button>finish</button>
							<button>delete</button>
						</div>
						)
					})}
				</ul>
			</div>
			<div className="complete-area">
				<p className="title">complete TODO</p>
				<ul>
					{completeTodos.map((todo) => {
						return (
						<div key={todo} className="list-row">
							<li>{todo}</li>
							<button>return</button>
						</div>
						)
					})}
				</ul>
			</div>
		</>
	);
};
