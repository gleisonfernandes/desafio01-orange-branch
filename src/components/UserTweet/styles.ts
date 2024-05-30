import styled, { css } from 'styled-components';

import { ReactComponent as Pin } from '../../assets/pin.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;
export const Header = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    border-bottom: 1px solid var(--outline);
    >ul{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        height: 40px;
        padding: 0 42px;
        z-index: 2;
        //padding: 18px min(40px, max(10vw, 10px));

        outline: 0;
        cursor: pointer;

        
        
        >li{
            display: flex;
            align-items: center;
            //height: 40px;
            padding-bottom: 18px min(40px, max(10vw, 10px));
            font-weight: normal;
            font-size: 18px;
            color: var(--black);

            >a  {
                text-decoration: none;
                color: var(--twitter);

            }
            &:hover{
                color: var(--gray);
            }
            &.active{
                border-bottom: 3px solid var(--twitter);
                font-weight: bold;
            }
            @media (max-width: 420px){
                font-size: 15px;
            }
        }
    }
`;

export const PinnedTweet = styled.div`
  display: flex;
  padding: 10px 66px;
  font-size: 16px;
  align-items: center;
  font-weight: 600;
  color: #536471;
`;

const iconCSS = css`
  width: 18px;
  height: 18px;
  margin-right: 15px;


`;

export const PinIcon = styled(Pin)`
  ${iconCSS}
`;

export const Tweets = styled.div`
    display: flex;
    flex-direction:  column;

    flex-shrink: 0;
`;
