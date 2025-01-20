import { useEffect, useState } from "react";
import TaskList from "../TodoList/TodoList.jsx";
import TodoForm from "../TodoForm/TodoForm.jsx";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [editableId, setEditableId] = useState(null);
  const [editedTask, setEditedTask] = useState("");
  const [newTask, setNewTask] = useState("");

  useEffect(() => {
    fetch("http://127.0.0.1:3001/getTodoList")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setTodoList(data);
      })
      .catch((err) => console.error(err));
  }, []);

  const toggleEditable = (id) => {
    const rowData = todoList.find((data) => data._id === id);
    if (rowData) {
      setEditableId(id);
      setEditedTask(rowData.task);
    } else {
      setEditableId(null);
      setEditedTask("");
    }
  };

  const addTask = (e) => {
    e.preventDefault();
    if (!newTask.trim()) {
      alert("This field must be filled out.");
      return;
    }

    fetch("http://127.0.0.1:3001/addTodoList", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: newTask }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add task");
        }
        return response.json();
      })
      .then(() => {
        setNewTask("");
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  const saveEditedTask = (id) => {
    if (!editedTask) {
      alert("This field must be filled out.");
      return;
    }

    fetch(`http://127.0.0.1:3001/updateTodoList/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ task: editedTask }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to update task");
        }
        return response.json();
      })
      .then(() => {
        setEditableId(null);
        setEditedTask("");
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  const deleteTask = (id) => {
    fetch(`http://127.0.0.1:3001/deleteTodoList/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete task");
        }
        return response.json();
      })
      .then(() => {
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <TaskList
        todoList={todoList}
        editableId={editableId}
        editedTask={editedTask}
        setEditedTask={setEditedTask}
        toggleEditable={toggleEditable}
        saveEditedTask={saveEditedTask}
        deleteTask={deleteTask}
      />
      <TodoForm newTask={newTask} setNewTask={setNewTask} addTask={addTask} />
    </>
  );
}