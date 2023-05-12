import styled from 'styled-components';

export const AvatarWrapper = styled.div`
  .AvatarRoot {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    vertical-align: middle;
    overflow: hidden;
    user-select: none;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    background-color: var(--blackA3);
  }
  
  .AvatarImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: inherit;
}

.AvatarFallback {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  color: var(--violet11);
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
}
`;