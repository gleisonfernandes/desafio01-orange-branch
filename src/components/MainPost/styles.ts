import styled, {css} from 'styled-components';
import { ReactComponent as ArrowLeft } from '../../assets/arrowleft.svg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(910px, 100%);

  @media (min-width: 560px){
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
    z-index: 3;
    position: sticky;
    top: 0;
    background: var(--primary);

    display: flex;
    align-items: center;

    text-align: left;

    padding: 20px 0 20px 13px;
    border-bottom: 1px solid var(--outline);

    > button{
        padding: 8px;
        border-radius: 50%;

        outline: 0;
        cursor: pointer;

        &:hover{
            background: var(--outline);
        }
    }
  
`;

export const BackIcon = styled(ArrowLeft)`
  width: 24px;
  height: 24px;

  fill: var(--black);
`;

export const PostInfo = styled.div`
  margin-left: 17px;

  display: flex;
  flex-direction: column;

  > strong{
    font-size: 20px;
  }
  > span{
    font-size: 16px;
    color: var(--gray);
  }
`;
export const BottomMargin = styled.div`
  margin-bottom: 40px;
`;