import styled from "styled-components";

const css = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;

  .main-container {
    background-color: rgb(248, 244, 244);
    display: flex;
    flex-direction: column;
    width: 35vw;
    height: 45vh;
    box-shadow: 15px 10px 1px gray;

    .title-container {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      height: 40%;

      img {
        background: transparent;
        width: 50px;
        eight: 50px;
        animation: is-rotating 3s infinite;
        @keyframes is-rotating {
          to {
            transform: rotate(1turn);
          }
        }
      }

      h1 {
        margin-top: 40px;
        text-align: center;
        font-weight: bold;
        line-height: 0.9;

        kbd {
          font-size: 40px;
        }

        samp {
          font-size: 20px;
        }
      }
    }

    .submit-container {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
      height: 60%;

      input {
        text-align: left;
        font-weight: bold;
        width: 50%;
      }

      .btn-container {
        // background-color: red;
        width: 90%;

        display: flex;
        justify-content: space-evenly;

        button {
          width: 220px;
        }
      }
    }
  }

  @media (max-width: 1800px) {
    .main-container {
      width: 50vw;
    }
  }
  @media (max-width: 1150px) {
    .main-container {
      width: 60vw;
    }
  }
  @media (max-width: 900px) {
    .main-container {
      width: 70vw;
    }
  }
  @media (max-width: 720px) {
    .main-container {
      width: 80vw;
    }
  }
  @media (max-width: 600px) {
    .main-container {
      width: 90vw;
    }
  }
`;

export default css;
