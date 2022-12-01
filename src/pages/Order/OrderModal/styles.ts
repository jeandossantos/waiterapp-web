import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BodyModal = styled.div`
  background-color: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  > header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px;

    strong {
      font-size: 24px;
      padding: 0px;
    }

    button {
      border: 0;
      background: transparent;
      line-height: 0;
    }
  }

  .status-container {
    margin-top: 32px;

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      display: flex;
      gap: 8px;
    }
  }
`;

export const OrderDetails = styled.div`
  margin-top: 32px;

  > strong {
    font-weight: 500;
    font-size: 14px;
    opacity: 0.8;
  }
`;
