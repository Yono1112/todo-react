// jsxファイルはreact専用のコンポーネントファイルとして使うことができる
import React from "react"
import "./styles.css"

export const App = () => {
	return (
		<>
			<div className="input-area">
				<input placeholder="TODO"/>
				<button>add</button>
			</div>
			<div className="incomplete-area">
				<p className="title">incomplete TODO</p>
				<ul>
					<div className="list-row">
						<li>aaaaaa</li>
						<button>finish</button>
						<button>delete</button>
					</div>
				</ul>
			</div>
			<div className="complete-area">
				<p className="title">complete TODO</p>
				<ul>
					<div className="list-row">
						<li>bbbbbb</li>
						<button>return</button>
					</div>
				</ul>
			</div>
		</>
	);
};
