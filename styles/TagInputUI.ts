import styled from "styled-components";

export const TagInputUiStyled = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;

  input {
    background: white;
    border: 1px solid #f8f8f8;
    border-radius: 8px;
    align-self: stretch;
    padding: 8px;
    color: #434343;
    width: 100%;
    :focus {
      outline: none;
      border: 1px solid #f1f2f3;
      box-shadow: 0px 4px 8px -2px rgba(27, 46, 94, 0.04);
    }
    ::placeholder {
      color: #babfc7;
    }
    + ul {
      /* display: none; */
      background: white;
      box-shadow: 0px 8px 24px -4px rgba(27, 46, 94, 0.12);
      border-radius: 8px;
      padding: 8px;
      position: absolute;
      top: 42px;

      &.show {
        display: flex;
        flex-direction: column;
        transform: scaleY(1);
        transition: all 300ms ease-in-out;
      }

      &.hide {
        transform: scaleY(0);
      }
      li {
        list-style: none;
        padding: 8px;
        color: #5a6474;
        font: normal 0.75rem/1rem "Noto Sans";
        font-weight: 400;
        min-width: 200px;
        max-width: 280;
        cursor: pointer;
        :hover,
        &.highlighted {
          background: #f8f8f8;
        }
      }
    }
  }
`;

export const TagsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  margin-top: 8px;
  flex-wrap: wrap;
  a {
    color: #3e5bc4;
    background: #dde1ee;
    text-decoration: none;
    padding: 2px 8px;
    border-radius: 100px;
    font: normal 0.75rem/1rem "Noto Sans", sans-serif;
    transition: all 200ms ease-in-out;
    :hover {
      background: #f2e1e1;
      color: #ca3b57;
    }
  }
`;