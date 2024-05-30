import styled from 'styled-components';

import { ReactComponent as Search } from '../../assets/search.svg';

export const Container = styled.div`
  display: none;
  @media (min-width: 1000px) {
      display: flex;
      flex-direction: column;
      max-width: 373px;
      width: 100%;
      margin: 0 28px;
  }
`;

export const SearchWrapper = styled.div`
  width: 373px;
  margin-bottom: 14px;

  position: fixed;
  top: 0;
  z-index: 2;
  background: var(--primary);

  max-height: 57px;

`;
export const SearchInput = styled.input`
  width: 100%;
  height: 55px;
  margin-top: 30px;
  padding: 0 10px 0 52px ;
  border-radius: 50px;
  background: #EFF3F4;
  font-size: 18px;
  font-weight: normal;
  outline: 0;

  &::placeholder{
    color: #5C6C79;
  }

  ~svg{
    position: relative;
    top: -40px;
    left: 15px;
    z-index: 1;
    transition: 180ms ease-in-out;
  }

  &:focus{
    border: 1px solid var(--orange);
    ~svg{
        stroke: var(--orange);
    }
    &::placeholder{
    color: var(--orange);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 24px;
  height: 24px;

  fill: var(--gray);
  stroke: var(--outline);
`;

export const Body = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  background: #F7F9F9;
  width: 373px;
  margin-top: 100px;
  border-radius: 14px;
`;
export const Item = styled.div`
  padding: 10px 15px;

  &:first-child{
    padding-top: 20px;
    padding-bottom: 15px;
  }
  &:last-child{
    padding-bottom: 25px;
  }
`;
export const Title = styled.div`
  font-weight: bold;
  font-size: 24px;
`;