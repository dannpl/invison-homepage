import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;

  .title {
    font-size: ${(props) => props.theme.largeFont};
  }

  .wrapper-carousel {
    width: 50%;
    background-color: ${(props) => props.theme.secondaryColor};
  }

  .wrapper-form {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    justify-content: center;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
    }

    .logo {
      position: absolute;
      top: 40px;
      right: 60px;
      color: #000;
      font-weight: bold;
      font-size: ${(props) => props.theme.largeFont};

      @media (max-width: 768px) {
        position: relative;
        text-align: center;
        top: 0;
        right: 0;
      }
    }

    .form {
      width: 50%;
      margin-top: 90px;
      display: flex;
      flex-direction: column;

      @media (max-width: 768px) {
        width: 85%;
        margin-top: 50px;
      }

      .email {
        margin-bottom: 20px;
      }

      .forgot-password {
        margin-top: 18px;
        text-align: right;
        cursor: pointer;

        &:hover {
          text-decoration: underline;
        }
      }

      .wrapper-or {
        margin-top: 50px;
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;

        span {
          top: -14px;
          display: block;
          background-color: white;
          padding: 2px 22px;
          position: absolute;
          margin: auto;
        }

        .line {
          margin-top: -5px;
          width: 40%;
          border-bottom: 1px solid;
          border-color: ${(props) => props.theme.primaryColor};
        }
      }

      .create-account {
        margin: 40px auto 0px auto;
        font-size: ${(props) => props.theme.smallFont};
        span {
          margin-left: 3px;
          font-size: 16px;
          text-decoration: underline;
          cursor: pointer;
          color: ${(props) => props.theme.secondaryColor};
        }
      }
    }
  }
`;

export const Button = styled.button`
  color: white;
  border: 0;
  margin: 30px auto 0px auto;
  border-radius: 100px;
  width: 175px;
  height: 45px;
  font-size: ${(props) => props.theme.mediumFont};
  font-weight: bold;
  background-color: ${(props) => props.theme.primaryColor};
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.theme.primaryColor};
    border: 2px solid;
    background-color: transparent;
    border-color: ${(props) => props.theme.primaryColor};
  }
`;

export const ButtonGoogle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  border: 0;
  margin: 40px auto 0px auto;
  border-radius: 100px;
  width: 263px;
  height: 45px;
  font-size: 18px;
  box-shadow: 0px 3px 6px #00000029;
  background-color: white;

  img {
    width: 29px;
    height: 30px;
    margin-right: 15px;
  }
`;
