import styled from 'styled-components';

export const AlertContainer = styled.div<{ severity: 'success' | 'info' | 'warning' | 'error' }>`
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid transparent;
  border-radius: 4px;
  color: ${({ severity }) => {
    switch (severity) {
      case 'success':
        return 'var(--retweet)';
      case 'info':
        return 'var(--twitter)';
      case 'warning':
        return 'var(--orange)';
      case 'error':
        return 'var(--like)';
      default:
        return 'var(--black)';
    }
  }};
  background-color: ${({ severity }) => {
    switch (severity) {
      case 'success':
        return '#dff0d8';
      case 'info':
        return '#d9edf7';
      case 'warning':
        return '#fcf8e3';
      case 'error':
        return '#f2dede';
      default:
        return '#ffffff';
    }
  }};
`;

export const CloseButton = styled.button`
  float: right;
  font-size: 20px;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.2;
`;
