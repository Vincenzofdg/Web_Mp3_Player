import styled from "styled-components";

const css = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 25px 45px 0 45px;

  .left-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .application-name {
      display: flex;
      flex-direction: column;
      align-items: center;
      cursor: pointer;

      h1 {
        font-size: 18px;
      }
      h2 {
        font-size: 12px;
      }
    }

    #logo {
      width: 40px;
      height: 40px;
    }
  }

  .right-container {
    background: #bad8e7;
    border-radius: 15px 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 15%;
    cursor: pointer;
    #icon {
      width: 30px;
      height: 30px;
    }
    :hover {
      background: #7ac0e3;
      transition: background 500ms linear;
    }
  }
`;

export default css;
