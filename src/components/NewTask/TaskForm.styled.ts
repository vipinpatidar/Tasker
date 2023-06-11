import styled from "styled-components";

const AddForm = styled.form`
  display: flex;
  justify-content: space-between;

  input {
    font: inherit;
    padding: 0.25rem;
    border: none;
    border-bottom: 3px solid #ccc;
    flex: 1;
    margin-right: 2rem;

    &:focus {
      outline: none;
      border-color: #7a0144;
    }
  }
`;

const SignOutBtn = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0rem 0 2rem;
  border-bottom: 2px solid #7a0144;
  padding: 0 0 1rem;

  h1 {
    color: #7a0144;
    margin: 0;
    padding: 0;
  }
`;

export { AddForm, SignOutBtn };
