import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #111;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-top: 30px;
`;

export const Form = styled.form`
  display: flex;
  padding: 10px;
  margin-bottom: 15px;
  font-size: 16px;
  gap: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #444;
  border-radius: 4px;
  font-size: 16px;
  background-color: #222;
  color: #fff;
`;

export const Button = styled.button`
  width: 130px;
  background-color: ${(props) => props.bg || "#28a745"};
  color: #fff;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;
