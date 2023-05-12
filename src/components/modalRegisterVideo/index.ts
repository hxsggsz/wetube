import styled from "styled-components";

export const StyledRegisterVideo = styled.div`
  .add-video {
    width: 50px;
    height: 50px;
    font-size: 20px;
    color: inherit;
    position: fixed;
    bottom: 16px;
    right: 16px;
    border: 0;
    background-color: red;
    border-radius: 50%;
    z-index: 99;
    cursor: pointer;
  }
  /* .close-modal {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 8px;
    right: 16px;
    color: inherit;
    background-color: transparent;
    border: none;
    cursor: pointer;
  } */
  /* button[type="submit"] {
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px;
    height: 40px;
    border: none;
    border-radius: 2px;
    cursor: pointer;
    color: inherit;
  } */
  /* form {
    width: 100%;
    padding: 5%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 425px) {
      padding: 7%;
    } */
    /* & > div {
      flex: 1;
      border-radius: 8px;
      max-width: 425px;
      background-color: ${({ theme }) => theme.backgroundLevel2};
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 16px;
      padding-top: 40px;
      @media (max-width: 425px) {
        max-width: 100%;
        height: 100%;
        margin: 0 auto;
      }
    } */
    & span {
      color: #ad0f1e;
      font-weight: 700;
    }
  
  /* input {
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.borderBase};
    padding: 8px 10px;
    margin-bottom: 10px;
    outline: none;
    color: #222222;
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase};
  } */
`;
