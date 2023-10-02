// jsxファイルはreact専用のコンポーネントファイルとして使うことができる
import React, { useState } from "react"
import "./styles.css"
import { InputTodo } from "./components/InputTodo"
import { IncompleteTodos } from "./components/IncompleteTodos"

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
			<InputTodo todoText={todoText} onChangeTodoText={onChangeTodoText} onClickTodoText={onClickTodoText} />
			<IncompleteTodos incompleteTodos={incompleteTodos} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />
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
