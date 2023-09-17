import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalWindow = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 5px;
  width: 80%;
  max-width: 600px;
  box-shadow: 0px 0px 10px 0px #000;
  text-align: center;
  position: relative;
`;
