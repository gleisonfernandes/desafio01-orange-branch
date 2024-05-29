import styled, {css} from 'styled-components';
import LogoCirculo from '../../assets/logo_circulo.png';
import { ReactComponent as Home } from '../../assets/home outline.svg';
import { ReactComponent as Explore } from '../../assets/explore.svg';
import { ReactComponent as Notification } from '../../assets/notification.svg';
import { ReactComponent as Message } from '../../assets/messages.svg';
import { ReactComponent as Profile } from '../../assets/profile outline.svg';
import { ReactComponent as MoreCircle } from '../../assets/more circle.svg';
import { ReactComponent as More } from '../../assets/more.svg';

export const Container = styled.div`
  display: none;

  @media (min-width: 560px){
   
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   width: 268px;
   
   position: sticky;
   top: 0;
   left: 0;

   padding: 9px 30px 0 20px;

   max-height: 100vh;
   overflow-y: auto;
  }
`;
export const PageTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px){
    align-items: flex-start;
  }
`;
export const Logo = styled.div`
  width: 60px;
  height: 60px;

  background-image: url(${LogoCirculo});
  background-size: cover;
  background-position: center;

  margin-top: 26px;
  margin-bottom: 2px;
`; 
export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-weight: 100;

  cursor: pointer;

 &:hover,
 &.active{
    font-weight: bold;
    color: var(--black);
    stroke: var(--black);
 }

  >span{
    display: none;
  }

  @media (min-width: 1280px){
   >span{
    display: inline;
    margin-left: 20px;

    font-weight: 600;
    font-size: 18px;
   }
  }

  padding: 15px 0;
  outline: 0;

  & + button:last-child{
    width: 40px;
    height: 40px;
    margin-top: 50px;
    font-size: 18px;
    font-weight: bold;

    >span{
        display:  none;
    }

    @media (min-width: 1280px){
      width: 90%;
      height: unset;
      >span{
        display:  inline;
      }
    }
  }
`;

const iconCSS = css`
 flex-shrink: 0;

 width: 28px;
 height: 28px;
`;


export const HomeIcon = styled(Home)`
  ${iconCSS}
`;
export const ExploreIcon = styled(Explore)`
  ${iconCSS}
`;
export const NotificationIcon = styled(Notification)`
  ${iconCSS}
`;
export const MessageIcon = styled(Message)`
  ${iconCSS}
`;
export const ProfileIcon = styled(Profile)`
  ${iconCSS}
`;
export const MoreIcon = styled(MoreCircle)`
  ${iconCSS}
`;

export const PageFinal = styled.div`
    display: flex;
    align-items: center;
`;
export const Avatar = styled.div`
  >img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
  }
`;
export const ProfileData = styled.div`
  display: none;

  @media(min-width: 1024px) {
    
    display: flex;
    flex-direction: column;
    margin: 17px 30px 10px 7px;
    >strong{
        font-size: 16;
        font-weight: 600;
    }
    >span{
        font-size: 16;
        font-weight: normal;
    }
  }
`;

export const IconMore = styled(More)`
  width: 17px;
  height: 4px;
  margin-left: 20px;
  fill: var(--orange);
`;
