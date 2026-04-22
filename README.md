# Gestor de Tareas

Aplicación web de gestión de tareas desarrollada con:

- Frontend: React.js (Hooks)
- Backend: ASP.NET Core Web API
- Base de datos: SQL Server (script incluido)

## Funcionalidades

- Listado de tareas
- Filtro por estado (pendiente, en progreso, completada)
- Crear tarea
- Editar tarea
- Eliminar tarea

## Cómo ejecutar

### Backend

cd backend/TaskApi
dotnet run

### Frontend

cd frontend/task-app
npm install
npm run dev

## API

http://localhost:5290/api/tasks

## Notas

- La API actualmente usa datos en memoria
- Se incluye script SQL Server para persistencia
- Se implementó arquitectura básica: Controller - Service

## IA utilizada

Se utilizó ChatGPT como asistencia para estructura y desarrollo del proyecto.
