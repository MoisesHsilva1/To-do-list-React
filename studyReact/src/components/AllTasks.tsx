export function AllTasks() {
    function AllTask() {
        window.alert('teste')
    }
    return (
        <>
        <nav>
            <section>
                <button onClick={AllTask}>Todas Tarefas</button>
            </section>
        </nav>
        </>
    );
}