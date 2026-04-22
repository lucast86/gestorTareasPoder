import { useState, useEffect } from "react";

export function TaskForm({ onSave, selectedTask }) {
    const [form, setForm] = useState({
        titulo: "",
        descripcion: "",
        estado: "pendiente",
        idUsuario: 1
    });

    useEffect(() => {
        if (selectedTask) {
            setForm(selectedTask);
        } else {
            setForm({
                titulo: "",
                descripcion: "",
                estado: "pendiente",
                idUsuario: 1
            });
        }
    }, [selectedTask]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.titulo) {
            alert("El título es obligatorio");
            return;
        }

        onSave(form);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h3>{selectedTask ? "Editar tarea" : "Nueva tarea"}</h3>

            <input
                name="titulo"
                placeholder="Título"
                value={form.titulo}
                onChange={handleChange}
            />

            <input
                name="descripcion"
                placeholder="Descripción"
                value={form.descripcion}
                onChange={handleChange}
            />

            <select
                name="estado"
                value={form.estado}
                onChange={handleChange}
            >
                <option value="pendiente">Pendiente</option>
                <option value="en progreso">En progreso</option>
                <option value="completada">Completada</option>
            </select>

            <button type="submit">
                {selectedTask ? "Actualizar" : "Guardar"}
            </button>
        </form>
    );
}