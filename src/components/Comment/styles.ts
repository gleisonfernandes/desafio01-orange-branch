import styled from 'styled-components';
import { ReactComponent as More } from '../../assets/more.svg';

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
  margin-bottom: 30px;

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
export const InfoComment  = styled.div`
  cursor: pointer;
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
  @media(max-width: 520px){
   display: flex;
   flex-direction: column;
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
