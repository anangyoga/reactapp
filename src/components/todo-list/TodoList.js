import Todo from "../todo/Todo";
import "./TodoList.css";

const TodoList = (props) => {
  return (
    <ul>
      {props.dataTodos.map((e) => {
        // {id: 1, title: 'eat'}
        return <li key={e.id}>{e.title}</li>;
      })}{" "}
    </ul>
  );
};

export default TodoList;
