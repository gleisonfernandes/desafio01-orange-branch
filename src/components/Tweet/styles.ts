import styled, {css} from 'styled-components';
import { ReactComponent as More } from '../../assets/more.svg';
import { ReactComponent as Comment } from '../../assets/comment.svg';
import { ReactComponent as Retweet } from '../../assets/retweet.svg';
import { ReactComponent as Like } from '../../assets/like.svg';
import { ReactComponent as Shere } from '../../assets/share.svg';
import { ReactComponent as Statistics } from '../../assets/statistics.svg';


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 25px;

  border-bottom: 1px solid var(--outline);

  max-width: 100%;
`;

export const Body  = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;
export const Avatar  = styled.div`
  >img{
  width: 60px;
  height: 60px;
  border-radius: 50%;
  flex-shrink: 0;

  position: absolute;
  top: 0;
  left: 0%;
  }

`;
export const Content  = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 2px;
  margin-left: 15px;
  padding-left: 59px;
`;
export const Header  = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const InfoHeader  = styled.div`
  display: flex;
  >strong{
    font-size: 20px;
    margin-right: 5px;
  }
  >span,
  time{
    font-size: 18px;
    font-weight: normal;
    color: var(--gray);
  }
  >strong,
  span{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
`;
export const Dot  = styled.div`
  background: var(--gray);
  width: 3px;
  height: 3px;
  border-radius: 50%;
  margin: 8px 10px;
`;
export const IconHeader  = styled.div`
 //margin-top: 2px;
`;
export const MoreIcon  = styled(More)`
  margin-top: 2px;
`;
export const Description  = styled.div`
  //width: 100%;
  max-width: 747px;
  font-size: 18px;
  font-weight: normal;
  margin-top: 5px;
  margin-right: 20px;
`;
export const ImageContent  = styled.div`
  >img{
    margin: 15px 0;
    width: 100%;
    max-width: 679px;
    height: min(453px, max(175px, 41vw));

    border-radius: 20px;

    cursor: pointer;
    &:hover{
      opacity: 0.7;
    }
  }
`;
export const Icons  = styled.div`
    display: flex;
    width: 100%;
    max-width: 586px;
    flex-direction: row;
    justify-items: center;
    justify-content: space-between;
    margin: 15px 0px 15px 0;
`;
export const Status  = styled.div`
  display: flex;
  font-weight: normal;
  font-size: 16px;
  align-content: center;
  align-items: center;

  >svg{
    margin-right: 10px;
  }

`;
const icons = css`
 width: 24px;
 height: 24px;
 

 color: var(--black);
`;
export const CommentIcon  = styled(Comment)`
 ${icons}
`;
export const RetweetIcon  = styled(Retweet)`
 ${icons}
`;
export const LikeIcon  = styled(Like)`
 ${icons}
`;
export const ShereIcon  = styled(Shere)`
 ${icons}
`;
export const StatisticsIcon  = styled(Statistics)`
 ${icons}
`;
