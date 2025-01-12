import { render, screen } from "@testing-library/react"; 
import TodoList from "./TodoList";
import "@testing-library/jest-dom";
test("renders task list correctly", () => {
  const tasks = [
    { _id: "1", task: "Task 1" },
    { _id: "2", task: "Task 2" },
  ];

  render(
    <TodoList
      todoList={tasks}
      editableId={null}
      editedTask=""
      setEditedTask={jest.fn()}
      toggleEditable={jest.fn()}
      saveEditedTask={jest.fn()}
      deleteTask={jest.fn()}
    />
  );

    expect(screen.getByText("Task 1")).toBeInTheDocument();
  expect(screen.getByText("Task 2")).toBeInTheDocument();
});