using AutoMapper;
using ToDoInterfaces;
using ToDoInterfacesDAL;
using ToDoDTOs;
using System.Runtime.Intrinsics.Arm;

namespace ToDoApplication;

public class ToDoBusinessLogic : IToDoBLL
{
     private IToDoDAO toDoDAO;
     private Mapper _toDoItem;
     private Mapper _toDoAddItem;

     public ToDoBusinessLogic(IToDoDAO context){
        toDoDAO = context;

        var toDoItemMapping = new MapperConfiguration(cfg => cfg.CreateMap<ToDo, ToDoItemDTO>().ReverseMap());
        _toDoItem = new Mapper(toDoItemMapping);

        var toDoAddItemMapping = new MapperConfiguration(cfg => cfg.CreateMap<ToDo, ToDoAddItemDTO>().ReverseMap());    
        _toDoAddItem = new Mapper(toDoAddItemMapping);
     }

     public async Task<List<ToDoItemDTO>> GetAll(){
        try {
            var td = await toDoDAO.GetAll();
            var tdDTO = _toDoItem.Map<List<ToDo>, List<ToDoItemDTO>>(td);
            return tdDTO;
        }
        catch(Exception ex){
            throw new Exception(ex.Message);
        }
     }

     public async Task<ToDoItemDTO> GetById(Guid id){
        try {
            var td = await toDoDAO.GetById(id);
            var tdDTO = _toDoItem.Map<ToDo, ToDoItemDTO>(td);
            return tdDTO;
        }
        catch (Exception ex){
            throw new Exception(ex.Message);
        }
     }

     public async Task AddToDo(ToDoAddItemDTO td){
        try{
            var tdAddDTO = _toDoAddItem.Map<ToDoAddItemDTO, ToDo>(td);
            await toDoDAO.AddToDo(tdAddDTO);           
        }
        catch (Exception ex){
            throw new Exception(ex.Message);
        }
     }

     public async Task DeleteToDo(Guid id){
        try{
            await toDoDAO.DeleteToDo(id);
        }
        catch(Exception ex){
            throw new Exception(ex.Message);
        }
     }

     public async Task UpdateToDo(Guid id, ToDoAddItemDTO td){
        try{
            var tdDTO = _toDoAddItem.Map<ToDoAddItemDTO, ToDo>(td);
            await toDoDAO.UpdateToDo(id, tdDTO);
        }
        catch(Exception ex){
            throw new Exception(ex.Message);
        }
     }
}
