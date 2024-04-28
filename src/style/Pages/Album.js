import styled from "styled-components";

const css = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .album-info {
    width: 50%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 60px 0px 70px 0px;

    #album-cover {
      border-radius: 20px;
      width: 200px;
      height: 200px;
      cursor: pointer;
    }

    .info {
      width: 95%;
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      align-items: center;

      .additional {
        width: 60%;
        font-size: 13px;
        display: flex;
        flex-direction: rows;
        justify-content: space-around;
      }
    }
  }

  .song-list {
    width: 95%;

    .song {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      // border-bottom: 1px solid black;

      #title {
        display: flex;
        flex-direction: column;
        align-items: left;
        flex-grow: 1;
        border-bottom: 1px solid black;
      }

      #track {
        width: 60%;
      }
    }
  }
`;

export default css;
