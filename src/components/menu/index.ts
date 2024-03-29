import styled from "styled-components";

export const menu = styled.header`
  display: flex;
  flex-direction: row;
  height: 56px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.backgroundBase};
  border: 1px solid ${({ theme }) => theme.borderBase};
  align-items: center;
  padding: 6px 4px;
  /* gap: 8px;  */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  z-index: 3;
  
  .text {
    fill: ${({ theme }) => theme.textColorBase};
  }

  & > a {
    .logoMobile {
      display: none;

      @media(max-width: 773px) {
        display: flex;
      }
    }

    .logo {
      display: flex;

      @media(max-width: 773px) {
        display: none;
      }
    }
  }
`;

export const AutoComplete = styled.div`
  position: absolute;
  max-height: 30vh;
  overflow-y: auto;
  width: 100%;
  padding: 6px;
  border-top: none;
  border-radius: 2px;
  border: 2px solid ${({ theme }) => theme.borderBase};
  background: ${({ theme }) => theme.backgroundBase};
  
  &::-webkit-scrollbar {
      width: .4rem;
      background: inherit;
      border: none;
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.textColorBase};
      border-radius: 6px;
    }
`;


export const AutoCompleteItem = styled.div`
  border-radius: 2px;
  padding: 6px 4px;
  :hover {
    background: red;
  }
`;

export const ButtonsWrapper = styled.div`
display: flex;
align-items: center;
gap: 10px;
  @media (max-width: 680px) {
    display: none;
  }
`;

export const login = styled.button`
  cursor: pointer;
  white-space: nowrap;
  background: none;
  border: none;
  color: ${({ theme }) => theme.textColorBase};
`;