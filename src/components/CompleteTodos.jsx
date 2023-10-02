import React from "react";

export const CompleteTodos = (props) => {
	const { completeTodos, onClickReturn} = props;
	return (
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
	);
};