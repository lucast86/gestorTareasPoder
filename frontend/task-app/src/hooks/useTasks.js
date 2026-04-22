import { useEffect, useState } from "react";
import axios from "axios";

const API = "http://localhost:5290/api/tasks";

export function useTasks(filter) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getTasks = async () => {
        setLoading(true);
        try {
            const url = filter ? `${API}?status=${filter}` : API;
            const res = await axios.get(url);
            setTasks(res.data);
        } catch (err) {
            setError("Error al cargar tareas");
        } finally {
            setLoading(false);
        }
    };

    const createTask = async (task) => {
        await axios.post(API, task);
        getTasks();
    };

    const updateTask = async (id, task) => {
        await axios.put(`${API}/${id}`, task);
        getTasks();
    };

    const deleteTask = async (id) => {
        await axios.delete(`${API}/${id}`);
        getTasks();
    };

    useEffect(() => {
        getTasks();
    }, [filter]); // 🔥 clave

    return {
        tasks,
        loading,
        error,
        createTask,
        updateTask,
        deleteTask
    };
}