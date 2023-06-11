import styled from "styled-components";

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  gap: 2rem;
  margin-top: 1rem;

  input {
    font: inherit;
    padding: 0.25rem;
    width: 100%;
    border: none;
    border-bottom: 3px solid #ccc;
    flex: 1;

    &:focus {
      outline: none;
      border-color: #7a0144;
    }
  }
`;

const LoginErr = styled.p`
  color: rgb(222, 33, 33);
  text-align: center;
  margin-top: 2rem;
`;

export { LoginForm, LoginErr };
