import styled, {css} from 'styled-components';
import { ReactComponent as Home } from '../../assets/home outline.svg';
import { ReactComponent as Profile } from '../../assets/profile outline.svg';
import { ReactComponent as Notifications } from '../../assets/notification.svg';
import { ReactComponent as Email } from '../../assets/messages.svg';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;

  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 560px){
    display: none;
  }
`;

const icon = css`
 width: 31px;
 height: 31px;

 cursor: pointer;

 &:hover,
 &.active{
  stroke: var(--orange);
  border-bottom: 3px solid var(--orange);
 }
`;
export const HomeIcon = styled(Home)`
 ${icon}
`;
export const ProfileIcon = styled(Profile)`
 ${icon}
 `;
export const BellIcon = styled(Notifications)`
 ${icon}
 `;
export const EmailIcon = styled(Email)`
 ${icon}
 `;