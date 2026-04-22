export function TaskList({ tasks, onDelete, onEdit }) {

    if (!tasks || tasks.length === 0) {
        return <p>No hay tareas</p>;
    }

    return (
        <div>
            {tasks.map(t => (
                <div key={t.id} style={{
                    border: "1px solid #ccc",
                    borderRadius: 6,
                    marginBottom: 10,
                    padding: 10
                }}>
                    <h3>{t.titulo}</h3>
                    <p>{t.descripcion}</p>
                    <strong>{t.estado}</strong>
                    <br />

                    <button onClick={() => onEdit(t)}>Editar</button>

                    <button onClick={() => {
                        if (confirm("¿Eliminar tarea?")) {
                            onDelete(t.id);
                        }
                    }}>
                        Eliminar
                    </button>
                </div>
            ))}
        </div>
    );
}