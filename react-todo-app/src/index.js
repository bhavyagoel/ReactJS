
import React from "react"
import ReactDOM from "react-dom"
import TodoContainer from "./components/TodoContainer"

console.log(TodoContainer);
ReactDOM.render(
    <React.StrictMode>
        <TodoContainer/>
    </React.StrictMode>
    ,document.getElementById("root"));