import styled, {css} from 'styled-components';
import {ReactComponent as  Image } from '../../assets/image.svg';
import {ReactComponent as  Gif } from '../../assets/gif.svg';
import {ReactComponent as  Stats } from '../../assets/stats.svg';
import {ReactComponent as  Smile } from '../../assets/smile.svg';
import {ReactComponent as  Schedule } from '../../assets/schedule.svg';
import Button from '../Button';

export const Container = styled.div`
  max-width: 869px;
  background-color: #fff;
  padding-bottom: 10px;
  border-bottom: 1px solid var(--outline);
`;

export const NewTweets = styled.div`
  width: 100%;
`;
export const Avatar  = styled.div`
 position: absolute;
 margin: 5px 0 0 19px;
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
export const TextArea = styled.textarea`
  width: 100%;
  height: 132px;
  margin-bottom: 10px;
  padding: 20px 0 0 95px;
  font-size: 22px;
  font-weight: 600;

  &:focus {
    border: none;
    outline: none;
  }
`;
export const FileButon = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const FileInputWrapper = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: 95px;
`;

export const FileInput = styled.input`
  display: none;
`;

export const PreviewImage = styled.img`
  max-width: 579px;
  width: 100%;
  margin-top: 10px;
  margin-left: 95px;
  border-radius: 5px;
`;

const iconCSS = css`
width: 24px;
height: 24px;
margin-right: 10px;
`;
export const ImageIcon = styled(Image)`
 ${iconCSS}
`;
export const GifIcon = styled(Gif)`
 ${iconCSS}
`;
export const StatsIcon = styled(Stats)`
 ${iconCSS}
`;
export const SmileIcon = styled(Smile)`
 ${iconCSS}
`;
export const ScheduleIcon = styled(Schedule)`
 ${iconCSS}
`;

export const TweetButton = styled(Button)`
  padding: 10px 20px;
  margin-right: 20px;
`;