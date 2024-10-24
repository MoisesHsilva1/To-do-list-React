import { AddTask } from "./AddTaskl"
import { AllTasks } from "./AllTasks"

export function TodoList() {
    return (
        <>
            <header>
                <section>
                    <h1>To-do-List</h1>
                </section>
            </header>
            <nav>
                <section>
                    <AllTasks />
                </section>
            </nav>
            <main>
                <section>
                    <AddTask />
                </section>
            </main>
        </>
    )
}