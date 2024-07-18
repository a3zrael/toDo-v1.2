using Microsoft.AspNetCore.Mvc;
using ToDoDTOs;
using ToDoInterfaces;

namespace ToDoWebAPI;

[ApiController]
[Route("api/[controller]")]
public class HomeController : ControllerBase
{
    private IToDoBLL _toDoBLL;

    public HomeController(IToDoBLL toDoBLL){
        _toDoBLL = toDoBLL;
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<ToDoItemDTO>> GetById(Guid id){
        try{
            var td = await _toDoBLL.GetById(id);
            return Ok(td);
        }
        catch(Exception ex){
            return BadRequest(ex.Message);
        }
    }

    [HttpGet]
    public async Task<ActionResult<List<ToDoItemDTO>>> GetAll(){
        try{
            var td = await _toDoBLL.GetAll();
            return Ok(td);
        }
        catch(Exception ex){
            return BadRequest(ex.Message);
        }
    }

    [HttpPost]
    public async Task<ActionResult> AddToDo(ToDoAddItemDTO td){
        try{
            await _toDoBLL.AddToDo(td);
            return Ok(td);
        }
        catch (Exception ex){
            return BadRequest(ex.Message);
        }
    }

    [HttpDelete("{id}")]
    public async Task<ActionResult> DeleteToDo(Guid id){
        try{
            await _toDoBLL.DeleteToDo(id);
            return Ok();
        }
        catch(Exception ex){
            return BadRequest(ex.Message);
        }
    }

    [HttpPut("{id}")]
    public async Task<ActionResult> UpdateToDo(Guid id, ToDoAddItemDTO td){
        try{
            await _toDoBLL.UpdateToDo(id, td);
            return Ok(td);
        }
        catch(Exception ex){
            return BadRequest(ex.Message);
        }
    }
}
