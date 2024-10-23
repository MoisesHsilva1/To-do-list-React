import { TodoList } from "../components/TodoList"
import { AddTask } from "../components/AddTask"
import { ContentTask } from "../components/ContentTask"
import { AllTasks } from "../components/AllTasks"
import { ModalTask } from "../components/Modal"

export function Home() {
    return (
        <>
            <TodoList />
            <ModalTask />
            <AddTask />
            < AllTasks />
            <ContentTask /> 
        </>
    )
}