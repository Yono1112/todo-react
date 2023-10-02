import React from "react";

export const IncompleteTodos = (props) => {
	const {incompleteTodos, onClickComplete, onClickDelete} = props;
	return (
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
	);
};