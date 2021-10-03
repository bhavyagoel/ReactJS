import React from "react"; 
import styles from "./TodoItem.module.scss";


class TodoItem extends React.Component {

    state = {
        editing: false,
    }

    handleEditing = () =>  {
        console.log("editing");
        this.setState({
            editing: true
        })
    }

    handleUpdateDone = (e) => {
        console.log(e.key);
        if(e.key === "Enter") {
            this.setState({
                editing: false
            })
        }
    }

    render() {
        const completedStyle = {
            fontStyle: "italic",
            color: "#595959",
            textDecoration: "line-through",
            opacity: 0.4
        }

        let viewMode = {} 
        let editMode = {}

        if(this.state.editing) { 
            viewMode.display = "none"
        }else {
            editMode.display = "none"
        }

        const { completed, id, title } = this.props.todo;
        return (
            <li className={styles.item}>
                <div onDoubleClick={this.handleEditing} style={viewMode}>
                    <input type="checkbox" checked={completed}
                        onChange={() => this.props.handleChangeProps(id)}
                        className={styles.checkbox} />
    
                    <button  
                        className={styles.itemButton}
                        onClick={() => this.props.deleteTodoProps(id)} >
                            Delete
                    </button>
                    <span style={completed ? completedStyle : null}>
                        {title}
                    </span>
                </div>
                <input 
                    type="text" 
                    className={styles.textInput} 
                    style={editMode} 
                    value={title}
                    onChange={e => {
                        this.props.setUpdate(e.target.value, id)
                    }}
                    onKeyDown={this.handleUpdateDone}
                />
    
            </li>
        )
    }    
}

// function TodoItem(props) {
//     const completedStyle = {
//         fontStyle: "italic",
//         color: "#595959",
//         textDecoration: "line-through",
//         opacity: 0.4
//     }

//     function handleEditing(e) {
//         console.log("editing");
//     }

//     const { completed, id, title } = props.todo;
//     return (
//         <li className={styles.item}>
//             <div onDoubleClick={handleEditing}>
//                 <input type="checkbox" checked={props.todo.completed}
//                     onChange={() => props.handleChangeProps(id)}
//                     className={styles.checkbox} />

//                 <button  
//                     className={styles.itemButton}
//                     onClick={() => props.deleteTodoProps(id)} >
//                         Delete
//                 </button>
//                 <span style={completed ? completedStyle : null}>
//                     {title}
//                 </span>
//             </div>
//             <input type="text" className={styles.textInput} />

//         </li>
//     )
// }

export default TodoItem;
