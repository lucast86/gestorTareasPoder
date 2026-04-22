using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/tasks")]
public class TasksController : ControllerBase
{
    private readonly TaskService _service;

    public TasksController(TaskService service)
    {
        _service = service;
    }

    // GET /api/tasks
    [HttpGet]
    public IActionResult GetAll([FromQuery] string? status)
    {
        if (!string.IsNullOrEmpty(status))
            return Ok(_service.GetByStatus(status));

        return Ok(_service.GetAll());
    }

    // GET /api/tasks/1
    [HttpGet("{id}")]
    public IActionResult Get(int id)
    {
        var task = _service.GetById(id);
        if (task == null) return NotFound();

        return Ok(task);
    }

    // POST /api/tasks
    [HttpPost]
    public IActionResult Create(TaskDto dto)
    {
        var task = _service.Create(dto);
        return Created("", task);
    }

    // PUT /api/tasks/1
    [HttpPut("{id}")]
    public IActionResult Update(int id, TaskDto dto)
    {
        _service.Update(id, dto);
        return Ok();
    }

    // DELETE /api/tasks/1
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _service.Delete(id);
        return Ok();
    }
}