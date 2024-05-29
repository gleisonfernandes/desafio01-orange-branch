import styled, {css} from 'styled-components';
import BannerImage from '../../assets/banner.png';
import ProfileImage from '../../assets/profile.png';
import { ReactComponent as Location } from '../../assets/location.svg';
import { ReactComponent as Link } from '../../assets/link.svg';
import { ReactComponent as Bollon } from '../../assets/bollon.svg';
import { ReactComponent as Calender } from '../../assets/calender.svg';

import Button from '../Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    max-height: 100%;
    overflow-y: auto;

    scrollbar-width: none;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Banner = styled.div`
    >img{
        flex-shrink: 0;
    
        width: 100%;
        height: min(33vw, 275px);
    
        position: relative;
    }
`;
export const Avatar = styled.div`
    position: absolute;
    >img{
        width: max(45px, min(150px, 22vw));
        height: max(45px, min(150px, 22vw));
    
        border: 1.75px solid var(--primary);
        border-radius: 50%;
        flex-shrink: 0;
    
        position: absolute;
        bottom: max(-60px, -10vw);
        left: 25px;
    }
`;
export const ProfileData = styled.div`
    position: relative;
    padding: min(calc(10vw + 7px), 67px) 25px 0;

    display: flex;
    flex-direction: column;

    > h1 {
        font-weight: bold;
        font-size: 24px;
    }
    > h2 {
        font-weight: normal;
        font-size: 16px;

        color: var(--gray)
    }
    > p {
        font-size: 18px;
        margin-top: 11px;
    }

    > ul {
        display: flex;
        justify-content: space-between;

        list-style: none;
        margin-top: 10px;
        margin-bottom: 10px;

        @media(max-width: 880px){
            flex-direction: column;
        }
        >li{
            display: flex;
            align-items: center;
            font-size: 18px;
            color: var(--gray);

            >a  {
                text-decoration: none;
                color: var(--twitter);

            }
            >svg{
                fill: var(--gray);
                margin-right: 5px;
            }
        }
    }
    
`;

export const EditButton = styled(Button)`
    position: absolute;
    top:2px;
    right: 20px;

    padding: 4px 10px;
    font-size: 15px;
    font-weight: 600;

    @media(min-width: 320px){
        top: 10px;
        right: 67px;
        padding: 10px 15px;
        font-size: 18px;
    }
`;

const iconCSS = css`
 width: 18px;
 height: 18px;

 color: var(--black);
`;

export const LocationIcon = styled(Location)`
 ${iconCSS}
`;
export const LinkIcon = styled(Link)`
 ${iconCSS}
`;
export const BollonIcon = styled(Bollon)`
 ${iconCSS}
`;
export const CalenderIcon = styled(Calender)`
 ${iconCSS}
`;

export const Followage = styled.div`
    display: flex;

    > span{
        font-size: 18px;
        color: var(--gray);

        & + span {
            margin-left: 20px;
        }
        > strong{
            color: var(--black);
        }
    }
`;