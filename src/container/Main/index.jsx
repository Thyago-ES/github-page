import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
import NewTodo from "../../components/NewTodo";
import "./main.css";

const Main = () => {
    const [todos, setTodos] = useState([]);

    const onNewTodo = (value) => {
        setTodos([
            ...todos,
            {
                id: uuidv4(),
                title: value,
                checked: false,
            },
        ]);
    };

    const onToggle = (todo) => {
        setTodos(
            todos.map((obj) =>
                obj.id === todo.id ? { ...obj, checked: !todo.checked } : obj
            )
        );
    };

    const onRemove = (todo) => {
        setTodos(todos.filter((obj) => obj.id !== todo.id));
    };

    return (
        <section id="app" className="container">
            <header>
                <h1 className="title">Todo</h1>
            </header>

            <section className="main">
                <NewTodo onNewTodo={onNewTodo} />

                <ul className="todo-list">
                    {todos.map((todo) => (
                        <li key={todo.id.toString()}>
                            <span
                                className={[
                                    "todo",
                                    todo.checked ? "checked" : "",
                                ].join(" ")}
                                onClick={() => onToggle(todo)}
                            >
                                {todo.title}
                            </span>
                            <button
                                className="remove"
                                type="button"
                                onClick={() => onRemove(todo)}
                            >
                                <MdDelete size={28} />
                            </button>
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default Main;
