import React, { useState } from "react";
import PropTypes from "prop-types";

import "./NewTodo.css";

const NewTodo = ({ onNewTodo }) => {
    const ESCAPE_KEY = 27;
    const ENTER_KEY = 13;
    const SPACE_KEY = 32;

    const [value, setValue] = useState("");

    const erase = () => {
        setValue("");
    };

    const submit = () => {
        if (onNewTodo) {
            onNewTodo(value);
            erase();
        }
    };

    const onChange = (event) => {
        setValue(event.target.value);
    };

    const onKeyDown = (event) => {
        if (!value && event.which === SPACE_KEY) {
            event.preventDefault();
        }

        if (event.which === ENTER_KEY && value) {
            submit();
        } else if (event.which === ESCAPE_KEY) {
            erase();
        }
    };

    return (
        <input
            type="text"
            className="new-todo"
            placeholder="O que precisa ser feito?"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
    );
};

NewTodo.propTypes = {
    onNewTodo: PropTypes.func.isRequired,
};

export default NewTodo;
