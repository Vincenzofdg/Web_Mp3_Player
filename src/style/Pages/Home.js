import styled from "styled-components";

const css = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px 30px 0px 30px;

  .search-box {
    width: 30%;
  }

  .albums-board {
    display: grid;
    grid-template-columns: repeat(8, auto);
    grid-template-rows: repeat(8, auto);
    grid-gap: 15px;
  }
`;

export default css;
