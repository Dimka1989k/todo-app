import React from "react";
import { render, screen, fireEvent } from "@testing-library/react"; 
import TodoForm from "./TodoForm";

test("renders TodoForm and handles input correctly", () => {
  const setNewTask = jest.fn();
  const addTask = jest.fn(); 

  render(<TodoForm newTask="" setNewTask={setNewTask} addTask={addTask} />);
 
  const input = screen.getByPlaceholderText(/enter task/i);  
 
  fireEvent.change(input, { target: { value: "Test Task" } });
  expect(setNewTask).toHaveBeenCalledWith("Test Task");
});
