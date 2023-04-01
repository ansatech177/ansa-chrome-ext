import styled from "styled-components";

export const Header = styled.header`
  margin: 0 0 2em;

  img {
    width: 80px;
    display: block;
    margin: 0 auto;
  }
`;

export const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e0e7ff;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  font-size: 1em;
  font-weight: 500;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 0 auto;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
      rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  }

  img {
    width: 30px;
    margin-right: 0.5em;
  }
`;

export const HomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1em;

  img {
    width: 80px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    img {
      width: 20px;
    }
  }
`;

export const LinkButton = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e0e7ff;
  background-color: #EF3E36;
  width: 100%;
  text-align: center;
  border-radius: 0.5em;
  cursor: pointer;
  margin-bottom: 1em;
  height: 3.5em;
  align-items: center;
  justify-content: center;
  font-size: 1.1em;
`;

export const Button = styled.button<{ bg?: string; color?: string }>`
  background-color: ${(props) => props.bg || "#e0e7ff"};
  color: ${(props) => props.color || "#000"};
  width: 100%;
  padding: 1em;
  text-align: center;
  border-radius: 7px;
  cursor: pointer;
  outline: none;
  border: none;
  height: 3.5em;
  margin-bottom: 1em;
  align-items: center;
  justify-content: center;
`;
