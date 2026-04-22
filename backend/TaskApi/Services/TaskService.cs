using System.Collections.Generic;
using System.Linq;

public class TaskService
{
    private List<TaskItem> tasks = new List<TaskItem>
    {
        new TaskItem { Id = 1, Titulo = "Tarea 1", Descripcion = "Desc 1", Estado = "pendiente", IdUsuario = 1 },
        new TaskItem { Id = 2, Titulo = "Tarea 2", Descripcion = "Desc 2", Estado = "completada", IdUsuario = 1 }
    };

    public List<TaskItem> GetAll() => tasks;

    public List<TaskItem> GetByStatus(string status) =>
        tasks.Where(t => t.Estado == status).ToList();

    public TaskItem GetById(int id) =>
        tasks.FirstOrDefault(t => t.Id == id);

    public TaskItem Create(TaskDto dto)
    {
        var task = new TaskItem
        {
            Id = tasks.Count + 1,
            Titulo = dto.Titulo,
            Descripcion = dto.Descripcion,
            Estado = dto.Estado,
            IdUsuario = dto.IdUsuario
        };

        tasks.Add(task);
        return task;
    }

    public void Update(int id, TaskDto dto)
    {
        var task = GetById(id);
        if (task == null) return;

        task.Titulo = dto.Titulo;
        task.Descripcion = dto.Descripcion;
        task.Estado = dto.Estado;
    }

    public void Delete(int id)
    {
        var task = GetById(id);
        if (task != null) tasks.Remove(task);
    }
}