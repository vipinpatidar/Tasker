import styled from "styled-components";

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.6rem;
  margin-top: 2rem;

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

  input[type="password"] {
    margin-top: 2rem;
  }

  .signInBtn {
    color: #7a0144;
    font-weight: bold;
    margin-left: 5px;
    cursor: pointer;
  }
`;
