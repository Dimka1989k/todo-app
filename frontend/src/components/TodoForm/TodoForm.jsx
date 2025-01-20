import { FormContainer, Input, Button, Form } from "./TodoForm.styled";
import { MdAddTask } from "react-icons/md";

export default function AddTaskForm({ newTask, setNewTask, addTask }) {
  return (
    <FormContainer>
      <h2 style={{ textTransform: "uppercase", color: "#fff" }}>Add Task</h2>
      <Form onSubmit={addTask}>
        <Input
          type="text"
          placeholder="Enter Task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button type="submit">
          <MdAddTask style={{ width: "25px", height: "25px" }} />
        </Button>
      </Form>
    </FormContainer>
  );
}
