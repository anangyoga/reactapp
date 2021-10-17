import TodoList from "../todo-list/TodoList";
import "./Todo.css";

const Todo = () => {
  // this is props
  const todos = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Work",
    },
  ];

  return (
    <div className="">
      <h3>To-do List</h3>
      <TodoList dataTodos={todos} />
    </div>
  );
};

export default Todo;
