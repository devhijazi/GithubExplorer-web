import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface formProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  margin-top: 80px;

  max-width: 450px;
  line-height: 56px;
`;

export const Form = styled.form<formProps>`
  margin-top: 45px;
  max-width: 700px;
  display:flex;

  input {
    flex:1;
    height: 70px;
    padding: 0 24px;
    border:0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) => props.hasError &&

    css`
      border-color:#c53030;
    `}

    &::placeholder{
      color: #a8a8b3;
    }
  }

  button {
    width: 200px;
    height: 70px;
    background: #04D361;
    border-radius: 0px 5px 5px 0px;
    border:0;
    color: #fff;
    font-weight:bold;
    transition: background-color 0.3s;

    &:hover{
      background: ${shade(0.2, '#04D361')}
    }
  }

`;

export const Error = styled.span`
  display:block;
  color: #c53030;
  margin-top:10px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
  a{
    background:#fff;
    border-radius: 5px;
    width:100%;
    padding:24px;

    display:block;

    text-decoration:none;

    display:flex;

    align-items:center;

    transition:transform 0.3s;

    & + a{
      margin-top:15px;
    }

    img {
      width: 54px;
      height: 54px;
      border-radius:50%;
    }

    div {
      margin-left: 15px;
      flex:1;

      strong{
        font-size:20px;
        color: #3a3a3a;
      }

      p {
        font-size: 18px;
        color: #A8A8B4;
        margin-top:5px;
      }
    }

    svg{
      margin-left: auto;
      color: #3a3a4d;
    }
    &:hover{
      transform: translateX(10px)
    }
  }

`;