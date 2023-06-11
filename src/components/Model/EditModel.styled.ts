import styled from "styled-components";

const ModelSection = styled.section`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModelForm = styled.form`
  display: flex;
  width: 40rem;
  height: 6rem;
  margin: 2rem auto;
  background-color: white;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  justify-content: space-between;
  align-items: flex-end;
  position: relative;

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

  span {
    font-weight: bolder;
    position: absolute;
    top: 7px;
    cursor: pointer;
    right: 20px;
  }
`;

export { ModelForm, ModelSection };
