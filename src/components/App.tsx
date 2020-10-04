import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../actions";
import { StoreState } from "../reducers";

const App = () => {
    const todos: Todo[] = useSelector((state: StoreState) => state.todos);
    const dispatch = useDispatch();

    const onButtonClick = (): void => {
        dispatch(fetchTodos());
    };

    const onTodoClick = (id: number): void => {
        dispatch(deleteTodo(id));
    };

    const renderList = (): JSX.Element[] => {
        return todos.map((todo: Todo) => {
            return (
                <div key={todo.id} onClick={() => onTodoClick(todo.id)}>
                    {todo.title}
                </div>
            );
        });
    };

    return (
        <div>
            <button onClick={onButtonClick}>Fetch</button>
            {renderList()}
        </div>
    );
};

export default App;
