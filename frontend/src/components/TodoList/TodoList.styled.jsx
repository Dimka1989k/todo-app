import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  width: 100%;
  max-width: 800px;
  border-collapse: collapse;
  background-color: #111;
  box-shadow: 0 2px 4px rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
  margin: 0 auto;
`;

export const Thead = styled.thead`
  background-color: #222;
  color: #fff;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #333;
  }

  &:nth-child(odd) {
    background-color: #111;
  }
`;

export const Td = styled.td`
  padding: 15px;
  text-align: center;
  border: 1px solid #444;
  color: #fff;

  &:first-child {
    text-align: left;
  }
`;

export const Th = styled.th`
  text-transform: uppercase;
  text-align: center;
  font-size: 26px;
  padding: 25px;
  border: 1px solid #444;
`;

export const ContainerButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Button = styled.button`
  background-color: ${(props) => props.bg || "#007bff"};
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;
