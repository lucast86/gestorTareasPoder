import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5290/api/tasks";

export function useTasks(filter) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getTasks = async () => {
        setLoading(true);
        setError(null);

        try {
            const url =
                filter && filter !== "all"
                    ? `${API}?status=${filter}`
                    : API;

            const res = await axios.get(url);
            setTasks(res.data);
        } catch (err) {
            setError("Error al cargar tareas");
        } finally {
            setLoading(false);
        }
    };

    const createTask = async (task) => {
        try {
            await axios.post(API, task);
            getTasks();
        } catch {
            setError("Error al crear tarea");
        }
    };

    const updateTask = async (id, task) => {
        try {
            await axios.put(`${API}/${id}`, task);
            getTasks();
        } catch {
            setError("Error al actualizar tarea");
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`${API}/${id}`);
            getTasks();
        } catch {
            setError("Error al eliminar tarea");
        }
    };

    useEffect(() => {
        getTasks();
    }, [filter]);

    return {
        tasks,
        loading,
        error,
        createTask,
        updateTask,
        deleteTask
    };
}