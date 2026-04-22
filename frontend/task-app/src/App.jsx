import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

function App() {
    
    const [selectedTask, setSelectedTask] = useState(null);
    const [filter, setFilter] = useState("");
    const { tasks, loading, error, createTask, updateTask, deleteTask } = useTasks(filter);
    
    const handleSave = (task) => {
        if (task.id) {
            updateTask(task.id, task);
        } else {
            createTask(task);
        }
        setSelectedTask(null);
    };

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div style={{ padding: 20, maxWidth: 600 }}>
            <h1>Gestor de Tareas</h1>

            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="">Todas</option>
                <option value="pendiente">Pendiente</option>
                <option value="en progreso">En progreso</option>
                <option value="completada">Completada</option>
            </select>

            <TaskForm onSave={handleSave} selectedTask={selectedTask} />

            {tasks.length === 0 && <p>No hay tareas</p>}

            <TaskList
                tasks={tasks}
                onDelete={deleteTask}
                onEdit={setSelectedTask}
            />
        </div>
    );
}

export default App;