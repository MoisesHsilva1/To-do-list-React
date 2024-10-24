import React, { useState } from "react";
import "./styles/AddTask/style.css";

interface TodoTask {
    id: string;
    text: string;
    completed: boolean;
}

export function AddTask() {
    const [task, setTask] = useState<TodoTask[]>([]);
    const [inputValue, setInputValue] = useState<string>("");
    const [isVisible, setIsVisible] = useState<boolean>(false)

    const addItem = (event: React.FormEvent) => {
        event.preventDefault()
        const newID = crypto.randomUUID();
        const newTodoTask: TodoTask | null = inputValue !== ""
            ? { id: newID, text: inputValue, completed: false }
            : null;
        newTodoTask && setTask(prevTasks => [...prevTasks, newTodoTask]);
        setInputValue("");
    };
    const removeTask = (id: string) => {
        const updatedTasks = task.filter((task) => task.id !== id);
        setTask(updatedTasks);
    };
    const completeTask = (id: string) => {
        const updatedTasks = task.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTask(updatedTasks);
    };
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }
    return (
        <>
            <section>
                <main>
                    <button onClick={toggleVisibility}>
                        {isVisible ? 'Fechar' : 'Adicionar Tarefa'}
                    </button>
                    {isVisible && (
                        <form onSubmit={addItem}>
                            <input
                                className="input-Task"
                                type="text"
                                value={inputValue}
                                onChange={handleChange}
                                placeholder="Digite sua tarefa"
                            />
                            <button type="submit">Adicionar</button>
                        </form>
                    )}
                    <ul>
                        {task.map((task) => (
                            <li key={task.id}>
                                <input
                                    type="checkbox"
                                    checked={task.completed}
                                    onChange={() => completeTask(task.id)}
                                />
                                <span
                                    style={{
                                        textDecoration: task.completed
                                            ? "line-through"
                                            : "none",
                                    }}
                                >
                                    {task.text}
                                </span>
                                <button onClick={() => removeTask(task.id)}>x</button>
                            </li>
                        ))}
                    </ul>
                </main>
            </section>
        </>
    );
}
