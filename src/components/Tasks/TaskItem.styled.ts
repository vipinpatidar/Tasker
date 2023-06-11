import styled from "styled-components";

export const TaskItemLi = styled.li`
  border-bottom: 1px solid #ccc;
  padding: 1rem;
  font-weight: bold;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-of-type {
    border-bottom: none;
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 1.6rem;
  }
  .delIcon {
    color: rgb(209, 52, 52);
    font-size: 24px;
    cursor: pointer;
  }

  .editIcon {
    color: rgb(19, 151, 233);
    font-size: 22px;
    cursor: pointer;
  }
`;
