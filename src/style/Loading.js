import styled from "styled-components";

const css = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  background-color: black;

  .onloading {
    animation: is-rotating 1s infinite;
    border: 6px solid #e9dede;
    border-radius: 50%;
    border-top-color: purple;
    width: 50px;
    height: 50px;
  }

  @keyframes is-rotating {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default css;
