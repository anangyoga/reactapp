import TodoCreate from "../todo-create/TodoCreate";
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
    {
      id: 4,
      title: "Code",
    },
  ];

  const eventCreateTodo = (todo) => {
    todos.push(todo);
    console.log(todos);
  };

  return (
    <div>
      <h3>To-do List</h3>
      <TodoCreate onCreateTodo={eventCreateTodo} />
      <TodoList dataTodos={todos} />
    </div>
  );
};

export default Todo;
