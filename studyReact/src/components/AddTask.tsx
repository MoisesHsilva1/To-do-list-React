export function AddTask() {
    function alert() {
        window.alert('teste')
    }
    return (
        <>
            <nav>
                <section>
                    <button onClick={alert}>Add Task</button>
                </section>
            </nav>
        </>
    )
}