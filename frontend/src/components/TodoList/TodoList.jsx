import { Container, Table, Thead, Tr, Td, Th, Button } from "./TodoList.styled";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { TfiSave } from "react-icons/tfi";
export default function TodoList({
  todoList,
  editableId,
  editedTask,
  setEditedTask,
  toggleEditable,
  saveEditedTask,
  deleteTask,
}) {
  return (
    <Container>
      <Table>
        <Thead>
          <tr>
            <Th>Tasks</Th>
            <Th>Edit</Th>
            <Th>Delete</Th>
          </tr>
        </Thead>
        <tbody>
          {Array.isArray(todoList) ? (
            todoList.map((data) => (
              <Tr key={data._id}>
                <Td>
                  {editableId === data._id ? (
                    <input
                      type="text"
                      value={editedTask}
                      onChange={(e) => setEditedTask(e.target.value)}
                    />
                  ) : (
                    data.task
                  )}
                </Td>
                <Td>
                  {editableId === data._id ? (
                    <Button
                      bg="#28a745"
                      onClick={() => saveEditedTask(data._id)}
                    >
                      <TfiSave style={{ width: "25px", height: "25px" }} />
                    </Button>
                  ) : (
                    <Button onClick={() => toggleEditable(data._id)}>
                      <MdEdit style={{ width: "25px", height: "25px" }} />
                    </Button>
                  )}
                </Td>
                <Td>
                  <Button bg="#dc3545" onClick={() => deleteTask(data._id)}>
                    <MdDelete style={{ width: "25px", height: "25px" }} />
                  </Button>
                </Td>
              </Tr>
            ))
          ) : (
            <Tr>
              <Td>Loading tasks...</Td>
            </Tr>
          )}
        </tbody>
      </Table>
    </Container>
  );
}
