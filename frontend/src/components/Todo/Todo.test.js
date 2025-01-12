import { render, screen} from "@testing-library/react";
import Todo from "./Todo";

test("renders Todo component", () => {
  render(<Todo />);
  expect(screen.getByText(/add task/i)).toBeInTheDocument();
});