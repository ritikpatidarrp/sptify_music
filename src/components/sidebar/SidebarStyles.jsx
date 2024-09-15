import styled from 'styled-components';

export const Container = styled.div`
  color: #b3b3b3;
  display: flex;
  flex-direction: column;
  height: 90vh;
  transition: width 0.3s ease;
  width: ${(props) => props.width};
  /* background-color: #dc0000; */

  .home_search, .library {
    border: solid;
    background-color: #1a1515;
    border-color: #7f7f7f;
    /* background-color: #ff0000; */
    margin: 0.4rem;
    border-radius: 0.4rem;
  }
  .home_search {
    height: 20%;
  }
  .library {
    height: 80%;
  }
  .playlist_sbar {
    height: 100%;
    display: grid;
    grid-template-rows: 3vh 68.35vh;
    margin-bottom: 1rem;
  }

  .p_sbar {
    display: flex;
    flex-direction: column;
    margin-right: 10rem;
    padding: 1rem;
    justify-content: center;
    background-color: #525252;
    align-content: center;
    border-radius: 1rem;
  }

  .top_links {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
    cursor: pointer;
    border-radius: 4px;
    transition: background-color 0.3s ease, color 0.3s ease;
    font-weight: bold;
    &:hover {
      color: white;
    }
  }

  .toggle-button {
    align-self: flex-end;
    margin: 1rem;
    cursor: pointer;
    color: #b3b3b3;
    transition: color 0.3s ease;
    &:hover {
      color: white;
    }
  }
`;
