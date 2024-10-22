import { TodoList } from "../components/TodoList"
import { AddTask } from "../components/AddTask"
import { ContentTask } from "../components/ContentTask"
import { AllTasks } from "../components/AllTasks"

export function Home() {
    return (
        <>
            <TodoList />
            <AddTask />
            < AllTasks />
            <ContentTask /> 
        </>
    )
}