import "./index.scss";

export const Content = () => {
  return (
    <div className="root">
      <div>
        <input className="searchInput" type="text" placeholder="Поиск задачи" />
      </div>
      <div>
        <div className="inputWrap">
          <input
            className="taskInput"
            type="text"
            placeholder="Введите задачу"
          />
          <input
            className="descriptionInput"
            type="text"
            placeholder="Описание"
          />
        </div>
        <div className="todos">
          {/* //TODO infinite scroll Отрисовка с бека */}
          <div>task</div>
          <div>task</div>
          <div>task</div>
          <div>task</div>
          <div>task</div>
        </div>
      </div>
    </div>
  );
};
