import { Card, CardContent, Typography, Button } from "@mui/material";

export function TaskList({ tasks, onDelete, onEdit }) {

    if (!tasks || tasks.length === 0) {
        return <Typography>No hay tareas</Typography>;
    }

    return (
        <>
            {tasks.map(t => (
                <Card key={t.id} sx={{ mb: 2 }}>
                    <CardContent>
                        <Typography variant="h6">{t.titulo}</Typography>
                        <Typography>{t.descripcion}</Typography>
                        <Typography color="text.secondary">{t.estado}</Typography>

                        <Button onClick={() => onEdit(t)}>Editar</Button>
                        <Button color="error" onClick={() => onDelete(t.id)}>
                            Eliminar
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </>
    );
}