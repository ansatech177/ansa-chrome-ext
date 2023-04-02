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
  background-color: #ef3e36;
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

export const RefreshBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 1em 0;
  gap: 0.5em;
  font-size: 0.95em;
  cursor: pointer;
`;

export const Select = styled.select`
  display: block;
  width: 100%;
  outline: none;
  background: transparent;
  border-radius: 5px;
  height: 45px;
  padding: 0 10px;
  margin-top: 10px;
  font-size: 1em;
  -webkit-appearance: none;
  -moz-appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M5.07671 5.33928L8.86404 1.55188C8.9517 1.46428 9 1.34735 9 1.22266C9 1.09798 8.9517 0.981043 8.86404 0.893445L8.58519 0.614529C8.40349 0.433037 8.10818 0.433037 7.92675 0.614529L4.74638 3.7949L1.56248 0.611C1.47482 0.523402 1.35795 0.475036 1.23333 0.475036C1.10858 0.475036 0.991712 0.523402 0.903976 0.611L0.625198 0.889915C0.537531 0.977582 0.489235 1.09445 0.489235 1.21913C0.489235 1.34382 0.537531 1.46075 0.625198 1.54835L4.41599 5.33928C4.50393 5.42709 4.62135 5.47531 4.74617 5.47504C4.87148 5.47531 4.98883 5.42709 5.07671 5.33928Z' fill='white'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
  cursor: pointer;

  // Style options with hidden attribute
  option[hidden="true"] {
    color: #f00 !important;
  }
`;

export const BackLink = styled(RefreshBlock)`
  text-decoration: none;
  color: #000;
`;
