import styled from 'styled-components';

export const Wrapper = styled.div`
  --blue: rgb(139, 157, 195);
  --darkBlue: rgb(059, 089, 152);
  --lightBlue: rgb(223, 227, 238);
  --grey: rgb(247, 247, 247);
  --white: rgb(255, 255, 255);

  * {
    margin: 0;
    padding: 0;
    font-size: 3.25em;
    font-weight: 700;
    font-family: Arial;
  }

  ::-webkit-input-placeholder {
    text-align: center;
  }

  :-moz-placeholder {
    /* Firefox 18- */
    text-align: center;
  }

  ::-moz-placeholder {
    /* Firefox 19+ */
    text-align: center;
  }

  :-ms-input-placeholder {
    text-align: center;
  }

  @media only screen and (min-device-width: 737px) {
    height: 667px;
    width: 375px;
    font-size: 19px;
  }
`;

export const Header = styled.h1`
  color: var(--white);
  background: var(--darkBlue);
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 25%;
  text-align: center;
  box-sizing: border-box;
`;
