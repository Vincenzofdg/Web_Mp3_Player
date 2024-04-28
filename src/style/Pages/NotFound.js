import styled from "styled-components";

const css = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;

  .no-page {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    img {
      width: 70px;
      eight: 70px;
      animation: is-rotating 3s infinite;
      @keyframes is-rotating {
        to {
          transform: rotate(1turn);
        }
      }
    }
  }
`;

export default css;
