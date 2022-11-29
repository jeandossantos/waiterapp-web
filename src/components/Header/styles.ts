import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: #d73035;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 198px;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 1216px;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: white;
      font-size: 32px;
    }

    h2 {
      color: white;
      font-size: 16px;
      font-weight: 600;
      opacity: 0.9;
      margin-top: 6px;
    }
  }
`;
