// PlaylistsStyles.js
import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  ul {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 1rem;
    height: 100%;
    max-height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 0.1rem;
      &-thumb {
        background-color: rgba(255, 255, 255, 0.6);
      }
    }
    li {
      display: flex;
      cursor: pointer;
      transition: 0.3s ease-in-out;
      border-radius: 0.2rem;
      &:hover {
        color: #000000;
        background-color: rgba(255, 255, 255, 0.6);
      }
      .selected {
        width:100%;
        hight:100%;
        border-radius: 0.2rem;
        padding: 0.5rem;
        color: #000000;
        background-color: rgba(255, 255, 255, 0.6);
      }
      .notselected {
        width:100%;
        hight:100%;
        padding: 0.5rem;
        border-radius: 0.2rem;
      }
    }
  }
`;
