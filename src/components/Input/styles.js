import styled from 'styled-components';
import '../../styles/vars.scss';

export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const Label = styled.span`
  font-size: ${(props) => props.theme.smallFont};
`;

export const Field = styled.input`
  font-size: ${(props) => props.theme.mediumFont};
  width: 100%;
  padding: 11px 20px;
  height: 42px;
  border: 0;
  border-bottom: 1px solid;
  border-bottom-color: ${(props) =>
    props.error ? 'red' : props.theme.primaryColor};

  ::placeholder {
    opacity: 0;
  }
`;
