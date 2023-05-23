// jsxファイルはreact専用のコンポーネントファイルとして使うことができる
import React from "react"

const App = () => {
    return (
        <>
            <h1>test</h1>
            <p>helllo</p>
        </>
    );
};

//　他のファイルでもAppとして呼び出せるようexportする
export default App;