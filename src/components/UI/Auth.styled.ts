import styled from "styled-components";

export const AuthBtnSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;

  .isLoginClass {
    background-color: #7a0144;
  }

  .isNotLoginClass {
    background-color: white;
    border: 2px solid #7a0144;
    color: #7a0144;

    &:hover {
      color: white;
    }
  }
  button:hover,
  button:active {
    background-color: #9c095a;
    border-color: #9c095a;
  }
`;
