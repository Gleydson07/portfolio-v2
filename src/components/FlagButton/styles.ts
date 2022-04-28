import styled from 'styled-components'

export const Container = styled.button`
  width: 25px;
  height: 18px;

  border: none;
  background: transparent;

  img{
    width: 100%;
    height: 100%;
  }


  @media(max-width: 1100px){
    width: 22px;
    height: 16px;
  }

  @media(max-width: 950px){
    width: 25px;
    height: 18px;
  }
`