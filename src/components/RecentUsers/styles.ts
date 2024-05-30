import styled from 'styled-components';
import Button from '../Button';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  >div{
    display: flex;
    align-items: center;
  }
`;

export const Avatar = styled.div`
  
  >img{
    width: 60px;
    width: 60px;
    border-radius: 50px;
    margin-right: 10px;
  }
  
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;

  >strong{
    font-size: 18px;
    font-weight: 600;
  }
  >span{
    font-size: 18px;
    font-weight: normal;
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  padding: 10px 18px;
  font-size: 18;
  font-weight: bold;
`;