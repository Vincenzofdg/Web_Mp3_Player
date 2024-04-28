import styled from "styled-components";

const css = styled.div`
  background: black;
  color: white;

  width: 150px;
  height: 150px;

  .cover {
    width: 100%;
    height: 85%;
    object-fit: cover;
  }

  .album {
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 16px;
  }

  :hover {
    transform: scale(1.03);
    cursor: pointer;
  }
`;

export default css;
