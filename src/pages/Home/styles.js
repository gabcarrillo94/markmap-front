import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #3E4751;
`;

export const HomeContent = styled.div`
  position: relative;
  margin-left: 240px;
`;

export const Nav = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 3px 12px rgba(65, 81, 100, 0.12), 0px 3px 8px rgba(65, 81, 100, 0.24);
  padding: 28px 16px;
  position: fixed;
  top: 0;
  left: 240px;
  width: calc(100% - 240px);
  z-index: 9;

  h1 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    display: flex;
    align-items: center;
    letter-spacing: -0.01em;
    color: #20252B;
  }
`;

export const MapImg = styled.div`
  height: 100vh;
  width: 100%;

  .gm-bundled-control-on-bottom {
    top: 0;

    .gmnoprint {
      left: auto !important;
      right: 24px !important;
      top: 104px !important;
    }
  }
`;

export const PinsList = styled.div`
  position: fixed;
  left: 264px;
  top: 104px;
  box-shadow: 0px 42px 112px rgba(0, 0, 0, 0.25), 0px 30px 42px rgba(0, 0, 0, 0.22);
  width: 344px;
`;

export const PinsListH = styled.div`
  background: #20252B;
  border-radius: 8px 8px 0 0;
  padding: 10px 16px;

  h3 {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    color: #fff;
  }
`;

export const PinsListB = styled.div`
  border-radius: 0 0 8px 8px;
  background: #fff;

  h3 {
    max-width: 181px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    text-align: center;
    color: #556476;
    padding: 16px 0;
    margin: auto;
  }

  ul {
    li {
      padding: 13px 19px;

      + li {
        border-top: 1px solid #E7E8EF;
      }

      h4 {
        display: flex;
        align-items: center;
        gap: 3px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        display: flex;
        align-items: center;
        color: #20252B;
      }

      p {
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        display: flex;
        align-items: center;
        color: #20252B;
      }
    }
  }
`;

export const Buttons = styled.div`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 170px;
`;

export const RemoveAllButton = styled.button`
  background: #D20200;
  border: 1px solid #D20200;
  border-radius: 4px;
  box-sizing: border-box;
  padding: 10px 12px 10px 20px;
  display: flex;
  gap: 9px;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
  outline: none;
  width: 100%;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #fff;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const AddButton = styled.button`
  position: relative;
  background: #fff;
  border: 1px solid #C8CED8;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 12px 10px 20px;
  display: flex;
  gap: 9px;
  justify-content: space-between;
  align-items: center;
  outline: none;
  width: 100%;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #556476;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #363E48;
    opacity: 0.75;
  }
`;

export const ModalContainer = styled.div`
  background: #F5F6FA;
  box-shadow: 0px 42px 112px rgba(0, 0, 0, 0.25), 0px 30px 42px rgba(0, 0, 0, 0.22);
  border-radius: 8px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
`;

export const ModalClose = styled.div`
  background: #20252B;
  padding: 9px 14px;
  display: flex;
  border-radius: 8px 8px 0 0;

  span {
    font-style: normal;
    font-weight: 900;
    font-size: 14px;
    line-height: 100%;
    color: #FFFFFF;
    transform: matrix(1, 0, 0, 1, 0, 0);
    margin-left: auto;

    &:hover {
      cursor: pointer;
    }
  }
`;

export const ModalHeader = styled.div`
  padding: 14px 16px;
  background: #FFFFFF;
  box-shadow: 0px 2px 1px rgba(65, 81, 100, 0.15);
  position: relative;

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 100%;
    display: flex;
    align-items: center;
    letter-spacing: -0.02em;
    color: #415164;
  }
`;

export const ModalBody = styled.div`
  background: #F5F6FA;
  padding: 16px 16px 24px;

  div {
    background: #FFFFFF;
    box-shadow: 0px 2px 1px rgba(65, 81, 100, 0.15);
    border-radius: 8px;
    padding: 16px 20px;

    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 100%;
      display: flex;
      align-items: center;
      color: #415164;
      margin-bottom: 8px;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: #415164
    }
  }
`;

export const ModalFooter = styled.div`
  border-top: 1px solid #C8CED8;
  background: #fff;
  display: flex;
  padding: 16px;
`;

export const RemoveButton = styled.div`
  background: #fff;
  border: 1px solid #FFD2D1;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 24px;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    color: #D20200
  }

  &:hover {
    cursor: pointer;
  }
`;

export const CloseButton = styled.div`
  background: #fff;
  border: 1px solid #fff;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 10px 24px;

  span {
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 100%;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    text-decoration-line: underline;
    text-transform: uppercase;
    color: #415164;
  }

  &:hover {
    cursor: pointer;
  }
`;
