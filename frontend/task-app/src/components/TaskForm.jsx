import { useState, useEffect } from "react";
import { TextField, Button, Select, MenuItem } from "@mui/material";

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
        if (!form.titulo) return alert("Título obligatorio");

        onSave(form);
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
            <TextField
                fullWidth
                name="titulo"
                label="Título"
                value={form.titulo}
                onChange={handleChange}
                sx={{ mb: 1 }}
            />

            <TextField
                fullWidth
                name="descripcion"
                label="Descripción"
                value={form.descripcion}
                onChange={handleChange}
                sx={{ mb: 1 }}
            />

            <Select
                fullWidth
                name="estado"
                value={form.estado}
                onChange={handleChange}
                sx={{ mb: 1 }}
            >
                <MenuItem value="pendiente">Pendiente</MenuItem>
                <MenuItem value="en progreso">En progreso</MenuItem>
                <MenuItem value="completada">Completada</MenuItem>
            </Select>

            <Button variant="contained" type="submit">
                {selectedTask ? "Actualizar" : "Guardar"}
            </Button>
        </form>
    );
}