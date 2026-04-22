import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import { TaskList } from "./components/TaskList";
import { TaskForm } from "./components/TaskForm";

import { Container, Typography, Select, MenuItem } from "@mui/material";

function App() {
    const [filter, setFilter] = useState("");
    const { tasks, loading, error, createTask, updateTask, deleteTask } = useTasks(filter);
    const [selectedTask, setSelectedTask] = useState(null);

    const handleSave = (task) => {
        if (task.id) {
            updateTask(task.id, task);
        } else {
            createTask(task);
        }
        setSelectedTask(null);
    };

    if (loading) return <Typography>Cargando...</Typography>;
    if (error) return <Typography color="error">{error}</Typography>;

    return (
        <Container maxWidth="sm" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Gestor de Tareas
            </Typography>

            <Select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                renderValue={(selected) => {
                    if (selected === "all") return "Todas";
                    return selected;
                }}
            >
                <MenuItem value="all">Todas</MenuItem>
                <MenuItem value="pendiente">Pendiente</MenuItem>
                <MenuItem value="en progreso">En progreso</MenuItem>
                <MenuItem value="completada">Completada</MenuItem>
            </Select>

            <TaskForm onSave={handleSave} selectedTask={selectedTask} />

            <TaskList
                tasks={tasks}
                onDelete={deleteTask}
                onEdit={setSelectedTask}
            />
        </Container>
    );
}

export default App;